// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: import('pocketbase').default;
			user:
				| import('./lib/pocketbase/types').UsersResponse<{
						info: import('./lib/pocketbase/types').UsersInfoResponse;
				  }>
				| null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
