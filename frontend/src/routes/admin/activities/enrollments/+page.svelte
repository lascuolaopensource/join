<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';

	export let data;
	const { activities, expandKey } = data;

	const upcomingActivities = activities.filter((a) => new Date(a.enrollmentDeadline) > new Date());
	const pastActivities = activities.filter((a) => new Date(a.enrollmentDeadline) < new Date());
</script>

<div class="space-y-8 p-8">
	{#if upcomingActivities.length > 0}
		<div class="space-y-4">
			<h3>Upcoming activities</h3>
			{#each upcomingActivities as activity}
				{@const enrollments = activity.expand?.[expandKey]}
				<div class="card p-4">
					<h4 class="font-bold mb-2">{activity.name}</h4>
					<p>Enrollment deadline: {activity.enrollmentDeadline}</p>
					{#if enrollments && enrollments.length}
						<p>Enrollments: {enrollments.length} / {activity.enrollmentMax}</p>
					{/if}
					<div class="flex justify-end mt-2">
						<a href={`/admin/activities/enrollments/${activity.slug}`} class="btn variant-filled">
							Review enrollments <ArrowRight class="ml-1" size="20" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if pastActivities.length > 0}
		<div class="space-y-4">
			<h3>Past activities</h3>
			{#each pastActivities as activity}
				<div class="card p-4">
					<h4>{activity.name}</h4>
					<div class="flex justify-end">
						<a href={`/admin/activities/enrollments/${activity.slug}`} class="btn variant-outline">
							Review enrollments <ArrowRight class="ml-1" size="20" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
