# PrintForge (printforge-ts)

PrintForge is a small Next.js + TypeScript demo for browsing 3D-printable models. It provides category browsing, search, pagination, and per-model pages. The project uses a lightweight SQLite-backed data layer with JSON seed files for development.

**Quick Start**

Prerequisites: Node.js 18+ and npm (or pnpm/yarn). From the repository root:

```bash
npm install
npm run dev
```

The `dev` script will run the local seed scripts and start the Next.js dev server. Visit http://localhost:3000 to view the app.

**Scripts**

- `npm run dev` — seeds local data then runs the dev server
- `npm run build` — builds the production bundle
- `npm start` — starts the production server after build
- `npm run lint` — runs ESLint

See `package.json` for details and exact script definitions.

**Data & Seeding**

The app ships with JSON fixtures at [lib/data](lib/data) and TypeScript seeders at [lib/seeds](lib/seeds). The dev script runs the seeders automatically, but you can run them manually:

```bash
npx tsx lib/seeds/seed_models.ts
npx tsx lib/seeds/seed_categories.ts
```

The app uses SQLite (see [lib/db.ts](lib/db.ts)) to persist seeded data for local development.

**Project Structure (high level)**

- `app/` — Next.js App Router pages and layout (UI entrypoints)
- `app/components/` — React components used across pages
- `lib/` — application logic: DB helpers, models, constants, seed scripts
- `data/` — static JSON fixtures used by the seeders
- `public/` — static assets and images

Key files:

- [app/page.tsx](app/page.tsx) — home page
- [app/3d-models/page.tsx](app/3d-models/page.tsx) — models listing
- [lib/seeds/seed_models.ts](lib/seeds/seed_models.ts) and [lib/seeds/seed_categories.ts](lib/seeds/seed_categories.ts) — seed scripts
- [lib/db.ts](lib/db.ts) — SQLite helper

**Development Notes**

- Pagination, filtering and category routes are implemented inside the `app/3d-models` tree.
- Add or update seed data in `lib/data/models.json` and `lib/data/categories.json`, then re-run the seed scripts.
- The dev script seeds data automatically to keep the experience repeatable.

**Deployment**

This is a standard Next.js app and can be deployed to Vercel or any platform that supports Next.js. Run `npm run build` and `npm start` to run a production server.

---

For Next.js core docs and advanced features, see https://nextjs.org/docs.
