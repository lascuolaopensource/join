import { verifyUserEmail } from '$lib/server/emailverification.js'
export async function load({ params }) {
	const token = params.token
	const jwt_status = await verifyUserEmail(token)
	return { jwt_status }
}
