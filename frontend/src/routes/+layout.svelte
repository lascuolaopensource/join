<script lang="ts">
	import '../app.postcss';

	import { Modal, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import Heading from '$lib/components/heading.svelte';

	export let data;
	$: currentUser = data.user;
</script>

<svelte:head>
	<title>JOIN</title>
	<link rel="icon" href="https://fav.farm/☠️" />
</svelte:head>

<Heading {currentUser} />
<div class="fixed top-0 left-0">
	<Modal />
</div>
<slot />
