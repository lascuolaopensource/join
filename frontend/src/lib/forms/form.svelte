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
	import type { SvelteComponent } from 'svelte/internal';

	import { setContext } from 'svelte';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import type { SuperValidated, UnwrapEffects } from 'sveltekit-superforms';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';
	import type { SuperForm } from 'sveltekit-superforms/client';

	//

	export let superform: SuperForm<UnwrapEffects<T>, any>;
	export let showRequiredIndicator = true;

	export let submitButtonOptions: {
		useDefault?: boolean;
		text?: string;
	} = { useDefault: true, text: 'Submit' };
	console.log(submitButtonOptions);

	export let className = 'space-y-6';

	//

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];

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

	$: console.log($errors);
	// $: error = Boolean($message) ? $message : $errors._errors ? $errors._errors.join('\n') : '';

	setContext<FormContext<T>>(FORM_KEY, { superform, showRequiredIndicator });
</script>

<form class={className} method="post" use:enhance>
	<slot />

	<!-- {#if error}
		<Alert color="red" accent={false} dismissable>{error}</Alert>
	{/if} -->
</form>

<div class="absolute w-0 h-0 bottom-0 right-0">
	<Modal />
</div>
