<script lang="ts" context="module">
	export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
</script>

<script lang="ts">
	import { formFieldProxy } from 'sveltekit-superforms/client';
	import { getFormContext } from './form.svelte';
	import FieldWrapper from './fieldParts/fieldWrapper.svelte';
	import { fieldHasErrors } from './fieldParts/fieldError.svelte';

	export let field: string;
	export let type: InputType = 'text';
	export let label = '';
	export let placeholder = '';

	const { superform } = getFormContext();
	const { value, errors, constraints } = formFieldProxy(superform, field);

	const setType = (node: HTMLInputElement) => {
		node.type = type;
	};

	$: hasErrors = fieldHasErrors($errors);
</script>

<FieldWrapper {field} {label}>
	<input
		use:setType
		name={field}
		class="input"
		bind:value={$value}
		class:input-error={hasErrors}
		data-invalid={hasErrors}
		{placeholder}
		{...$constraints}
	/>
</FieldWrapper>
