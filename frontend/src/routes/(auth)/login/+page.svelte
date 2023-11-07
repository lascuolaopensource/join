<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import paths from '$lib/constants/paths';
	import Form from '$lib/forms/form.svelte';
	import SubmitButton from '$lib/forms/submitButton.svelte';
	import Input from '$lib/forms/input.svelte';
	import { loginSchema } from './schema';

	export let data;

	const superform = superForm(data.form, {
		validators: loginSchema,
		onError({ result, message }) {
			console.log(result.error.message);
			message.set(result.error.message);
		}
	});
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<Form {superform} showRequiredIndicator={false}>
		<h2 class="h2">Log in</h2>
		<Input type="email" field="email" />
		<Input type="password" field="password" />

		<p>
			Forgot Password?
			<a class="text-primary-500 hover:underline" href={paths.passwordReset.forgot}
				>Reset Password</a
			>
		</p>
		<p>
			Don't have an account?
			<a class="text-primary-500 hover:underline" href={paths.register.index}>Register</a>
		</p>

		<SubmitButton />
	</Form>
</div>
