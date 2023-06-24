<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import Form from '$lib/forms/form.svelte';
	import Input from '$lib/forms/input.svelte';
	import SubmitButton from '$lib/forms/submitButton.svelte';
	import { passwordResetSchema } from './schema';

	export let data;

	const superform = superForm(data.form, { validators: passwordResetSchema });
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<Form {superform}>
		<h2>Update Password</h2>
		<Input field="password" type="password" />
		<Input field="passwordConfirm" type="password" />
		<SubmitButton />
	</Form>
</div>
