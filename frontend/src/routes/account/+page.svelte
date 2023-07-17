<script lang="ts">
	import { enhance } from '$app/forms';
	import paths from '$lib/constants/paths';

	export let data;
	const { user } = data;
</script>

<div class="container h-full p-5 flex">
	<div class="space-y-8 text-left flex flex-col">
		<h2 class="capitalize">info</h2>
		<ul>
			<li>Id: {user.id}</li>
			<li>Name: {user.name} {user.surname}</li>
			<li>Email: {user.email}</li>
			<li>Verified: {user.verified}</li>
			<li>Role: {user.role}</li>
		</ul>
		<form method="post" action="/sendVerification" use:enhance>
			<button class="btn variant-filled" type="submit">Send Email Verification</button>
		</form>
		<a href={paths.passwordReset.forgot} class="btn variant-filled">Reset Password</a>
	</div>
</div>
