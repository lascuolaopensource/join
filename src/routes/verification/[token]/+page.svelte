<script lang="ts">
	import { goto } from '$app/navigation'
	export let data
	const jwt_status = data.jwt_status
	import { onMount } from 'svelte'
	export let timeout = 3000
	onMount(() => {
		setTimeout(() => {
			goto('/authenticated')
		}, timeout)
	})
</script>

<h1>Verification..</h1>

<p class="p-5">This token is {jwt_status}</p>
<p class="p-5">You will be redirected in {timeout}</p>
