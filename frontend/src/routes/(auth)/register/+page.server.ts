import type { Actions } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';
import { superValidate, setError } from 'sveltekit-superforms/server';
import { registerSchema } from '$lib/zod/schema';
import { pb } from '$lib/pocketbase';
import paths from '$lib/constants/paths';

export async function load({ locals }) {
	// protect route
	if (locals.user) throw redirect(302, paths.account);

	// always return `form` in load and form actions
	const form = await superValidate(null, registerSchema);
	return { form };
}
export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const form = await superValidate(data, registerSchema);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			const new_user = {
				email: form.data.email,
				emailVisibility: true,
				password: form.data.password,
				passwordConfirm: form.data.passwordConfirm,
				name: form.data.name,
				surname: form.data.surname
			};

			await pb.collection('users').create(new_user);
			// (optional) send an email verification request
			await pb.collection('users').requestVerification(form.data.email);
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}
		throw redirect(302, paths.register.thanks);
	}
};
