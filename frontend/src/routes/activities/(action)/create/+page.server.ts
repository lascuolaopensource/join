import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import paths from '$lib/constants/paths';
import { fail, redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase/types';
import { activitySchema } from './schema';
import { convertToSlug } from '$lib/server/utility';

export const load = async ({ locals }) => {
	if (locals.user?.role !== 'activitiesAdmin') throw redirect(302, paths.activities.index);
	const form = await superValidate(activitySchema);
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const form = await superValidate(data, activitySchema);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			const slug = convertToSlug(form.data.name);
			console.log(form.data.gallery);

			//
			data.append('slug', slug);
			data.append('confirmed', 'false');

			await pb.collection(Collections.Activities).create(data);
		} catch (error) {
			return fail(400, { form });
		}

		throw redirect(302, paths.activities.index);
	}
};
