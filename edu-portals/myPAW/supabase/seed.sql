insert into public.mypaw_profiles (
  email,
  preferred_name,
  legal_first_name,
  legal_last_name,
  campus_role
)
values (
  'demo.student@example.edu',
  'Demo Student',
  'Demo',
  'Student',
  'student'
)
on conflict (email) do nothing;
