import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { registerSchema } from './schema';
import { pb } from '$lib/pocketbase';
import paths from '$lib/constants/paths';
import { Collections } from '$lib/pocketbase/types';

//

export async function load() {
	const form = await superValidate(registerSchema);
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
			const newUser = {
				email: form.data.email,
				emailVisibility: true,
				password: form.data.password,
				passwordConfirm: form.data.passwordConfirm,
				name: form.data.name,
				surname: form.data.surname,
				role: 'regularUser'
			};
			await pb.collection(Collections.Users).create(newUser);
			await pb.collection(Collections.Users).requestVerification(form.data.email);
		} catch (error) {
			return fail(400, { form });
		}

		throw redirect(302, paths.register.thanks);
	}
};
