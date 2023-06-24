import { z } from 'zod';

export const requestPasswordResetSchema = z.object({
	email: z.string()
});
