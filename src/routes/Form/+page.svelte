<script>
	import Form from '../../lib/components/CardMakerForm.svelte';
	import { goto } from '$app/navigation';
	function back() {
		goto('/');
	}
</script>

<button class="bg-slate-300 text-white p-2" on:click={back}> Back </button>
<Form />
