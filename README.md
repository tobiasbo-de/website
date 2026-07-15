# tobiasbo.de

Personal website of Tobias Bode, built with [Next.js](https://nextjs.org), React, and [Tailwind CSS](https://tailwindcss.com).

![Logo with the initials TB and an orange shadow](/public/tb-logo.svg)

## Development

Requires [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `pnpm dev` -> start the development server
- `pnpm build` -> build for production
- `pnpm start` -> serve the production build
- `pnpm lint` -> run ESLint
- `pnpm format` -> run Prettier

## Structure

- `app/` -> Next.js App Router entry, layout, and global styles
- `components/` -> UI, layout, and section components
- `content/` -> site content and configuration
- `public/` -> static assets (fonts, logo, animations)
