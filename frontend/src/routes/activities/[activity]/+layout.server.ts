import { pb } from '$lib/pocketbase';
import { Collections, type ActivitiesResponse } from '$lib/pocketbase/types';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const activity = structuredClone(
			await pb
				.collection(Collections.Activities)
				.getFirstListItem<ActivitiesResponse>(`slug="${params.activity}"`)
		);
		return { activity };
	} catch (e) {
		throw error(404);
	}
};
