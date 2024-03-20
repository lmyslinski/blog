import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import astroRemark from "@astrojs/markdown-remark";




// https://astro.build/config
export default defineConfig({
	site: 'https://lmyslinski.com',
	integrations: [mdx(), sitemap(), tailwind(), react({
		include: ['**/src/components/*'],
	  }),],
});
