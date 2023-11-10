import paths from '$lib/constants/paths';
import type { Actions } from './$types';
import { fail, redirect, type ServerLoad } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { requestPasswordResetSchema } from './schema';
import { useAdminContext } from '$lib/server/pocketbase';

//

export const load: ServerLoad = async () => {
	const form = await superValidate(null, requestPasswordResetSchema);
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const form = await superValidate(data, requestPasswordResetSchema);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			await useAdminContext(async (pb) => {
				await pb.collection('users').requestPasswordReset(form.data.email);
			});
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}

		throw redirect(302, paths.passwordReset.thanks);
	}
};
