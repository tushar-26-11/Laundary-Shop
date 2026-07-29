# Kritika DryCleaners — React App

Your original Vite + React app, fully restyled with the new light, warm,
"Care Tag" design system — same components, same routes, same logic, new look.

## Run it

```bash
npm install
npm run dev
```
Then open the URL Vite prints (usually http://localhost:5173).

To build for production:
```bash
npm run build
npm run preview
```

## What I changed vs. your upload

**Kept 100% intact** (all logic, routes, and data untouched):
- `App.jsx` — routing, protected routes, role-based dashboard redirect
- `context/AuthContext.jsx` + `services/api.js` — your auth/JWT/axios setup
- Every dashboard page (`CustomerDashboard`, `StaffDashboard`, `AdminDashboard`,
  `OrderDetail`, `CreateOrder`) and `components/dashboard/*`
- `data/index.js` — services, pricing, workflow steps, FAQs, testimonials
  (only the placeholder phone/email/brand name were filled in)

**Restyled** (same class names, all new CSS — zero JSX risk):
- `styles/globals.css` — new color tokens, Fraunces + Plus Jakarta Sans +
  Space Mono type system, buttons, section scaffolding
- `styles/navbar.css`, `styles/hero.css`, `styles/sections.css` — full visual
  redesign of the navbar, hero, services, how‑it‑works timeline, tracking
  widget, features, testimonials, FAQ, contact and footer
- `styles/dashboard.css` and `styles/auth.css` were **left as-is** — they
  already read their colors from the shared tokens in `globals.css`, so the
  dashboards and login/register pages automatically pick up the new palette
  without needing a rewrite.
- `components/hero/HeroSection.jsx` — only the illustration's hardcoded hex
  colors were swapped to the new palette (added a couple of coloured
  "garments" mid-spin for flair); the component logic is unchanged.
- Brand renamed from the placeholder "Sparkle Dry Cleaners" to
  "Kritika DryCleaners" everywhere it appeared (nav, footer, auth pages,
  localStorage keys, `data/index.js`).

## The design system

- **Palette**: Orchid `#8E3FA0` + Flamingo `#E8437B` as the core brand pair,
  Marigold `#F5A524` for warmth, Teal `#17B897` for hygiene/trust — all on a
  soft lavender-white background (`#FAF7FC`). No blue-dominant or dark theme.
- **Type**: Fraunces (headlines), Plus Jakarta Sans (body/UI), Space Mono
  (tag IDs, prices — echoes your printed order-tag system, e.g. `DC-2026-1203`).
- **Signature — "The Care Tag"**: every card (`service-card`, `feature-card`,
  `timeline-card`, `testimonial-card`, `contact-card`, `safety-card`) gets a
  die-cut hole + soft shadow via CSS `::before`, and tilts in 3D on hover —
  a nod to the shop's own swing tags.
- **Motion**: hero has ambient floating gradient blobs and floating info
  chips (pure CSS, no JS needed), cards get a 3D hover tilt, page transitions
  use a simple fade-up. Respects `prefers-reduced-motion`.

## Good to know

- `TrackingPreviewSection`, `TrackPage`, the dashboards, and login/register
  all call your existing `services/api.js`, which expects a backend at
  `VITE_API_URL` (see `.env.example`). Without a backend running, the public
  marketing content (hero, services, how-it-works, features, testimonials,
  FAQ, contact) works perfectly — order tracking, auth, and dashboards will
  show their existing error/loading states until you connect one.
- All design tokens live in one place: the `:root` block at the top of
  `src/styles/globals.css`. Change a color or font there and it cascades
  through the entire app, dashboards included.
