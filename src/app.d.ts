// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/auth').Auth
		type UserAttributes = {
			name: string
			surname: string
			email: string
		}
	}
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest
			prisma: import('$lib/server/database').db
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
