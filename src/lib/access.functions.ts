import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

type RequestStatus = "pending" | "approved" | "rejected";

/** Garante um perfil e devolve produtos liberados + pedidos do próprio aluno. */
export const getMyAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId, claims } = context;

    const email = typeof claims["email"] === "string" ? (claims["email"] as string) : null;
    const meta = (claims["user_metadata"] ?? {}) as Record<string, unknown>;
    const fullName = typeof meta["full_name"] === "string" ? (meta["full_name"] as string) : null;

    await supabase.from("profiles").upsert(
      { id: userId, email, full_name: fullName, updated_at: new Date().toISOString() },
      { onConflict: "id" },
    );

    const [{ data: ents }, { data: reqs }, { data: isAdmin }] = await Promise.all([
      supabase.from("entitlements").select("product_id").eq("user_id", userId),
      supabase.from("access_requests").select("id, product_id, status, created_at").eq("user_id", userId),
      supabase.rpc("has_role", { _user_id: userId, _role: "admin" }),
    ]);

    return {
      isAdmin: Boolean(isAdmin),
      productIds: (ents ?? []).map((e) => e.product_id),
      requests: (reqs ?? []).map((r) => ({
        id: r.id,
        productId: r.product_id,
        status: r.status as RequestStatus,
        createdAt: r.created_at,
      })),
    };
  });

/** O aluno pede liberação de um produto. */
export const requestAccess = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { productId: string; message?: string }) => {
    const productId = String(input?.productId ?? "").trim();
    if (!productId) throw new Error("Produto inválido");
    return { productId, message: (input.message ?? "").slice(0, 1000) };
  })
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: existing } = await supabase
      .from("access_requests")
      .select("id")
      .eq("user_id", userId)
      .eq("product_id", data.productId)
      .eq("status", "pending")
      .maybeSingle();
    if (existing) return { ok: true, alreadyPending: true };

    const { error } = await supabase.from("access_requests").insert({
      user_id: userId,
      product_id: data.productId,
      message: data.message || null,
      status: "pending",
    });
    if (error) throw new Error(error.message);
    return { ok: true, alreadyPending: false };
  });

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error || !data) throw new Error("Acesso restrito ao administrador");
}

/** Painel do administrador: alunos, liberações e pedidos. */
export const adminOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabase } = context;

    const [{ data: profiles }, { data: ents }, { data: reqs }] = await Promise.all([
      supabase.from("profiles").select("id, email, full_name, created_at").order("created_at", { ascending: false }),
      supabase.from("entitlements").select("id, user_id, product_id, note, created_at"),
      supabase
        .from("access_requests")
        .select("id, user_id, product_id, status, message, created_at")
        .order("created_at", { ascending: false }),
    ]);

    return {
      members: (profiles ?? []).map((p) => ({
        id: p.id,
        email: p.email,
        fullName: p.full_name,
        createdAt: p.created_at,
        productIds: (ents ?? []).filter((e) => e.user_id === p.id).map((e) => e.product_id),
      })),
      requests: (reqs ?? []).map((r) => ({
        id: r.id,
        userId: r.user_id,
        productId: r.product_id,
        status: r.status as RequestStatus,
        message: r.message,
        createdAt: r.created_at,
      })),
    };
  });

/** Libera ou retira o acesso de um aluno a um produto. */
export const setEntitlement = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { userId: string; productId: string; granted: boolean }) => {
    if (!input?.userId || !input?.productId) throw new Error("Dados incompletos");
    return { userId: input.userId, productId: input.productId, granted: Boolean(input.granted) };
  })
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase, userId } = context;

    if (data.granted) {
      const { error } = await supabase
        .from("entitlements")
        .upsert(
          { user_id: data.userId, product_id: data.productId, granted_by: userId },
          { onConflict: "user_id,product_id" },
        );
      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabase
        .from("entitlements")
        .delete()
        .eq("user_id", data.userId)
        .eq("product_id", data.productId);
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });

/** Aprova ou recusa um pedido de liberação. */
export const decideRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { requestId: string; approve: boolean; note?: string }) => {
    if (!input?.requestId) throw new Error("Pedido inválido");
    return { requestId: input.requestId, approve: Boolean(input.approve), note: (input.note ?? "").slice(0, 500) };
  })
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase, userId } = context;

    const { data: req, error: readError } = await supabase
      .from("access_requests")
      .select("id, user_id, product_id, status")
      .eq("id", data.requestId)
      .maybeSingle();
    if (readError) throw new Error(readError.message);
    if (!req) throw new Error("Pedido não encontrado");

    if (data.approve) {
      const { error } = await supabase
        .from("entitlements")
        .upsert(
          { user_id: req.user_id, product_id: req.product_id, granted_by: userId, note: "Liberado por pedido" },
          { onConflict: "user_id,product_id" },
        );
      if (error) throw new Error(error.message);
    }

    const { error } = await supabase
      .from("access_requests")
      .update({
        status: data.approve ? "approved" : "rejected",
        decision_note: data.note || null,
        decided_by: userId,
        decided_at: new Date().toISOString(),
      })
      .eq("id", data.requestId);
    if (error) throw new Error(error.message);

    return { ok: true };
  });
