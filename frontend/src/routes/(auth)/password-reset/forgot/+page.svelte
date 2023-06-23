<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	export let data;

	const { form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Request Reset Password</h1>

	<form method="POST" class="mt-8 space-y-5" use:enhance>
		<label class="label" for="email">
			<span class="block">email</span>
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

		<button class="btn variant-filled" type="submit">Reset Password</button>
	</form>
</div>
