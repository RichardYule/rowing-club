/**
 * Content collections — typed Markdown content for the site.
 *
 * The `news` collection powers /news/. The press secretary adds posts
 * by creating one Markdown file per story in src/content/news/, with any
 * photos in the same folder — no code required. Step-by-step guide:
 * docs/adding-news.md.
 */
import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One-sentence summary, shown on cards and used as the SEO description. */
      description: z.string(),
      /** Publication date, e.g. 2026-08-01 */
      pubDate: z.coerce.date(),
      author: z.string().default('PCRC Press Secretary'),
      /**
       * Optional photo, referenced relative to the post, e.g. `./my-photo.jpg`.
       * The file lives in src/content/news/ next to the post and is
       * optimised automatically (AVIF/WebP, responsive sizes).
       */
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Drafts are built locally but hidden from the published site. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { news };
