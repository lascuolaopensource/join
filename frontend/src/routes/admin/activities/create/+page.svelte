<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import Form from '$lib/forms/form.svelte';
	import Input from '$lib/forms/input.svelte';
	import SubmitButton from '$lib/forms/submitButton.svelte';
	import { activitySchema } from './schema';

	export let data;

	const superform = superForm(data.form, { validators: activitySchema });
</script>

<div class="card m-auto mt-10 max-w-md p-5">
	<Form {superform}>
		<h2>New Activity</h2>
		<Input field="name" />
		<Input field="description" />
		<Input field="price" type="number" />
		<Input field="gallery" type="file" />
		<Input field="enrollmentMin" type="number" />
		<Input field="enrollmentMax" type="number" />
		<Input field="enrollmentDeadline" type="date" />

		<SubmitButton />
	</Form>
</div>
