<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	export let data;

	const { form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Update Password</h1>

	<form method="POST" class="mt-8 space-y-5" use:enhance>
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

		<button class="btn variant-filled" type="submit">Update Password</button>
	</form>
</div>
