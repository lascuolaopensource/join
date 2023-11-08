import { z, type ZodTypeAny } from 'zod';
import type { ActivitiesRecord, EnrollmentsDataRecord } from '$lib/pocketbase/types';

export const activitiesSchema = z.object({
	name: z.string(),
	description: z.string(),
	gallery: z.any().optional(),
	slug: z.string(),
	enrollment_data: z.string().optional()
} satisfies Record<keyof ActivitiesRecord, ZodTypeAny>);

export const enrollmentDataSchema = z.object({
	partecipants_min: z.number().optional(),
	partecipants_max: z.number().optional(),
	deadline: z.date(),
	price: z.number().optional(),
	requirements: z.array(z.string().optional()).optional()
} satisfies Record<Exclude<keyof EnrollmentsDataRecord, 'confirmed'>, ZodTypeAny>);
