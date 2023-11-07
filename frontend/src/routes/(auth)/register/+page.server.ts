import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { registerSchema } from './schema';
import { pb } from '$lib/pocketbase';
import paths from '$lib/constants/paths';
import { Collections } from '$lib/pocketbase/types';
import type { RecordModel } from 'pocketbase';

//

export const load: PageServerLoad = async () => {
	return { form: await superValidate(registerSchema) };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const form = await superValidate(data, registerSchema);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			const user_info = {
				name: form.data.name,
				surname: form.data.surname
			};
			const new_user_info: RecordModel = await pb
				.collection(Collections.UsersInfo)
				.create(user_info);
			await pb.collection(Collections.Users).create({
				email: form.data.email,
				emailVisibility: true,
				password: form.data.password,
				passwordConfirm: form.data.passwordConfirm,
				info: new_user_info.id
			});
			await pb.collection(Collections.Users).requestVerification(form.data.email);
		} catch (error) {
			return fail(400, { form });
		}

		throw redirect(302, paths.register.thanks);
	}
};
