// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

type Record = import('pocketbase').Record;
type Admin = import('pocketbase').Admin;
type User = import('./lib/pocketbase/types').UsersRecord;

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: import('pocketbase').default;
			user: Admin | (Record & User) | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
