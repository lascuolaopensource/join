import { z } from 'zod';

export const passwordResetSchema = z
	.object({
		password: z.string(),
		passwordConfirm: z.string()
	})
	.refine((data) => data.password === data.passwordConfirm);
