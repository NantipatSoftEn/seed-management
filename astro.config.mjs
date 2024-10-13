import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

const DEV_PORT = 2121;


// https://astro.build/config
export default defineConfig({
  site: 'https://seed-management.vercel.app',
  // site: 'http://localhost:2121',
  base: '',
  output: 'server',
  /* Like Vercel, Netlify,… Mimicking for dev. server */
  // trailingSlash: 'always',
    adapter: vercel(),
  server: {
    /* Dev. server only */
    port: DEV_PORT
  },
  integrations: [//
  sitemap(), tailwind(), react()]
});
