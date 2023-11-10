import paths from '$lib/constants/paths';
import { Collections } from '$lib/pocketbase/types';
import { useAdminContext } from '$lib/server/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, fetch }) => {
	try {
		await useAdminContext(async (pb) => {
			const token = params.token;
			if (token) {
				await pb.collection(Collections.Users).confirmVerification(token, { fetch });
			}
		});
	} catch (error) {
		console.log(error);
		throw redirect(302, paths.register.error);
	}
	throw redirect(302, paths.register.confirm);
};
