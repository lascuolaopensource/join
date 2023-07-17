import type { Actions } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';
import { superValidate, setError } from 'sveltekit-superforms/server';
import { pb } from '$lib/pocketbase';
import paths from '$lib/constants/paths';
import { enrollSchemaLogged } from './schema';
import {
	Collections,
	type ActivitiesResponse,
	type EnrollmentsRecord
} from '$lib/pocketbase/types';

let activity: ActivitiesResponse;

export async function load({ locals, parent }) {
	activity = (await parent()).activity;

	// TODO: Check if date is valid
	// TODO: Check if user is enrolled

	const formData = new FormData();
	if (locals.user && locals.user.phone) formData.append('phone', locals.user.phone);

	const form = await superValidate(formData, enrollSchemaLogged);

	return { form };
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		if (!locals.user) throw error(401, 'Unauthorized');

		const data = await request.formData();
		const form = await superValidate(data, enrollSchemaLogged);

		// TODO: Check if date is valid
		// TODO: Check if user is enrolled

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			/* Enrollment creation */
			const data: EnrollmentsRecord = {
				owner: locals.user.id,
				activity: activity.id
			};
			await pb.collection(Collections.Enrollments).create<EnrollmentsRecord>(data);
		} catch (e) {
			return fail(400, { form });
		}

		/* Redirection */
		throw redirect(302, `/activities/${activity.slug}/enroll/confirm`);
		// if (activity.price > 0) {
		// 	throw redirect(302, paths.payment.index(activity.id));
		// } else {
		// 	throw redirect(302, `/activities/${activity.slug}/enroll/confirm`);
		// }
	}
};
