/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Activities = "activities",
	Addresses = "addresses",
	Enrollments = "enrollments",
	EnrollmentsData = "enrollments_data",
	EnrollmentsRequirements = "enrollments_requirements",
	Payments = "payments",
	PaymentsBillingData = "payments_billing_data",
	PaymentsBillingDataType = "payments_billing_data_type",
	Users = "users",
	UsersInfo = "users_info",
	UsersRoles = "users_roles",
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
	gallery?: string
	slug: string
	enrollment_data?: RecordIdString
}

export type AddressesRecord = {
	country: string
	administrative_area: string
	city: string
	post_code: string
	street: string
	street_number: string
}

export enum EnrollmentsStateOptions {
	"pending" = "pending",
	"rejected" = "rejected",
	"accepted" = "accepted",
	"payment" = "payment",
}
export type EnrollmentsRecord<Trequirements_data = unknown> = {
	owner: RecordIdString
	activity: RecordIdString
	state: EnrollmentsStateOptions
	enrollment_data: RecordIdString
	requirements_data?: null | Trequirements_data
	payment?: RecordIdString
}

export type EnrollmentsDataRecord = {
	num_partecipants_min?: number
	num_partecipants_max?: number
	deadline?: IsoDateString
	confirmed?: boolean
	price?: number
	requirements?: RecordIdString[]
}

export enum EnrollmentsRequirementsTypeOptions {
	"url" = "url",
	"text" = "text",
	"boolean" = "boolean",
}
export type EnrollmentsRequirementsRecord = {
	name: string
	type?: EnrollmentsRequirementsTypeOptions
}

export type PaymentsRecord = {
	confirmation_code: string
	owner: RecordIdString
	verified?: boolean
	expiration: IsoDateString
}

export type PaymentsBillingDataRecord<Tdata = unknown> = {
	owner: RecordIdString
	address: RecordIdString
	type: RecordIdString
	data: null | Tdata
}

export type PaymentsBillingDataTypeRecord<Tschema = unknown> = {
	name: string
	schema: null | Tschema
}

export type UsersRecord = {
	phone?: string
	roles?: RecordIdString[]
	info: RecordIdString
}

export type UsersInfoRecord = {
	name: string
	surname: string
	bio?: HTMLString
	avatar?: string
}

export type UsersRolesRecord = {
	name: string
}

// Response types include system fields and match responses from the PocketBase API
export type ActivitiesResponse<Texpand = unknown> = Required<ActivitiesRecord> & BaseSystemFields<Texpand>
export type AddressesResponse<Texpand = unknown> = Required<AddressesRecord> & BaseSystemFields<Texpand>
export type EnrollmentsResponse<Trequirements_data = unknown, Texpand = unknown> = Required<EnrollmentsRecord<Trequirements_data>> & BaseSystemFields<Texpand>
export type EnrollmentsDataResponse<Texpand = unknown> = Required<EnrollmentsDataRecord> & BaseSystemFields<Texpand>
export type EnrollmentsRequirementsResponse<Texpand = unknown> = Required<EnrollmentsRequirementsRecord> & BaseSystemFields<Texpand>
export type PaymentsResponse<Texpand = unknown> = Required<PaymentsRecord> & BaseSystemFields<Texpand>
export type PaymentsBillingDataResponse<Tdata = unknown, Texpand = unknown> = Required<PaymentsBillingDataRecord<Tdata>> & BaseSystemFields<Texpand>
export type PaymentsBillingDataTypeResponse<Tschema = unknown, Texpand = unknown> = Required<PaymentsBillingDataTypeRecord<Tschema>> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type UsersInfoResponse<Texpand = unknown> = Required<UsersInfoRecord> & BaseSystemFields<Texpand>
export type UsersRolesResponse<Texpand = unknown> = Required<UsersRolesRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	activities: ActivitiesRecord
	addresses: AddressesRecord
	enrollments: EnrollmentsRecord
	enrollments_data: EnrollmentsDataRecord
	enrollments_requirements: EnrollmentsRequirementsRecord
	payments: PaymentsRecord
	payments_billing_data: PaymentsBillingDataRecord
	payments_billing_data_type: PaymentsBillingDataTypeRecord
	users: UsersRecord
	users_info: UsersInfoRecord
	users_roles: UsersRolesRecord
}

export type CollectionResponses = {
	activities: ActivitiesResponse
	addresses: AddressesResponse
	enrollments: EnrollmentsResponse
	enrollments_data: EnrollmentsDataResponse
	enrollments_requirements: EnrollmentsRequirementsResponse
	payments: PaymentsResponse
	payments_billing_data: PaymentsBillingDataResponse
	payments_billing_data_type: PaymentsBillingDataTypeResponse
	users: UsersResponse
	users_info: UsersInfoResponse
	users_roles: UsersRolesResponse
}