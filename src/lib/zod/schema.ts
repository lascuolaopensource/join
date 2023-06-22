import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string(),
	password: z.string(),
})

export const registerSchema = z.object({
	name: z.string(),
	surname: z.string(),
	email: z.string(),
	password: z.string(),
})
