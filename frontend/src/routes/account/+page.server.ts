import paths from '$lib/constants/paths';
import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import type { Actions } from './$types';

export const load = async ({ locals }) => {
	if (!locals?.user) throw redirect(302, paths.login);
	return { user: locals.user };
};

export const actions: Actions = {
	sendVerification: async ({ locals }) => {
		try {
			const user = locals.user;
			await pb.collection('users').requestVerification(user?.email);
		} catch (error) {
			console.log(error);
		}
	}
};
