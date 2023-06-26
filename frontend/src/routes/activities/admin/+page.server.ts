import paths from '$lib/constants/paths';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	console.log(locals.user?.role);
	if (locals.user?.role !== 'activitiesAdmin') throw redirect(302, paths.account);
	return;
};
