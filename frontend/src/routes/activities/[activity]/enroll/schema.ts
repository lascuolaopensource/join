import { z } from 'zod';

export const enrollSchemaNru = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	phone: z.string(),
	surname: z.string().min(3)
});

export const enrollSchemaLogged = z.object({
	phone: z.string()
});

// export const enrollSchema = z.union([enrollSchemaNru, enrollSchemaLogged]);
