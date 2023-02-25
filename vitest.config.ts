import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		css: true,
		environment: 'jsdom',
		globals: true,
		include: ['__tests__/**/*.test.ts'],
		setupFiles: './__tests__/setupTests.ts',
		silent: true
	}
});
