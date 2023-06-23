import paths from '$lib/constants/paths';
import type { Actions } from './$types';
import { error, fail, redirect, type ServerLoad } from '@sveltejs/kit';
import { superValidate, setError } from 'sveltekit-superforms/server';
import { reqPasswordReset } from '$lib/zod/schema';
import { pb } from '$lib/pocketbase';

export const load: ServerLoad = async ({ locals }) => {
	// always return `form` in load and form actions
	const form = await superValidate(null, reqPasswordReset);
	return { form };
};
export const actions: Actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
		const form = await superValidate(data, reqPasswordReset);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			await pb.collection('users').requestPasswordReset(form.data.email);
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}
		throw redirect(302, paths.passwordReset.thanks);
	}
};
