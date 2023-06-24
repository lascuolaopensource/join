import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string(),
	password: z.string()
});

export const reqPasswordReset = z.object({
	email: z.string()
});
