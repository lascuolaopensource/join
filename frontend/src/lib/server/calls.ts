import { pb } from '$lib/pocketbase';
import {
	Collections,
	type ActivitiesResponse,
	type EnrollmentsDataResponse
} from '$lib/pocketbase/types';

//

export const enrollments_data_expand = 'enrollment_data';
export async function getActivityWithEnrollmentData(activityId: string, fetchFn: typeof fetch) {
	const data = await pb
		.collection(Collections.Activities)
		.getOne<ActivitiesResponse<{ [enrollments_data_expand]: EnrollmentsDataResponse }>>(
			activityId,
			{
				expand: enrollments_data_expand,
				fetch: fetchFn
			}
		);
	return { activity: data, enrollmentData: data.expand?.[enrollments_data_expand] };
}
