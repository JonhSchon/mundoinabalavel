revoke all on function public.has_role(uuid, public.app_role) from public, anon;
grant execute on function public.has_role(uuid, public.app_role) to authenticated, service_role;

revoke all on function public.validate_access_request() from public, anon, authenticated;
grant execute on function public.validate_access_request() to service_role;