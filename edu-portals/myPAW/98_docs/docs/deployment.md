# myPAW Deployment

1. Create GitHub repository.
2. Push this generated monorepo.
3. Connect repository to Netlify.
4. Set build command to `pnpm install && pnpm build`.
5. Set publish directory to:
   `01_Presentation-Layer/Multi-System/Browser-System/web-apps/web-public/dist`
6. Add Netlify environment variables.
7. Add Supabase project URL and keys.
8. Add Resend API key.
9. Deploy production.
