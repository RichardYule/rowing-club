## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Project tracking

Improvement work is tracked in-repo:

- `docs/roadmap.md` — the single to-do list (Now/Next/Later/Done, stable `R-xx` IDs).
- `docs/decisions.md` — decision log (`D-xx`).
- `docs/reviews/` — competitor-site research; findings (`F-xx`) feed roadmap items.

At the start of a session, orient yourself from the repo rather than asking
the user to re-explain:

1. Read the **Current state** section of `README.md` — where the project
   stands (demo deployment, de-indexed, test emails).
2. Check the **Now** column of `docs/roadmap.md` for current priorities.
3. Skim recent entries in `docs/decisions.md` before touching anything they
   cover — several carry "before launch" instructions (e.g. D-06, D-09) that
   must not be undone accidentally.

When work finishes, move its roadmap item to Done (with date/commit); when a
significant decision is made, log it in `docs/decisions.md`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)