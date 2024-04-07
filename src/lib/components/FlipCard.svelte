<script>
	let flipped = false;

	function flip(node, { delay = 0, duration = 1500 }) {
		return {
			delay,
			duration,
			css: (t, u) => `
				transform: rotateY(${1 - u * 180}deg);
				opacity: ${1 - u};
			`
		};
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card-container" on:click={() => (flipped = !flipped)}>
	<div class="card">
		{#if flipped}
			<div class="side" transition:flip>Side A</div>
		{:else}
			<div class="side back" transition:flip>Side B</div>
		{/if}
	</div>
</div>

<style>
	.card-container {
		position: relative;
		height: 400px;
		width: 600px;
	}

	.card {
		width: 100%;
		height: 100%;
		position: absolute;
		perspective: 600;
	}

	.side {
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: orange;
		overflow: hidden;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.back {
		background-color: grey;
	}
</style>
