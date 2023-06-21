<script lang="ts">
	import { enhance } from '$app/forms'
	import { onMount } from 'svelte'
	export let data
</script>

<div class="p-4">
	<h1>Profile</h1>
	<p class="mt-4">Id: {data.user_data?.id}</p>
	<p class="mt-4">Username: {data.user_data?.username}</p>
	<p class="mt-4">Email: {data.user_data?.email}</p>
	<p class="mt-4">Verified: {data.user_data?.verified}</p>
	<p class="mt-4">Blocked: {data.user_data?.blocked}</p>
</div>

<div class="p-4" data-sveltekit-preload-data="off">
	<form
		use:enhance
		action="?/verification&email={data.user_data?.email}"
		method="post"
	>
		<button class="btn variant-filled m-5" type="submit"
			>Send Verification Mail</button
		>
	</form>
	<a class="btn variant-filled m-5" href={data.link}>Fake Verification Link</a>
</div>
