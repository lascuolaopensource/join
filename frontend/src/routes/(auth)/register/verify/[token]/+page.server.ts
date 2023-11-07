import paths from '$lib/constants/paths';
import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase/types';
import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	try {
		const token = params.token;
		if (token) {
			await pb.collection(Collections.Users).confirmVerification(token);
		}
	} catch (error) {
		console.log(error);
		throw redirect(302, paths.register.error);
	}
	throw redirect(302, paths.register.confirm);
};
