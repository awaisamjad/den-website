<script>
    import { goto } from '$app/navigation';
	import LoginForm from "../../lib/components/LoginForm.svelte";
    function back() {
		goto('/');
	}
</script>

<button class="bg-slate-300 text-white p-2" on:click={back}>
    Back
</button>
<LoginForm/>