# Fauzi Transindo — Cloudflare Workers Backup

This branch is reserved for an independent Cloudflare Workers deployment of
https://www.kirimbaranglogistik.com/. Production remains on Vercel from `main`.

## Status (2026-11-24)
- Cloudflare Vite configuration: prepared
- Worker configuration: prepared (`fauzi-transindo-backup`)
- Dependencies: changed in package.json but **package-lock.json not regenerated**
- Build / deploy to workers.dev: **NOT DONE**
- Cloudflare account has no workers.dev subdomain yet and has no Worker
- Vercel's `main` branch and domain DNS: unchanged

## Steps to finish
1. Select an account-wide workers.dev subdomain in the Cloudflare dashboard.
2. From this branch, run `npm install --package-lock-only`, then
   `npm ci && npm run build`. Commit the updated package-lock.json.
3. Test the Cloudflare Vite plugin and Tailwind output. The previous Vercel
   build used `@lovable.dev/vite-tanstack-config` plus Nitro. Verify that
   the replaced Vite configuration yields equivalent routes, styles and
   server error handling.
4. Connect this GitHub branch to a new Cloudflare Worker in Workers Builds
   (GitHub app authorization is an explicit user action); use worker name
   `fauzi-transindo-backup`.
5. Deploy to `*.workers.dev`, then test hero images, automatic slideshow,
   navigation, FAQ, WhatsApp (lp) message, click tracking, GTM and GA4.
6. Do **not** add kirimbaranglogistik.com as a custom domain or alter DNS.
   Keep Vercel production online until a separate cutover decision.

## Safe production settings
- Worker: `fauzi-transindo-backup`
- Framework: TanStack Start
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Compatibility date: 2026-11-24

## Important
This is a migration *preparation*, not an independent live backup until
Cloudflare build and runtime checks pass.
Do not run `npm ci` on this branch before updating the lockfile.

Documentation:
https://developers.cloudflare.com/workers/static-assets/migration-guides/vercel-to-workers/tanstack-start/
