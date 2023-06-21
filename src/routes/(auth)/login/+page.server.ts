import { fail, redirect } from '@sveltejs/kit'
import { superValidate, setError } from 'sveltekit-superforms/server'

import { auth } from '$lib/server/auth'
import { loginSchema } from '$lib/zod/schema'

// if the user exists, redirect authenticated users to the profile page
export async function load({ locals }) {
	const { session } = await locals.auth.validateUser()
	if (session) throw redirect(302, '/')

	// always return `form` in load and form actions
	const form = await superValidate(null, loginSchema)
	return { form }
}

export const actions = {
	async default({ request, locals }) {
		const data = await request.formData()
		const form = await superValidate(data, loginSchema)
    
		if (!form.valid) {
			return fail(400, { form })
		}

		try {
			const key = await auth.useKey(
				'username',
				form.data.email,
				form.data.password
			)
			const session = await auth.createSession(key.userId)
			locals.auth.setSession(session)
		} catch (error) {
			console.log(error)
			return setError(form, 'email', 'Invalid credentials')
		}
	},
}
