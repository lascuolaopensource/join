import { z } from 'zod';

export const registerSchema = z
	.object({
		name: z.string(),
		surname: z.string(),
		email: z.string().email(),
		password: z.string().min(8),
		passwordConfirm: z.string().min(8)
	})
	.refine((data) => data.password === data.passwordConfirm);
