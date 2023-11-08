<script lang="ts">
	import type { SuperForm } from 'sveltekit-superforms/client';
	import Input from '$lib/forms/input.svelte';
	import { slugify } from '$lib/utils/index.js';
	import type { activitiesSchema } from './schema';
	import type { ZodValidation } from 'sveltekit-superforms';

	export let superform: SuperForm<ZodValidation<typeof activitiesSchema>, any>;
	const { form } = superform;

	function generateSlugFromName() {
		$form.slug = slugify($form.name);
	}
</script>

<Input field="name" />
<div class="space-y-3">
	<Input field="slug" />
	<div class="flex justify-end">
		<button
			class="btn btn-sm variant-ghost-surface floa"
			on:click|preventDefault={generateSlugFromName}
		>
			Create slug from name
		</button>
	</div>
</div>
<Input field="description" />
<Input field="gallery" type="file" />
