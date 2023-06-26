/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Courses = "courses",
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

export type CoursesRecord = {
	name: string
	description: HTMLString
	price: number
	preconditionNeeded?: boolean
	cvNeeded?: boolean
	portfolioNeeded?: boolean
	motivationalLetterNeeded?: boolean
	confirmed?: boolean
	users?: RecordIdString[]
	gallery?: string[]
}

export type UsersRecord = {
	name: string
	surname: string
}

// Response types include system fields and match responses from the PocketBase API
export type CoursesResponse<Texpand = unknown> = Required<CoursesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	courses: CoursesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	courses: CoursesResponse
	users: UsersResponse
}