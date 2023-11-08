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
	default: async ({ request }) => {
		// const data = await request.formData();
		// const form = await superValidate(data, activitiesSchema);
		// if (!form.valid) return fail(400, { form });
		// let activityId: string;
		// try {
		// 	const activity = await pb.collection(Collections.Activities).create(data);
		// 	activityId = activity.id;
		// } catch (error) {
		// 	return fail(400, { form });
		// }
		// throw redirect(302, `/admin/activities/${activityId}`);
	}
};
