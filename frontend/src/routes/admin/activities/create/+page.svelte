<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import ActivitiesFormFields from '../_lib/activitiesFormFields.svelte';
	import Form from '$lib/forms/form.svelte';
	import SubmitButton from '$lib/forms/submitButton.svelte';

	export let data;
	const superform = superForm(data.form);
</script>

<div class="max-w-xl mx-auto p-6">
	<h3 class="h3 mb-8">Create new activity</h3>
	<Form {superform}>
		<ActivitiesFormFields {superform} />
		<SubmitButton>Create activity</SubmitButton>
	</Form>
</div>
