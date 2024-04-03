<script>
	export let gif = '';
	export let title = '';
	export let content = '';
	let showContent = false;
</script>

<div class="flex flex-col items-center w-40 bg-red-300 mx-3 my-3 rounded-lg">
	<div class="w-36 h-36 rounded-full flex items-center mt-2">
		<img src={gif} alt="GIF" class="w-36 h-36 rounded-full" />
	</div>
	<span class="mt-4 text-lg font-semibold text-center">{title}</span>
	<button class="my-2 bg-red-600 rounded-lg w-32 h-8" on:click={() => (showContent = !showContent)}
		>Show More</button
	>
	{#if showContent}
		<div class="mt-2 p-3 text-base font-serif">
			{content}
		</div>
	{/if}
</div>
