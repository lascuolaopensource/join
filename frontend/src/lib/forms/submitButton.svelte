<script lang="ts">
	import { getFormContext } from './form.svelte';

	export let className = 'btn variant-filled';

	const { superform } = getFormContext();
	const { allErrors } = superform;
</script>

<div class="flex justify-end">
	<button type="submit" class={className} disabled={$allErrors.length >= 1}>
		<slot>Submit</slot>
	</button>
</div>
