import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase/types';
import { serializeNonPOJOs } from '$lib/server/utility';

export async function load() {
	// const courses = await pb.collection(Collections.Courses).getFullList({
	// 	sort: '-created'
	// });
	const activities = serializeNonPOJOs(
		await pb.collection(Collections.Activities).getFullList({
			sort: '-created'
		})
	);
	return { activities };
}
