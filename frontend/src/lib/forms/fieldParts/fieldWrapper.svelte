<script lang="ts">
	import FieldError from './fieldError.svelte';
	import FieldLabel from './fieldLabel.svelte';

	export let field: string;
	export let label = '';
	export let className = 'space-y-2';
</script>

<div class={className}>
	<FieldLabel {field} text={label} />
	<slot />
	<FieldError {field} />
</div>
