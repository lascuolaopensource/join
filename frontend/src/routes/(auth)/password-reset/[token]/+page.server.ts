import paths from '$lib/constants/paths';
import type { Actions } from './$types';
import { fail, redirect, type ServerLoad } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { passwordResetSchema } from './schema';
import { Collections } from '$lib/pocketbase/types';
import { useAdminContext } from '$lib/server/pocketbase';

//

export const load: ServerLoad = async () => {
	const form = await superValidate(passwordResetSchema);
	return { form };
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
		const form = await superValidate(data, passwordResetSchema);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			await useAdminContext(async (pb) => {
				const token = params.token;
				if (!token) return;
				await pb
					.collection(Collections.Users)
					.confirmPasswordReset(token, form.data.password, form.data.passwordConfirm);
			});
		} catch (error) {
			return fail(400, { form });
		}

		throw redirect(302, paths.passwordReset.confirm);
	}
};
