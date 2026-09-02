# apps/website

The main public portfolio site for Rishabh Choudhary. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and GSAP.

**Status**: Active — primary workspace  
**Live URL**: https://rishabh-c.vercel.app

---

## Local development

Run from the **repo root**:

```bash
npm install          # install all workspace deps (run once)
npm run dev:website  # → http://localhost:3000
```

Or run directly from this directory:

```bash
cd apps/website
npm run dev
```

---

## Key directories

```
apps/website/
├── app/                        # Next.js App Router — one folder = one URL
│   ├── page.tsx                # Homepage (/)
│   ├── layout.tsx              # Shared shell (fonts, header, page transitions)
│   └── casestudy/              # Case-study pages
│       ├── chestnut/           #   /casestudy/chestnut
│       ├── dashboard/          #   /casestudy/dashboard
│       ├── design-system/      #   /casestudy/design-system
│       └── onboarding/         #   /casestudy/onboarding
├── components/                 # React building blocks
│   ├── home-ds/                # Homepage: big sections/ + small ui/ pieces
│   └── case-study/             # Pieces used to build case-study pages
├── lib/                        # All content (words) + data + utilities
│   ├── site-content.ts               # Homepage copy
│   ├── chestnut-case-study.ts        # Chestnut case-study content
│   ├── hrms-dashboard-case-study.ts  # Dashboard case-study content
│   ├── arksaber-case-study.ts        # Design-system case-study content
│   └── types.ts                      # Shapes for the content above
├── hooks/                      # Custom React hooks (use-gsap-reveal.ts)
└── public/                     # Static assets (case-study images, icons)
```

See [`docs/ARCHITECTURE.md`](../../docs/ARCHITECTURE.md) for the full codebase guide.

---

## Updating content

Most site text and structured data lives in `apps/website/lib/`, so you rarely
need to touch component files to change wording.

| What you want to change | File to edit |
|-------------------------|-------------|
| Homepage text, hero, work cards | `lib/site-content.ts` |
| Chestnut case study | `lib/chestnut-case-study.ts` |
| HRMS dashboard case study | `lib/hrms-dashboard-case-study.ts` |
| Design-system case study | `lib/arksaber-case-study.ts` |
| Onboarding case study | `app/casestudy/onboarding/page.tsx` (content is inline here) |

---

## Adding a new case study

1. Add assets to `public/case-study/<slug>/`
2. Create `lib/<slug>-case-study.ts` with typed content
3. Create `app/casestudy/<slug>/page.tsx` to render it
4. Add a work card to `homeContent.works` in `lib/site-content.ts`

---

## Environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-website.vercel.app
WEBSITE_API_BASE_URL=https://your-api.vercel.app
```

Copy `.env.example` at the repo root to `.env.local` here.

---

## Deployment

Deployed as a standalone Vercel project with root directory `apps/website`.  
Requires `WEBSITE_API_BASE_URL` to be set to the live URL of `services/website-api`.

See [`docs/github-vercel-setup.md`](../../docs/github-vercel-setup.md) for the full deployment guide.

---

## Visitor analytics

Self-hosted, server-side page-view tracking. `middleware.ts` records each page
view into the Neon `visitor_logs` table; the dashboard lives at **`/admin/visitors`**
behind HTTP Basic Auth (`ADMIN_USER` / `ADMIN_PASSWORD`).

Because it runs in middleware rather than a client script, it sees the visitors
that ad blockers hide from Vercel Analytics and Microsoft Clarity, which are also
loaded in `app/layout.tsx`.

### Filtering out your own traffic

Rows are never deleted, only classified — and "is this the owner?" is decided
when *reading*, not when writing. That makes every classification retroactive
and reversible.

- **`/admin/visitors` → "This is me"** on any row tags that browser
  (`visitor_id`) forever. **"+ network"** tags the whole `/16` prefix, which is
  what survives a home ISP rotating your address daily.
- **`/admin/exclude-me`** does the same for the browser you are currently in,
  *and* sets a cookie that stops the row being written at all.
- **`/admin/include-me`** clears that cookie.
- The **Owner & bot rules** panel lists every rule with its match count, and
  removing a rule immediately restores those rows to the "Real" tab.

A cookie alone was never enough: it covers one browser on one device on one
origin and dies on any cache clear. The rules table is the durable layer.

### Dev writes are blocked

`.env.local` holds the **production** `DATABASE_URL`, so before this guard
existed every `pnpm dev` page load inserted a production row (509 of the first
671). Logging now requires `VERCEL_ENV === "production"`. To test tracking
locally, set `VISITOR_LOG_LOCAL=1`.

### Attribution

Append `?src=<label>` to any link — one label per company you send the portfolio
to — and the **Campaign sources** panel shows who opened it and which case
studies they read. `utm_source` / `utm_medium` / `utm_campaign` are captured too.

### Commands

```bash
pnpm db:migrate                        # apply db/migrations/*.sql
pnpm db:prune -- --localhost --bots    # dry run; add --apply to delete
pnpm db:prune -- --older-than=365 --apply
```
