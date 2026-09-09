-- roles
create type public.app_role as enum ('admin','member');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "users read own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);
create policy "admins read all roles" on public.user_roles for select to authenticated using (public.has_role(auth.uid(),'admin'));

-- profiles
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;
create policy "users manage own profile" on public.profiles for select to authenticated using (auth.uid() = id);
create policy "users insert own profile" on public.profiles for insert to authenticated with check (auth.uid() = id);
create policy "users update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);
create policy "admins read profiles" on public.profiles for select to authenticated using (public.has_role(auth.uid(),'admin'));

-- entitlements (produtos liberados)
create table public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id text not null,
  granted_by uuid references auth.users(id) on delete set null,
  note text,
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);
grant select on public.entitlements to authenticated;
grant all on public.entitlements to service_role;
alter table public.entitlements enable row level security;
create policy "users read own entitlements" on public.entitlements for select to authenticated using (auth.uid() = user_id);
create policy "admins manage entitlements" on public.entitlements for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

-- pedidos de liberação
create table public.access_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id text not null,
  status text not null default 'pending',
  message text,
  decision_note text,
  decided_by uuid references auth.users(id) on delete set null,
  decided_at timestamptz,
  created_at timestamptz not null default now()
);
grant select, insert on public.access_requests to authenticated;
grant all on public.access_requests to service_role;
alter table public.access_requests enable row level security;
create policy "users read own requests" on public.access_requests for select to authenticated using (auth.uid() = user_id);
create policy "users create own requests" on public.access_requests for insert to authenticated with check (auth.uid() = user_id and status = 'pending');
create policy "admins manage requests" on public.access_requests for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

create or replace function public.validate_access_request()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.status not in ('pending','approved','rejected') then
    raise exception 'status inválido';
  end if;
  return new;
end;
$$;
create trigger validate_access_request_trg before insert or update on public.access_requests
for each row execute function public.validate_access_request();

create index access_requests_status_idx on public.access_requests(status);

-- administrador inicial
insert into public.user_roles (user_id, role) values ('af83cb01-e7e3-4994-98a4-0e6932f44d1d','admin')
on conflict do nothing;