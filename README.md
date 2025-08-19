# Info
**Author:** Daniil

## Assumptions
- Backend (NestJS) runs at http://localhost:3002.
- Gallery endpoint: GET /api/creations/explore returning items shaped like:
  id, title, image, category?, description?, creator { name, avatar? }.
- Images are served under /images/ (e.g., http://localhost:3002/images/…).
- Image extensions are normalized to lowercase (.webp, .png, .jpg). If the API returns WEPB/WEBP or mixed casing, the frontend normalizes the URL and falls back to a placeholder on error.
- Next.js App Router is used; next/image is configured to allow localhost:3002 sources (images.remotePatterns).
- Monorepo with pnpm/Turborepo; shared UI in packages/ui; Node.js >= 18, pnpm >= 8.
- Prisma dev uses SQLite with apps/api/prisma/.env → DATABASE_URL="file:./dev.db".
- Intercepting Routes modal works on client navigation from /explore; direct visit to /explore/[id] renders the full page (expected).

## Features Completed
- Explore Gallery (/explore)
  - Responsive (mobile-first) grid with Tailwind CSS.
  - NFT cards show image, creator name, title, optional category.
  - Subtle hover effects (scale/translate/shadow).
- NFT Detail
  - Full detail page at /explore/[id] (fallback on direct visit).
  - Modal detail via Next.js Intercepting Routes (@modal) when navigating from /explore.
  - Accessible close on backdrop click and Esc.
  - Modal animated with Framer Motion.
- Loading & UX
  - Skeleton loading via loading.tsx while fetching gallery data.
- SEO
  - Basic metadata (title, description, OpenGraph) on the Explore page.
- Images
  - External images from localhost:3002 allowed in Next config.
  - URL normalization for image extensions + placeholder on error.

# NFT Marketplace


# Frontend Developer Assessment — NFT Marketplace

**Author:** Daniil

## Assumptions
- Backend (NestJS) runs at http://localhost:3002.
- Gallery endpoint: GET /api/creations/explore returning items shaped like:
  id, title, image, category?, description?, creator { name, avatar? }.
- Images are served under /images/ (e.g., http://localhost:3002/images/…).
- Image extensions are normalized to lowercase (.webp, .png, .jpg). If the API returns WEPB/WEBP or mixed casing, the frontend normalizes the URL and falls back to a placeholder on error.
- Next.js App Router is used; next/image is configured to allow localhost:3002 sources (images.remotePatterns).
- Monorepo with pnpm/Turborepo; shared UI in packages/ui; Node.js >= 18, pnpm >= 8.
- Prisma dev uses SQLite with apps/api/prisma/.env → DATABASE_URL="file:./dev.db".
- Intercepting Routes modal works on client navigation from /explore; direct visit to /explore/[id] renders the full page (expected).
- **Case-sensitive imports fix (Linux):** UI imports were normalized from `../NFTCard` to `../NftCard` (e.g., `packages/ui/components/GridNFTCard/index.tsx`) to match actual folder/file names. Added `forceConsistentCasingInFileNames: true` in TS config to prevent future casing errors.

## Features Completed
- Explore Gallery (/explore)
  - Responsive (mobile-first) grid with Tailwind CSS.
  - NFT cards show image, creator name, title, optional category.
  - Subtle hover effects (scale/translate/shadow).
- NFT Detail
  - Full detail page at /explore/[id] (fallback on direct visit).
  - Modal detail via Next.js Intercepting Routes (@modal) when navigating from /explore.
  - Accessible close on backdrop click and Esc.
  - Modal animated with Framer Motion.
- Loading & UX
  - Skeleton loading via loading.tsx while fetching gallery data.
- SEO
  - Basic metadata (title, description, OpenGraph) on the Explore page.
- Images
  - External images from localhost:3002 allowed in Next config.
  - URL normalization for image extensions + placeholder on error.

# Problems

-Issues that need to be fixed. This is in http://localhost:3002/api/creations/explore . We need to check the API, because the 3rd picture arrives with the wrong WEBP. Therefore, the wrong path arrives there.


## Requirements

- [nodejs](http://nodejs.org/)
- [pnpm](https://pnpm.io/) (You can use another package manager, but `pnpm` is recommended.)
- [Yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)

## Package Manager

[Which package manager do you want to use?](https://turbo.build/repo/docs/getting-started/create-new#which-package-manager-do-you-want-to-use)

Turborepo doesn't handle installing packages, so you'll need to choose one of:

- [pnpm](https://pnpm.io/) (`Turborepo` recommends `pnpm`)
- [Yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)

## Installation

```shell
$ git clone git@github.com:ScaleInOrg/Full-Stack-Test.git <name>
$ cd <name>
```

`Warning` If you use `yarn` or `npm`, you need to update the `package.json` file in the root of the project and use your version of `yarn` or `npm`:

```json
{
  "packageManager": "yarn@1.22.22",
  "workspaces": ["apps/*", "packages/*"]
}
```

or

```json
{
  "packageManager": "npm@10.7.0",
  "workspaces": ["apps/*", "packages/*"]
}
```

You must to replace all `"workspace:*"` by `"*"` inside the `package.json` files in the `apps`, `packages` and the root of the project. Indeed, only `pnpm` uses the `workspace` keyword.

When your package manager is set, you can go to `apps/api/prisma` and add a `.env` file with the following content: `DATABASE_URL="file:./dev.db"`

Go to the root of the project and run the following command:

```shell
$ pnpm|yarn|npm install
```

## Run

```shell
$ pnpm|yarn|npm dev (to run all the apps)
```

Then open [localhost:3002](http://localhost:3002/) for the api, [localhost:3000](http://localhost:3000/) for the web and [localhost:3001](http://localhost:3001/) for the docs if the web app is already running.

`Be careful`
If you have run this script `pnpm|yarn|npm dev`, the docs app could be running before the web app. In this case, the docs app will be on [localhost:3000](http://localhost:3000/) and the web app on [localhost:3001](http://localhost:3001/)

## API

For the api, there are some routes available:

- [localhost:3002](http://localhost:3002/) list some images served by the api.
- [localhost:3002/api](http://localhost:3002/api) the starting point of the api.
- [localhost:3002/api/creations/:id](http://localhost:3002/api/creations/1) return the creation with the id 1.
- [localhost:3002/api/creations/explore](http://localhost:3002/api/creations/explore) return the creations to explore.
- [localhost:3002/api/categories](http://localhost:3002/api/categories) return all the categories.
- [localhost:3002/api/categories/trending](http://localhost:3002/api/categories/trending) return the trending categories.
- [localhost:3002/api/users](http://localhost:3002/api/users) return all the users.

## Features

- Monorepo with Turborepo
- Next.js for the web and docs apps:

  - App Router (Features available in /app)
  - SSR
  - Data Fetching on the server side using [streaming](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#streaming) and [Loading UI and Streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
  - Dynamic imports (Lazy Loading)[https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading]
  - tailwindcss
  - Responsive Design
  - animations (hover, click, etc.)
  - skeleton loading [Adding loading skeletons](https://nextjs.org/learn/dashboard-app/streaming#adding-loading-skeletons)
  - Modal with Parallel and Intercepting Routes [Parallel Routes: Modals](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals) [Intercepting Routes: Modals](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals)
  - [Dark Mode](https://tailwindcss.com/docs/dark-mode)

- NestJS for the api app
- Prisma for the database
