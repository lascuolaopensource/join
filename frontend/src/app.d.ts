// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

type User = import('./lib/pocketbase/types').UsersResponse & {
	info: import('./lib/pocketbase/types').UsersInfoResponse;
};

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: import('pocketbase').default;
			user: User | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
