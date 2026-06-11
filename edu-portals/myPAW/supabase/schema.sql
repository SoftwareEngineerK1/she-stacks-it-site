create table if not exists public.mypaw_profiles (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  email text unique not null,
  preferred_name text,
  legal_first_name text,
  legal_last_name text,
  campus_role text default 'student',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.mypaw_verification_codes (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  code text not null,
  purpose text not null,
  expires_at timestamptz not null,
  created_at timestamptz default now()
);

alter table public.mypaw_profiles enable row level security;
alter table public.mypaw_verification_codes enable row level security;
