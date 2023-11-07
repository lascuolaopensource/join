import paths from '$lib/constants/paths';
import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import type { Actions, PageServerLoad } from './$types';
import { Collections } from '$lib/pocketbase/types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals?.user) throw redirect(302, paths.login);
	const user_info = await pb.collection(Collections.UsersInfo).getOne(locals.user.info);
	locals.user.info = user_info;
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
