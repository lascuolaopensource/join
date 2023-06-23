<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import paths from '$lib/constants/paths';
	export let data;

	const { form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Register</h1>

	<form method="POST" class="mt-8 space-y-5" use:enhance>
		<label class="label" for="name">
			<span class="block">First Name</span>
			<input
				class="input"
				type="text"
				name="name"
				id="name"
				required
				class:input-error={$errors.name}
				data-invalid={$errors.name}
				bind:value={$form.name}
				{...$constraints.name}
			/>
		</label>
		{#if $errors.name}
			<span class="text-red-400">{$errors.name}</span>
		{/if}

		<label class="label" for="surname">
			<span class="block">Last Name</span>
			<input
				class="input"
				type="text"
				name="surname"
				id="surname"
				required
				class:input-error={$errors.surname}
				data-invalid={$errors.surname}
				bind:value={$form.surname}
				{...$constraints.surname}
			/>
		</label>
		{#if $errors.surname}
			<span class="text-red-400">{$errors.surname}</span>
		{/if}

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

		<label class="label" for="passwordConfirm">
			<span class="block">Password Confirm</span>
			<input
				class="input"
				type="password"
				name="passwordConfirm"
				id="passwordConfirm"
				required
				class:input-error={$errors.passwordConfirm}
				data-invalid={$errors.passwordConfirm}
				bind:value={$form.passwordConfirm}
				{...$constraints.passwordConfirm}
			/>
		</label>
		{#if $errors.passwordConfirm}
			<span class="text-red-400">{$errors.passwordConfirm}</span>
		{/if}

		<p>
			Already registered?
			<a href={paths.login}>Login</a>
		</p>

		<button class="btn variant-filled" type="submit">Register</button>
	</form>
</div>
