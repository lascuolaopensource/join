import { pb } from '$lib/pocketbase';
import {
	Collections,
	type ActivitiesResponse,
	type EnrollmentsResponse,
	type UsersResponse
} from '$lib/pocketbase/types';

export const load = async ({ params }) => {
	const expandEnrollments = 'enrollments(activity)' as const;
	const expandOwner = `owner` as const;
	const expandEnrollmentsOwner = `${expandEnrollments}.${expandOwner}` as const;

	type Activity = ActivitiesResponse<{
		[expandEnrollments]: EnrollmentsResponse<{ [expandOwner]: UsersResponse }>[];
	}>;

	const activity = await pb
		.collection(Collections.Activities)
		.getFirstListItem<Activity>(`slug="${params.activity}"`, {
			expand: [expandEnrollments, expandEnrollmentsOwner].join(',')
		});

	return {
		activity: structuredClone(activity),
		expandKeys: { enrollments: expandEnrollments, owner: expandOwner }
	};
};
