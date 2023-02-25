import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		css: true,
		environment: 'jsdom',
		globals: true,
		include: ['src/__tests__/**/*.test.ts'],
		setupFiles: './src/__tests__/setupTests.ts',
		silent: true
	}
});
