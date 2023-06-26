import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase/types';
import { serializeNonPOJOs } from '$lib/server/utility';

export async function load({ params }) {
	const activity = serializeNonPOJOs(
		await pb.collection(Collections.Activities).getFirstListItem(`slug="${params.activity}"`)
	);
	return { activity };
}
