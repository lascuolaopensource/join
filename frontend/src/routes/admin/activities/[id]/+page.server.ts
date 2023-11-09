import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { fail, redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import {
	Collections,
	type ActivitiesResponse,
	type EnrollmentsDataResponse
} from '$lib/pocketbase/types';
import { activitiesSchema } from '../_lib/schemas';

export const load = async ({ params }) => {
	const enrollments_data_expand = 'enrollments_data';
	const activity = await pb
		.collection(Collections.Activities)
		.getOne<ActivitiesResponse<{ [enrollments_data_expand]: EnrollmentsDataResponse }>>(params.id, {
			expand: 'enrollments_data'
		});

	const form = await superValidate(activity, activitiesSchema, {
		id: 'create'
	});
	return { form };
};

export const actions: Actions = {
	updateActivity: async ({ request, params }) => {
		const activityId = params.id;
		const data = await request.formData();
		const form = await superValidate(data, activitiesSchema);
		const gallery:File[] = data.getAll('gallery') as File[];
		if (!form.valid) return fail(400, { form });
		
		try {
			if(gallery[0].size === 0) data.delete('gallery');
			await pb.collection(Collections.Activities).update(activityId,data);
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}

		return { form };
	},
};
