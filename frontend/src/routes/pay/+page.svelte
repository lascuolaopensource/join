<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<form method="post" action="?/pay" use:enhance>
  <button class="btn variant-filled" type="submit">Checkout Action</button>
</form>