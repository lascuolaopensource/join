<script lang="ts">
	import { getFormContext } from '../form.svelte';
	import { formFieldProxy } from 'sveltekit-superforms/client';
	import { fieldHasErrors } from './fieldError.svelte';

	export let field: string;
	export let text = '';
	if (!Boolean(text)) text = field;

	const { superform, showRequiredIndicator } = getFormContext();
	const { constraints, errors } = formFieldProxy(superform, field);

	function capitalizeFirstLetter(text: string) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
</script>

<label for={field} class="label" class:text-red-400={fieldHasErrors($errors)}>
	<span>{capitalizeFirstLetter(text)}</span>
	{#if $constraints?.required && showRequiredIndicator}
		<span class="text-red-400">*</span>
	{/if}
</label>
