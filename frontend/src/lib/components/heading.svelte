<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import paths from '$lib/constants/paths';
	import { enhance } from '$app/forms';
	export let currentUser: any;
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex gap-1" href="/"> ☠️ JOIN </a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#if currentUser}
			<a href={paths.account}>Account</a>
			<form method="POST" action="/logout" use:enhance>
				<button type="submit">Logout</button>
			</form>
		{:else}
			<a href={paths.login}>Log in</a>
			<a href={paths.register.index}>Register</a>
		{/if}

		<LightSwitch />
	</svelte:fragment>
</AppBar>
