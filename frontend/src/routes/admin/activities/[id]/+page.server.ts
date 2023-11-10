import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import { Collections, type ActivitiesRecord } from '$lib/pocketbase/types';
import { activitiesSchema, enrollmentDataSchema } from '../_lib/schemas';
import { removeEmptyFilesFromFormData } from '$lib/server/utility';
import { getActivityWithEnrollmentData } from '$lib/server/calls';

//

//

export const load = async ({ params, fetch }) => {
	const { activity, enrollmentData } = await getActivityWithEnrollmentData(params.id, fetch);
	const activityForm = await superValidate(activity, activitiesSchema);
	const enrollmentsDataForm = await superValidate(enrollmentData, enrollmentDataSchema);

	return { activityForm, enrollmentsDataForm, activity, enrollmentData };
};

export const actions: Actions = {
	activity: async ({ request, params, fetch }) => {
		const activityId = params.id;
		const data = await request.formData();
		const form = await superValidate(data, activitiesSchema);
		if (!form.valid) return fail(400, { form });

		try {
			await pb
				.collection(Collections.Activities)
				.update(activityId, removeEmptyFilesFromFormData(data), { fetch });
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}

		return { form };
	},
	enrollment_data: async ({ request, params, fetch }) => {
		const activityId = params.id;
		const data = await request.formData();
		const form = await superValidate(data, enrollmentDataSchema);
		if (!form.valid) return fail(400, { form });

		try {
			const activityData = await getActivityWithEnrollmentData(activityId, fetch);
			const enrollmentData = activityData.enrollmentData;
			if (!enrollmentData) {
				const record = await pb.collection(Collections.EnrollmentsData).create(data, { fetch });
				await pb
					.collection(Collections.Activities)
					.update(params.id, { enrollment_data: record.id } satisfies Partial<ActivitiesRecord>);
			} else {
				await pb.collection(Collections.EnrollmentsData).update(enrollmentData.id, data, { fetch });
			}
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}
	}
};
