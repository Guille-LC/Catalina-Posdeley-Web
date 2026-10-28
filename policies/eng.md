# Repository Policies

This document collects the working policies for this repository, numbered in the order they are defined.

Spanish version: [esp.md](esp.md)

---

## Considerations

### How to run the repo

1. Install dependencies: `npm install`.
2. Create a `.env` file at the root with the required variables:
   - `MONGODB_URI`: MongoDB Atlas connection string (includes user, password and database name).
   - `NEXT_PUBLIC_SITE_URL`: the site's URL (in development, `http://localhost:4000`).
3. Start the dev server: `npm run dev` (runs on port 4000, not 3000, to avoid clashing with other projects).
4. To check a production build: `npm run build` and then `npm run start`.

### Database (MongoDB)

- Uses MongoDB Atlas, cluster `catalina-posdeley-libro.e1a40oj.mongodb.net`, database `catalina-posdeley-librosDB`, collection `books`.
- The cluster is on the free plan (M0) and **pauses on inactivity**. If a connection error shows up in the deploy or locally (`querySrv ENOTFOUND`, timeouts), first check the Atlas dashboard for a paused cluster and resume it.
- Vercel has the "MongoDB Atlas" Marketplace integration installed, which injects its own `MONGODB_URI` variable. That integration-generated URI **does not include the database name** in its path — that's why `connectToDB()` in [src/lib/mongoose.ts](../src/lib/mongoose.ts) explicitly passes `dbName: "catalina-posdeley-librosDB"` as a connect option. Don't remove that option, even if the `.env` URI already includes the database name.
- The Mongoose model is registered with the `mongoose.models[name] || mongoose.model(name, schema)` guard to avoid `OverwriteModelError` on hot-reload (dev) and on warm serverless functions (production). Don't remove that guard.
- Pages and the API never `fetch` the site's own API (`/api/obras`) from a Server Component — they all use [src/lib/getBooks.ts](../src/lib/getBooks.ts), which calls Mongo directly. Self-fetching the API from the server breaks on Vercel (hardcoded or invalid URL) and also hits a known Next.js/undici bug with `cache: "no-store"`.

### Styles (Sass)

- Tailwind's import (`@import "tailwindcss";` plus the `@theme inline` block) lives separately, in [src/styles/app/tailwind.css](../src/styles/app/tailwind.css) (plain CSS). If that `@import` moves into a `.scss` file, Sass treats it as its own (deprecated) `@import` and throws a warning on every build/request — that's why this one file stays `.css`, not `.scss`.
- `globals.scss` only holds the variables (`:root`), dark mode, and the `body` rule. Both files are imported together from `src/app/layout.tsx`.

---

## Policy 1 — Branching and merging

From now on, no work is done directly on `main`. For any change (feature, fix, experiment, etc.) you must:

1. Create a new branch off `main`, with a name that describes the work (e.g. `fix-mongo-connection`, `feature-newsletter`).
2. Do the work and commits on that branch.
3. When opening the PR, describe in detail the changes made on the branch and ask for permission before merging. Never merge without permission.
4. Once finished and tested, merge the branch into `main`.

Never commit or push directly to `main`.

## Policy 2 — Folder organization

Respect the project's folder structure. Every component must have its own folder (named after the component), instead of sitting as a loose file next to other components.

## Policy 3 — Code conventions

- Variables and functions: `camelCase` (e.g. `getBooks`, `isValid`).
- React components, types and interfaces: `PascalCase` (e.g. `Bookcard`, `Book`).
- Component files: same name as the component, inside its own folder (see Policy 2).
- Environment variables and config constants: `UPPER_SNAKE_CASE` (e.g. `MONGODB_URI`).
- CSS classes (CSS Modules): `camelCase` (e.g. `botoneraGeneros`).

## Policy 4 — Styles organization

All styles are centralized in `src/styles/`, mirroring the same folder structure as `src/components/` and `src/app/` (a component at `src/components/Header/` has its styles at `src/styles/components/Header/`, a page at `src/app/autora/` has its own at `src/styles/app/autora/`, etc.). No component or page has a style file sitting next to its code.

Styles are written in Sass (`.module.scss` for modules with locally-scoped classes, `.scss`/`.css` for global ones). If two components share rules, factor them into a partial (`_name.scss`) with mixins instead of duplicating the rules in each file.
