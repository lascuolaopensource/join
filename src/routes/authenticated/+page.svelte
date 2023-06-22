<script lang="ts">
	import { enhance } from '$app/forms'
	export let data
</script>

<div class="p-4">
	<h1>Profile</h1>
	<p class="mt-4">Id: {data.user_data?.id}</p>
	<p class="mt-4">First Name: {data.user_data?.name}</p>
	<p class="mt-4">Last Name: {data.user_data?.surname}</p>
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
			>Resend Verification Mail</button
		>
	</form>
</div>
