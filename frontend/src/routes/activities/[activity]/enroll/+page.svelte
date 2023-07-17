<script lang="ts">
	import Form from '$lib/forms/form.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { enrollSchemaLogged } from './schema';
	import Input from '$lib/forms/input.svelte';
	import { ArrowLeft } from 'lucide-svelte';
	import SubmitButton from '$lib/forms/submitButton.svelte';

	export let data;
	const { user, form, activity } = data;

	const superform = superForm(form, {
		validators: enrollSchemaLogged,
		onError({ result, message }) {
			console.log(result.error.message);
			message.set(result.error.message);
		}
	});
</script>

<a class="flex items-center gap-1" href={`/activities/${activity.slug}`}>
	<span>
		<ArrowLeft size="20" />
	</span>
	<span> Back to activity </span>
</a>
<h4>{activity.name}</h4>
<h2>Enroll</h2>
<Form {superform}>
	{#if user && !user.phone}
		<Input field="phone" />
	{/if}
	<SubmitButton>Enroll</SubmitButton>
</Form>
