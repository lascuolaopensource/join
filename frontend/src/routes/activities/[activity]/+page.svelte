<script lang="ts">
	import type { ActivitiesResponse } from '$lib/pocketbase/types';

	export let data;
	const { activity }: ActivitiesResponse = data;
</script>

<h2>{activity.name}</h2>
<div>
	{@html activity.description}
</div>
