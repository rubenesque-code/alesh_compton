import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		alias: {
			'^assets/*': 'src/assets/*',

			'^sections': './src/lib/components/sections',
			'^layouts': './src/lib/components/layouts',
			'^types': './src/lib/types',
			'^data': './src/lib/data',
			'^helpers': './src/lib/helpers'
		}
	},

	preprocess: vitePreprocess()
};

export default config;
