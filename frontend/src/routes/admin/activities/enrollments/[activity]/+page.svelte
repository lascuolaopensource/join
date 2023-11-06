<script lang="ts">
	import Backlink from '$lib/components/backlink.svelte';
	import { EnrollmentsStateOptions as State } from '$lib/pocketbase/types';

	export let data;

	const { activity, expandKeys } = data;
	const { enrollments: enrollmentsKey, owner: ownerKey } = expandKeys;

	let enrollments = activity.expand?.[enrollmentsKey];
	type Enrollments = NonNullable<typeof enrollments>;
	type Enrollment = Enrollments[number];

	function groupEnrollmentsByState(enrollments: Enrollments, state: State) {
		return enrollments.filter((enrollment) => enrollment.state === state);
	}

	function groupEnrollments(enrollments: Enrollments) {
		return {
			Approved: groupEnrollmentsByState(enrollments, State.accepted),
			Pending: groupEnrollmentsByState(enrollments, State.pending),
			Rejected: groupEnrollmentsByState(enrollments, State.rejected),
			'Awaiting payment': groupEnrollmentsByState(enrollments, State.payment)
		};
	}

	function changeEnrollmentState(enrollment: Enrollment, state: State) {
		if (!enrollments) return;
		enrollments = enrollments.map((e) => {
			if (e.id === enrollment.id) {
				e.state = state;
			}
			return e;
		});
	}
</script>

<div class="p-8">
	<Backlink href={`/admin/activities/enrollments`}>Back to all activities</Backlink>

	<div class="my-4">
		<h4>{activity.name}</h4>
		<h2 class="h2">Manage enrollments</h2>
	</div>

	{#if enrollments}
		{@const groups = groupEnrollments(enrollments)}
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Contacts</th>
						<th>State</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each Object.entries(groups) as [key, enrollments]}
						<tr>
							<td class="font-bold" colspan="100">
								{key}
							</td>
						</tr>
						{#if enrollments.length > 0}
							{#each enrollments as enrollment}
								{@const owner = enrollment.expand?.[ownerKey]}
								<tr>
									{#if owner}
										<td class="!align-middle">{owner.name} {owner.surname}</td>
										<td class="!align-middle">
											{owner.phone}
											{owner.email}
										</td>
									{/if}
									<td class="!align-middle">{enrollment.state}</td>
									<td>
										<div class="flex gap-1">
											{#if enrollment.state != State.accepted}
												<button
													class="btn btn-sm variant-ghost-success"
													on:click={() => {
														changeEnrollmentState(enrollment, State.accepted);
													}}>Approve</button
												>
											{/if}
											{#if enrollment.state != State.pending}
												<button
													class="btn btn-sm variant-ghost-warning"
													on:click={() => {
														changeEnrollmentState(enrollment, State.pending);
													}}>Pending</button
												>
											{/if}
											{#if enrollment.state != State.rejected}
												<button
													class="btn btn-sm variant-ghost-error"
													on:click={() => {
														changeEnrollmentState(enrollment, State.rejected);
													}}>Reject</button
												>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
						{:else}
							<tr>
								<td class="!align-middle" colspan="100">Empty section</td>
							</tr>
						{/if}
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
