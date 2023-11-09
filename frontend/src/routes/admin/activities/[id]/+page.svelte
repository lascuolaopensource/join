<script lang="ts">
	import { Plus } from 'lucide-svelte';
	import ActivitiesFormFields from '../_lib/activitiesFormFields.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import Form from '$lib/forms/form.svelte';
	import SubmitButton from '$lib/forms/submitButton.svelte';

	export let data;
	const superform = superForm(data.form);
</script>

<h3 class="h3">Edit activity</h3>
<div class="card m-auto mt-10 max-w-md p-5 space-y-6">
	<h3 class="h3">Info</h3>
	<hr />
	<Form {superform} action="?/updateActivity">
		<ActivitiesFormFields {superform} />
		<SubmitButton>Update activity</SubmitButton>
	</Form>
</div>

<div class="card m-auto mt-10 max-w-md p-5 space-y-6">
	<h3 class="h3">Enrollments</h3>
	<hr />
	{#if !Boolean(data.form.data.enrollment_data)}
		<p>Can people enroll for this activity?</p>
		<div class="flex justify-end">
			<button class="btn variant-ghost-surface">
				<Plus />
				<span>Add enrollment information</span>
			</button>
		</div>
	{/if}
</div>
