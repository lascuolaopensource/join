<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import paths from '$lib/constants/paths';
	export let data;

	const { form, errors, constraints, enhance } = superForm(data.form, {
		onError({ result, message }) {
			console.log(result.error.message);
			message.set(result.error.message);
		}
	});
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Log in</h1>

	<form method="POST" class="mt-8 space-y-5" use:enhance>
		<label class="label" for="email">
			<span class="block">Email</span>
			<input
				class="input"
				type="email"
				name="email"
				id="email"
				required
				class:input-error={$errors.email}
				data-invalid={$errors.email}
				bind:value={$form.email}
				{...$constraints.email}
			/>
		</label>
		{#if $errors.email}
			<span class="text-red-400">{$errors.email}</span>
		{/if}

		<label class="label" for="password">
			<span class="block">Password</span>
			<input
				class="input"
				type="password"
				name="password"
				id="password"
				required
				class:input-error={$errors.password}
				data-invalid={$errors.password}
				bind:value={$form.password}
				{...$constraints.password}
			/>
		</label>
		{#if $errors.password}
			<span class="text-red-400">{$errors.password}</span>
		{/if}

		<p>
			Forgot Password?
			<a href={paths.passwordReset.forgot}>Reset Password</a>
		</p>
		<p>
			Don't have an account?
			<a href={paths.register.index}>Register</a>
		</p>

		<button class="btn variant-filled" type="submit">Log in</button>
	</form>
</div>
