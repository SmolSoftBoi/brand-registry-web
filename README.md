# Brand Registry Web

Next.js web app and API for searching, viewing, and exporting the Brand Registry dataset.

The canonical registry lives in [`SmolSoftBoi/brand-registry`](https://github.com/SmolSoftBoi/brand-registry).

## Goals

- Search verified and candidate brand colour records.
- Show source confidence and last-verified metadata.
- Provide copy-friendly CSS, SCSS, Tailwind, and JSON exports.
- Keep the app as a consumer of the registry, not the source of truth.

## Local development

```bash
yarn install
yarn dev
```

## Registry integration

For the MVP, this app can consume registry data at build time from a local package, a GitHub raw file, or a generated JSON export. A database read model can be added later for advanced search, saved palettes, moderation, and analytics.
