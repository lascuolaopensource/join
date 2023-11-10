<script lang="ts">
	import { X, Plus } from 'lucide-svelte';
	import ActivitiesFormFields from '../_lib/activitiesFormFields.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import Form from '$lib/forms/form.svelte';
	import SubmitButton from '$lib/forms/submitButton.svelte';
	import { createToggleStore } from '$lib/components/utils';
	import Input from '$lib/forms/input.svelte';

	export let data;
	console.log(data.enrollmentData);

	const activityUpdateForm = superForm(data.activityForm);
	const enrollmentDataCreateForm = superForm(data.enrollmentsDataForm);

	const activityHasEnrollmentData = Boolean(data.enrollmentData);
	const enrollmentDataFormVisible = createToggleStore(activityHasEnrollmentData);
</script>

<h3 class="h3">Edit activity</h3>

<div class="card m-auto mt-10 max-w-md p-5 space-y-6">
	<h3 class="h3">Info</h3>
	<hr />
	<Form superform={activityUpdateForm} action="?/activity">
		<ActivitiesFormFields superform={activityUpdateForm} />
		<SubmitButton>Update activity</SubmitButton>
	</Form>
</div>

<div class="card m-auto mt-10 max-w-md p-5 space-y-6">
	<div class="flex justify-between items-center">
		<h3 class="h3">Enrollment data</h3>
		{#if !activityHasEnrollmentData && $enrollmentDataFormVisible}
			<button on:click={enrollmentDataFormVisible.off} class="btn btn-sm variant-ghost-surface">
				<X />
				<span>Close</span>
			</button>
		{/if}
	</div>

	<hr />

	{#if !activityHasEnrollmentData && !$enrollmentDataFormVisible}
		<p>Can people enroll for this activity?</p>
		<div class="flex justify-end">
			<button class="btn variant-ghost-surface" on:click={enrollmentDataFormVisible.on}>
				<Plus />
				<span>Add enrollment information</span>
			</button>
		</div>
	{:else}
		<Form superform={enrollmentDataCreateForm} action="?/enrollment_data">
			<Input field="partecipants_min" type="number" />
			<Input field="partecipants_max" type="number" />
			<Input field="deadline" type="date" />
			<Input field="price" type="number" />
			<SubmitButton>Update activity</SubmitButton>
		</Form>
	{/if}
</div>
