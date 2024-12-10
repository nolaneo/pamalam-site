// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://pamalam.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind()],
});