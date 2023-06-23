import paths from '$lib/constants/paths';
import type { Actions } from './$types';
import { error, fail, redirect, type ServerLoad } from '@sveltejs/kit';
import { superValidate, setError } from 'sveltekit-superforms/server';
import { passwordReset } from '$lib/zod/schema';
import { pb } from '$lib/pocketbase';

export const load: ServerLoad = async ({ locals }) => {
	if (locals.user) throw redirect(302, paths.account);

	// always return `form` in load and form actions
	const form = await superValidate(null, passwordReset);
	return { form };
};
export const actions: Actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
		const form = await superValidate(data, passwordReset);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			const token = params.token;
			if (token) {
				await pb
					.collection('users')
					.confirmPasswordReset(token, form.data.password, form.data.passwordConfirm);
			}
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}
		throw redirect(302, paths.passwordReset.confirm);
	}
};
