import { z } from 'zod';

export const activitySchema = z.object({
	name: z.string(),
	description: z.string(),
	price: z.string(),
	confirmed: z.boolean(),
	gallery: z.any(),
	enrollmentMin: z.any(),
	enrollmentMax: z.any(),
	enrollmentDeadline: z.any(),
	slug: z.any()
});
