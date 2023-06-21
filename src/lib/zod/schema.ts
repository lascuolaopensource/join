import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string(),
	password: z.string(),
})

export const registerSchema = z.object({
	username: z.string(),
	email: z.string(),
	password: z.string(),
})
