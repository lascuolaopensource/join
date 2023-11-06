<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import Form from '$lib/forms/form.svelte';
	import Input from '$lib/forms/input.svelte';
	import { requestPasswordResetSchema } from './schema';
	import SubmitButton from '$lib/forms/submitButton.svelte';

	export let data;

	const superform = superForm(data.form, { validators: requestPasswordResetSchema });
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<Form {superform} className="space-y-8">
		<h2 class="h2">Request Reset Password</h2>
		<Input field="email" type="email" />
		<SubmitButton />
	</Form>
</div>
