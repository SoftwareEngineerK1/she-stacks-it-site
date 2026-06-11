# myPAW Production Monorepo

Production route:

```txt
https://shestacksit.com/edu-portals/myPAW
```

## Stack

- GitHub
- Netlify
- Vite + React + TypeScript
- Supabase
- Resend
- Expo placeholder for mobile app

## Local setup

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

## Netlify settings

Build command:

```bash
pnpm install && pnpm build
```

Publish directory:

```txt
01_Presentation-Layer/Multi-System/Browser-System/web-apps/web-public/dist
```

Functions directory:

```txt
netlify/functions
```

## Required environment variables

```txt
VITE_APP_BASE_PATH=/edu-portals/myPAW
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
JWT_SECRET=
MYPAW_APP_URL=https://shestacksit.com/edu-portals/myPAW
```
