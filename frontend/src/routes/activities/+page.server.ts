import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase/types';
import { serializeNonPOJOs } from '$lib/server/utility';

export async function load() {
	const activities = serializeNonPOJOs(
		await pb.collection(Collections.Activities).getFullList({
			sort: '-created'
		})
	);
	return { activities };
}
