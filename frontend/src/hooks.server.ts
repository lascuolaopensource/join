import paths from '$lib/constants/paths';
import { pb } from '$lib/pocketbase';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
		} catch (_) {
			pb.authStore.clear();
		}
	}

	event.locals.pb = pb;
	event.locals.user = structuredClone(pb.authStore.model);

	// if NOT logged can't access to /account
	if (event.url.pathname.startsWith(paths.account)) {
		if (!event.locals.user) {
			throw redirect(302, paths.login);
		}
	}

	// if logged can't access to /login
	if (event.url.pathname.startsWith(paths.login)) {
		if (event.locals.user) {
			throw redirect(302, paths.account);
		}
	}

	const response = await resolve(event);
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
};