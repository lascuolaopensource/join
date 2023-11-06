<script lang="ts">
	export let data;
	const { activities } = data;
</script>

<h2 class="h2">Activities</h2>
{#if activities && activities.length}
	<div class="grid grid-cols-4 gap-4">
		{#each activities as activity}
			<div class="card">
				<header class="card-header text-xl capitalize">{activity.name}</header>
				<section class="p-4">
					{@html activity.description}
				</section>
				<footer class="card-footer">
					<p>Price: {activity.price}</p>
					<a href="/activities/{activity.slug}" class="btn variant-filled">Show</a>
				</footer>
			</div>
		{/each}
	</div>
{/if}
