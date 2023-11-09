<script>
	import { Plus } from 'lucide-svelte';
	export let data;
	const { activities } = data;
</script>

<div class="flex justify-between items-center">
	<h3 class="h3">Activities</h3>
	<a href="/admin/activities/create" class="btn variant-filled-primary">
		<Plus size="20" />
		<span> Create a new activity </span>
	</a>
</div>
{#if activities && activities.length}
	<div class="grid grid-cols-4 gap-4">
		{#each activities as activity}
			<div class="card">
				<header class="card-header text-xl capitalize">{activity.name}</header>
				<section class="p-4">
					{@html activity.description}
				</section>
				<footer class="card-footer">
					<a href="/admin/activities/{activity.id}" class="btn variant-filled">Show</a>
				</footer>
			</div>
		{/each}
	</div>
{/if}
