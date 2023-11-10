import { pb } from '$lib/pocketbase';
import { Collections, type ActivitiesResponse } from '$lib/pocketbase/types';

export async function load() {
	const activities = structuredClone(
		await pb.collection(Collections.Activities).getFullList<ActivitiesResponse>({
			sort: '-created'
		})
	);
	return { activities };
}
