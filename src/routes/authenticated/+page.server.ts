import { redirect } from '@sveltejs/kit'
import db from '$lib/server/database'
import { sendEmail } from '$lib/server/emailverification'

export async function load({ locals }) {
	const { user } = await locals.auth.validateUser()
	if (!user) throw redirect(302, '/login')

	const user_data = await db.authUser.findUnique({
		where: {
			id: user?.userId,
		},
	})

	return {
		user_data,
	}
}

export const actions = {
	verification: async ({ url }) => {
		try {
			const email = String(url.searchParams.get('email'))
			sendEmail(email)
		} catch (error) {
			console.log(error)
		}
	},
}
