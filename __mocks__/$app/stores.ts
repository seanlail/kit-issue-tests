import type { Page } from '@sveltejs/kit';
import { readable } from 'svelte/store';

const _page = readable<Page>({
	url: new URL('http://localhost'),
	params: {},
	route: { id: '' },
	status: 200,
	error: null,
	data: {},
	form: undefined
});

export const page = { subscribe: _page.subscribe };
