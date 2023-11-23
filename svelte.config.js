import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		alias: {
			'^^assets/*': 'src/assets/*',

			'^sections': './src/lib/components/sections',
			'^layouts': './src/lib/components/layouts',
			'^types': './src/lib/types',
			'^data': './src/lib/data',
			'^helpers': './src/lib/helpers',
			'^components': './src/lib/components',
			'^stores': 'src/lib/stores',
			'^assets/*': 'src/lib/assets'
		}
	},

	preprocess: vitePreprocess()
};

export default config;
