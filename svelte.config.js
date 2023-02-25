import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		typescript: {
			config: (config) => {
				if (Array.isArray(config.include)) {
					config.include = [
						...config.include,
						'../__mocks__/**/*.js',
						'../__mocks__/**/*.ts',
						'../__mocks__/**/*.svelte',
						'../__tests__/**/*.js',
						'../__tests__/**/*.ts',
						'../__tests__/**/*.svelte',
						'../vitest.config.ts'
					].filter((path) => !path.includes('../tests/'));
				}
				return config;
			}
		}
	}
};

export default config;
