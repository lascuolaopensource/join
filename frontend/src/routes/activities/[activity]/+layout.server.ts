import { pb } from '$lib/pocketbase';
import {
	Collections,
	type ActivitiesResponse,
	type EnrollmentsDataResponse
} from '$lib/pocketbase/types';
import { error } from '@sveltejs/kit';
import { enrollments_data_expand } from '$lib/server/calls.js';

export const load = async ({ params, fetch }) => {
	try {
		const activity = await pb
			.collection(Collections.Activities)
			.getFirstListItem<ActivitiesResponse<{ [enrollments_data_expand]: EnrollmentsDataResponse }>>(
				`slug="${params.activity}"`,
				{
					expand: enrollments_data_expand,
					fetch
				}
			);
		return { activity, enrollmentData: activity.expand?.[enrollments_data_expand] };
	} catch (e) {
		throw error(404);
	}
};
