import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMyAccess, requestAccess } from "@/lib/access.functions";

export function useMyAccess() {
  const fetchAccess = useServerFn(getMyAccess);
  const query = useQuery({
    queryKey: ["my-access"],
    queryFn: () => fetchAccess(),
    staleTime: 30_000,
  });

  const productIds = query.data?.productIds ?? [];
  const requests = query.data?.requests ?? [];

  return {
    ...query,
    isAdmin: query.data?.isAdmin ?? false,
    productIds,
    requests,
    hasAccess: (productId: string) => productIds.includes(productId),
    pendingFor: (productId: string) =>
      requests.some((r) => r.productId === productId && r.status === "pending"),
  };
}

export function useRequestAccess() {
  const queryClient = useQueryClient();
  const submit = useServerFn(requestAccess);
  return useMutation({
    mutationFn: (vars: { productId: string; message?: string }) => submit({ data: vars }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["my-access"] }),
  });
}
