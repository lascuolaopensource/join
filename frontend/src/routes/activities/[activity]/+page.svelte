<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	const { activity, enrollmentData } = data;
	const enrollUrl = `${$page.url.pathname}/enroll`;
</script>

<h2 class="h2">{activity.name}</h2>
<div>
	{@html activity.description}
</div>
{#if enrollmentData}
	<a href={enrollUrl} class="btn variant-filled">Enroll!</a>
{/if}
