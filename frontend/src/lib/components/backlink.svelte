<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';

	export let href: string;
</script>

<a class="flex items-center gap-1" {href}>
	<span>
		<ArrowLeft size="20" />
	</span>
	<span><slot /></span>
</a>
