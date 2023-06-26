<script lang="ts">
	import type { ActivitiesResponse } from '$lib/pocketbase/types';
	export let data;
	const { activities }: ActivitiesResponse = data;
</script>

<h2>Activities</h2>
{#if activities}
	<div class="grid grid-cols-4 gap-4">
		{#each activities as activity}
			<div class="card">
				<header class="card-header">{activity.name}</header>
				<section class="p-4">
					{@html activity.description}
					<p>Price: {activity.price}</p>
				</section>
				<footer class="card-footer">
					<a href="/activities/{activity.slug}" class="btn variant-filled">Show</a>
				</footer>
			</div>
		{/each}
	</div>
{/if}
