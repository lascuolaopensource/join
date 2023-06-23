import paths from '$lib/constants/paths';
import { pb } from '$lib/pocketbase';
import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	try {
		const token = params.token;
		if (token) {
			await pb.collection('users').confirmVerification(token);
		}
	} catch (error) {
		console.log(error.name);
		throw redirect(302, paths.register.error);
	}
	throw redirect(302, paths.register.confirm);
};
