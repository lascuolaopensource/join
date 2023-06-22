import { fail, redirect } from '@sveltejs/kit'
import { superValidate, setError } from 'sveltekit-superforms/server'
import { sendEmail } from '$lib/server/emailverification'
import { auth } from '$lib/server/auth'
import { registerSchema } from '$lib/zod/schema'

// if the user exists, redirect authenticated users to the profile page
export async function load({ locals }) {
	const { session } = await locals.auth.validateUser()
	if (session) throw redirect(302, '/')

	// always return `form` in load and form actions
	const form = await superValidate(null, registerSchema)
	return { form }
}

export const actions = {
	async default({ request, locals }) {
		const data = await request.formData()
		const form = await superValidate(data, registerSchema)

		if (!form.valid) {
			return fail(400, { form })
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: form.data.email,
					password: form.data.password,
				},
				attributes: {
					email: form.data.email,
					name: form.data.name,
					surname: form.data.surname,
				},
			})
			sendEmail(form.data.email)
			const session = await auth.createSession(user.userId)
			locals.auth.setSession(session)
		} catch (error) {
			return setError(form, 'email', 'email already in use')
		}
	},
}
