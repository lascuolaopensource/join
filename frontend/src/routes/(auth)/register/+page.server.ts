import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { registerSchema } from './schema';
import paths from '$lib/constants/paths';
import { Collections, type UsersInfoRecord } from '$lib/pocketbase/types';
import { useAdminContext } from '$lib/server/pocketbase';

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
			await useAdminContext(async (pb) => {
				const userInfoData: UsersInfoRecord = {
					name: form.data.name,
					surname: form.data.surname
				};
				const userInfo = await pb.collection(Collections.UsersInfo).create(userInfoData);

				await pb.collection(Collections.Users).create({
					email: form.data.email,
					emailVisibility: false,
					password: form.data.password,
					passwordConfirm: form.data.passwordConfirm,
					info: userInfo.id
				});

				await pb.collection(Collections.Users).requestVerification(form.data.email);
			});
		} catch (error) {
			return fail(400, { form });
		}

		throw redirect(302, paths.register.thanks);
	}
};
