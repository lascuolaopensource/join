import { STRIPE_WEBHOOK_KEY } from '$env/static/private';
import { Collections } from '$lib/pocketbase/types';
import { useAdminContext } from '$lib/server/pocketbase';
import { stripe } from '$lib/server/stripe';

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	const sig = request.headers.get('stripe-signature');
	const body = await request.text();

	if (!sig) return new Response('Unauthorized', { status: 400 });

	const event = stripe.webhooks.constructEvent(body, sig, STRIPE_WEBHOOK_KEY);
	let response = new Response();
	if (event.type === 'checkout.session.completed') {
		try {
			const checkout = event.data.object;
			await useAdminContext(async (pb) => {
				const payment_item = await pb
					.collection(Collections.Payments)
					.getFirstListItem(`confirmation_code="${checkout.id}"`);
				if (!payment_item) throw new Error('Payment item not found');
				await pb.collection(Collections.Payments).update(payment_item.id, {
					verified: true
				});
			});
			response = new Response('Payment processed correctly!', { status: 200 });
		} catch (error) {
			response = new Response('Something went wrong', { status: 400 });
		}
	}
	return response;
};
