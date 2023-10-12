import { pb } from '$lib/pocketbase';
import {
	Collections,
	type ActivitiesResponse,
	type EnrollmentsResponse
} from '$lib/pocketbase/types';

export const load = async () => {
	const expand = 'enrollments(activity)' as const;

	const activities = await pb
		.collection(Collections.Activities)
		.getFullList<ActivitiesResponse<{ [key: string]: EnrollmentsResponse[] }>>({
			expand: expand
		});

	return { activities: structuredClone(activities), expandKey: expand };
};
