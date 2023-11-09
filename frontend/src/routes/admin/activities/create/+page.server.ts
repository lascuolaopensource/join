import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { fail, redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase/types';
import { activitiesSchema } from '../_lib/schemas';

export const load = async () => {
	const form = await superValidate(activitiesSchema);
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const form = await superValidate(data, activitiesSchema);
		const gallery:File[] = data.getAll('gallery') as File[];
		
		if (!form.valid) return fail(400, { form });

		let activityId: string;
		try {
			if(gallery[0].size === 0) data.delete('gallery');
			const activity = await pb.collection(Collections.Activities).create(data);
			activityId = activity.id;
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}

		throw redirect(302, `/admin/activities/${activityId}`);
	}
};
