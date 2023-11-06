<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import paths from '$lib/constants/paths';
	import Form from '$lib/forms/form.svelte';
	import Input from '$lib/forms/input.svelte';
	import SubmitButton from '$lib/forms/submitButton.svelte';
	import { registerSchema } from './schema';

	export let data;

	const superform = superForm(data.form, { validators: registerSchema });
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<Form {superform}>
		<h2 class="h2">Register</h2>
		<Input field="name" />
		<Input field="surname" />
		<Input field="email" />
		<Input field="password" type="password" />
		<Input field="passwordConfirm" type="password" />

		<p>
			Already registered?
			<a href={paths.login}>Login</a>
		</p>

		<SubmitButton />
	</Form>
</div>
