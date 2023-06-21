import { redirect } from '@sveltejs/kit'
import db from '$lib/server/database'
import { sendEmail } from '$lib/server/emailverification'
import jwt from 'jsonwebtoken'
import { env } from '$env/dynamic/private'

export async function load({ locals }) {
	const { user } = await locals.auth.validateUser()
	if (!user) throw redirect(302, '/login')
	const user_data = await db.authUser.findUnique({
		where: {
			id: user?.userId,
		},
	})
	const token = jwt.sign({ email: user_data?.email }, env.JWT_SECRET)
	const link = 'http://localhost:5173/verification/' + token
	return {
		user_data,
		link,
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
