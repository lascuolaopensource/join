import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate, setError } from 'sveltekit-superforms/server';
import { loginSchema } from '$lib/zod/schema';
import { pb } from '$lib/pocketbase';
import paths from '$lib/constants/paths';

export async function load() {
	// always return `form` in load and form actions
	const form = await superValidate(null, loginSchema);
	return { form };
}

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const form = await superValidate(data, loginSchema);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			await pb.collection('users').authWithPassword(form.data.email, form.data.password);
		} catch (e) {
			return setError(form, 'email', 'Wrong Credentials');
		}
		throw redirect(302, paths.account);
	}
};
