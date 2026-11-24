# Fauzi Transindo — Cloudflare Workers Backup

This branch is reserved for an independent Cloudflare Workers deployment of
https://www.kirimbaranglogistik.com/. Production remains on Vercel from `main`.

## Verified progress (2026-11-24)
- Cloudflare account and workers.dev subdomain: connected, awadfauzi.workers.dev
- Cloudflare Worker 'fauzi-transindo-backup': created as **temporary placeholder only**, workers.dev disabled
- Cloudflare GitHub repository connection: created
- Cloudflare Vite config and wrangler.jsonc: prepared
- package.json and package-lock.json: updated by GitHub Actions
- GitHub Actions build: **PASSED** (run 45331417182)
- Actual Cloudflare app deployment: **NOT DONE**
- Runtime/Google tag testing on Cloudflare: **NOT DONE**
- Vercel production and domain DNS: **UNCHANGED**

## Deployment blocker
Cloudflare Workers Builds requires an authorized build token. The connected
Cloudflare tool cannot create Cloudflare API tokens because API Tokens permission
is unavailable. Do not copy API tokens into chat.

To finish, open Workers & Pages > fauzi-transindo-backup > Settings > Builds.
Connect GitHub repository awadfauzi/fauzi-transindo-lp through Cloudflare's
official authorization, selecting production branch cloudflare-backup-workers.
Use build command 'npm run build', deploy command 'npx wrangler deploy',
and root directory '/'. Do NOT bind a custom domain or change DNS.

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
