import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { env } from '$env/dynamic/private';
import PocketBase from 'pocketbase';

export type AdminContextFunction<T> = (pb: PocketBase) => Promise<T>;

export async function useAdminContext<T>(fn: AdminContextFunction<T>) {
	const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
	await pb.admins.authWithPassword(env.ADMIN_EMAIL, env.ADMIN_PASSWORD);

	let fnResult: Awaited<T> | undefined | Error = undefined;
	try {
		fnResult = await fn(pb);
	} catch (e) {
		console.log(e);
		fnResult = new Error(JSON.stringify(e));
	}

	pb.authStore.clear();

	return fnResult;
}
