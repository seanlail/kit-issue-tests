import { render, screen } from '@testing-library/svelte';

import LayoutWrapper from './LayoutWrapper.svelte';

describe('Layout', () => {
	it('should render slot inside the main element', () => {
		render(LayoutWrapper, {});

		const element = screen.getByTestId('slot-text');
		expect(element).toBeInTheDocument();

		expect(element.parentElement).toBeDefined();

		if (element.parentElement) {
			expect(element.parentElement.tagName).toBe('MAIN');
		}
	});
});
