create policy "profiles_select_own"
on public.mypaw_profiles
for select
using (auth.uid() = auth_user_id);

create policy "profiles_update_own"
on public.mypaw_profiles
for update
using (auth.uid() = auth_user_id);
