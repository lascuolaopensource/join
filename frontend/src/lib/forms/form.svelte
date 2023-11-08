<script lang="ts" context="module">
	import { getContext } from 'svelte';
	import type { AnyZodObject } from 'zod';

	//

	export const FORM_KEY = Symbol('form');

	export type FormContext<T extends AnyZodObject> = {
		superform: SuperForm<T, unknown>;
		showRequiredIndicator: boolean;
	};

	export function getFormContext<T extends AnyZodObject>(): FormContext<T> {
		return getContext(FORM_KEY);
	}
</script>

<script lang="ts" generics="T extends AnyZodObject">
	// Logic
	import { setContext } from 'svelte';
	import type { SuperForm } from 'sveltekit-superforms/client';
	import type { ZodValidation } from 'sveltekit-superforms';

	// Components
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	//

	export let superform: SuperForm<ZodValidation<T>, unknown>;
	export let showRequiredIndicator = false;
	export let action: string | undefined = undefined;

	let className = 'space-y-6';
	export { className as class };

	//

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];

	const modalStore = getModalStore();

	const modalComponent: ModalComponent = {
		ref: ConicGradient,
		props: { spin: true, stops: conicStops }
	};

	const loadingModal: ModalSettings = {
		type: 'component',
		component: modalComponent
	};

	$: {
		if ($delayed) modalStore.trigger(loadingModal);
		else modalStore.close();
	}

	const { errors, enhance, delayed, message } = superform;

	// $: console.log($errors);
	// $: error = Boolean($message) ? $message : $errors._errors ? $errors._errors.join('\n') : '';

	setContext<FormContext<T>>(FORM_KEY, { superform, showRequiredIndicator });
</script>

<form class={className} method="post" {action} use:enhance enctype="multipart/form-data">
	<slot />

	<!-- {#if error}
		<Alert color="red" accent={false} dismissable>{error}</Alert>
	{/if} -->
</form>
