<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import Heading from '$lib/components/heading.svelte';

	export let data;
	$: currentUser = data.user;
</script>

<svelte:head>
	<title>JOIN</title>
	<link rel="icon" href="https://fav.farm/☠️" />
</svelte:head>

<Heading {currentUser} />

<slot />
