import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

const DEV_PORT = 2121;


// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
  output: 'server',
  /* Like Vercel, Netlify,… Mimicking for dev. server */
  // trailingSlash: 'always',
	adapter: vercel(),
  server: {
    /* Dev. server only */
    port: DEV_PORT
  },
  integrations: [
  //
  sitemap(), tailwind()]
});
