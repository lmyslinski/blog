import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://lmyslinski.com',
	integrations: [sitemap(), tailwind(), react({
		include: ['**/src/components/*'],
	  }),],
});
