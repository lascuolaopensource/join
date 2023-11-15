import { env } from '$env/dynamic/private';
import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase/types';
import { useAdminContext } from '$lib/server/pocketbase';
import { stripe } from '$lib/server/stripe';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	pay: async ({ locals }) => {
		if (!locals.user) throw redirect(302, '/login');
		const user = locals.user;
		const lineItems = {
			price_data: {
				currency: 'eur',
				product_data: {
					name: 'Testing Itemsss',
					description: 'Testing description wor'
				},
				unit_amount: 1 * 100
			},
			quantity: 1
		};

		// Create session
		const session = await stripe.checkout.sessions.create({
			line_items: [lineItems],
			mode: 'payment',
			success_url: `${env.ORIGIN}/pay/success`,
			cancel_url: `${env.ORIGIN}/pay/error`,
			customer_email: user.email,
			metadata: {
				id: 'alloraveramenteID'
			}
		});
		await useAdminContext(async (pb) => {
			await pb.collection(Collections.Payments).create({
				confirmation_code: session.id,
				owner: user.id,
				verified: false,
				expiration: new Date(session.expires_at * 1000)
			});
		});
		if (!session.url) return;
		throw redirect(302, session.url);
	}
};
