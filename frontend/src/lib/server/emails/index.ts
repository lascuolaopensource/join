import { pb } from '$lib/pocketbase';

export type MailerAddress = { address: string };

export type MailerMessage = {
	to: MailerAddress[];
	subject: string;
	html: string;
};

export async function sendMail(message: MailerMessage, fetchFunction: typeof fetch) {
	await pb.send('/send-mail', {
		method: 'POST',
		body: message,
		fetch: fetchFunction
	});
}
