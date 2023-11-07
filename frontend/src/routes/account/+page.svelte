<script lang="ts">
	import { enhance } from '$app/forms';
	import paths from '$lib/constants/paths';

	export let data;
	const { user } = data;
</script>

<div class="container h-full p-5 flex">
	<div class="space-y-8 text-left flex flex-col">
		<h2 class="h2 capitalize">info</h2>
		<ul>
			<li>Id: {user.id}</li>
			<li>Email: {user.email}</li>
			<li>Name: {user.expand?.info.name} {user.expand?.info.surname}</li>
			<li>Verified: {user.verified}</li>
			<li>Bio: {user.expand?.info.bio}</li>
		</ul>
		{#if !user.verified}
			<form method="post" action="?/sendVerification" use:enhance>
				<button class="btn variant-filled" type="submit">Send Email Verification</button>
			</form>
		{/if}
	</div>
</div>
