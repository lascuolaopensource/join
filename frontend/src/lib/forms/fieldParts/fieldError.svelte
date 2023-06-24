<script lang="ts" context="module">
	export function fieldHasErrors(errors: string[] | undefined): boolean {
		if (!errors) return false;
		return errors.length > 0;
	}
</script>

<script lang="ts">
	import { formFieldProxy } from 'sveltekit-superforms/client';
	import { getFormContext } from '../form.svelte';

	export let field: string;

	const { superform } = getFormContext();
	const { errors } = formFieldProxy(superform, field);
</script>

{#if $errors}
	{#each $errors as error}
		<span class="text-red-400">{error}</span>
	{/each}
{/if}
