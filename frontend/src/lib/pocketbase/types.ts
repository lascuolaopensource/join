/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Activities = "activities",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ActivitiesRecord = {
	name: string
	description: HTMLString
	price: number
	confirmed?: boolean
	users?: RecordIdString[]
	gallery?: string[]
	enrollmentMin?: number
	enrollmentMax?: number
	enrollmentDeadline: IsoDateString
	slug: string
}

export enum UsersRoleOptions {
	"regularUser" = "regularUser",
	"activitiesAdmin" = "activitiesAdmin",
}
export type UsersRecord = {
	name: string
	surname: string
	role: UsersRoleOptions
	phone?: number
}

// Response types include system fields and match responses from the PocketBase API
export type ActivitiesResponse<Texpand = unknown> = Required<ActivitiesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	activities: ActivitiesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	activities: ActivitiesResponse
	users: UsersResponse
}