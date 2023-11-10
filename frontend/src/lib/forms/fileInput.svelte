<script lang="ts" context="module">
	export type InputType =
		| 'text'
		| 'email'
		| 'password'
		| 'number'
		| 'tel'
		| 'url'
		| 'file'
		| 'textarea'
		| 'date';
</script>

<script lang="ts">
	import { formFieldProxy } from 'sveltekit-superforms/client';
	import { getFormContext } from './form.svelte';
	import FieldWrapper from './fieldParts/fieldWrapper.svelte';
	import { fieldHasErrors } from './fieldParts/fieldError.svelte';

	export let field: string;
	export let label = '';
	export let placeholder = '';
	export let multiple = false;

	const { superform } = getFormContext();
	const { value, errors, constraints } = formFieldProxy(superform, field);

	$: hasErrors = fieldHasErrors($errors);
</script>

<FieldWrapper {field} {label}>
	<input
		name={field}
		type="file"
		class="input"
		class:input-error={hasErrors}
		data-invalid={hasErrors}
		{placeholder}
		{...$constraints}
		{multiple}
	/>
</FieldWrapper>
