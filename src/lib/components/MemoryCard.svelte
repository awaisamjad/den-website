<script>
	export let gif = '';
	export let title = '';
	export let content = '';
	let showContent = false;
</script>

<div class="flex flex-col items-center w-card h-card bg-blue-900 mx-3 mt-3 rounded-lg shadow-card">
	<div class = "mt-4" >
		<span class="text-2xl font-semibold text-center text-white">{title}</span>
	</div>
	<img src={gif} alt="GIF" class="w-logo h-logo rounded-lg mt-3" />
</div>
