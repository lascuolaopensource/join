<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	const { activity } = data;

	console.log($page.route, $page.url);

	const enrollUrl = `${$page.url.pathname}/enroll`;
</script>

<h2>{activity.name}</h2>
<div>
	{@html activity.description}
</div>
<a href={enrollUrl} class="btn variant-filled">Enroll!</a>
