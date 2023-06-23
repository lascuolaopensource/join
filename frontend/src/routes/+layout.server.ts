import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, parent }) => {
	await parent();
	if (locals.user) {
		return {
			user: locals.user
		};
	}
};
