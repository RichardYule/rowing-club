// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for sitemap, canonical links and Open Graph URLs.
  // Update this to your real domain (or your *.pages.dev URL) before going live.
  site: "https://tideway-rowing-club.pages.dev",

  // The site is fully static (the default), so `astro build` emits plain
  // HTML/CSS/JS to ./dist — exactly what Cloudflare Pages serves best.
  //
  // Need server rendering later (e.g. a contact-form API route)?
  //   npm install @astrojs/cloudflare
  // then add:
  //   import cloudflare from "@astrojs/cloudflare";
  //   adapter: cloudflare(),
  // and mark that route with `export const prerender = false;`

  integrations: [sitemap()],

  vite: {
    // Tailwind CSS v4 runs as a Vite plugin (no separate config file needed).
    plugins: [tailwindcss()],
  },
});
