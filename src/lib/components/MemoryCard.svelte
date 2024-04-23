<script>
	export let gif = '';
	export let title = '';
	export let content = '';
	export let url = '';
	let isFlipped = false;
	function flipCard() {
		isFlipped = !isFlipped;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="card" class="w-card h-card perspective mb-7" on:click={flipCard}>
	<div id="card-inner" class:flipped={isFlipped}>
		<!--
			If isFlipped is true, HTML will be:
			<div id="card-inner" class="flipped">

			Otherwise, it will be:
			<div id="card-inner">
		 -->
		<!-- FRONT CARD -->
		<div
			id="card-front"
			class="card-face flex flex-col items-center bg-[--card-colour] mx-3 mt-3 rounded-lg"
		>
			<div class="mt-4">
				<span class="text-2xl font-semibold text-center text-white">{title}</span>
			</div>
			<img id="gif" src={gif} alt="GIF" class="w-logo h-logo rounded-lg mt-3" />
		</div>

		<!-- BACK CARD -->
		<div
			id="card-back"
			class="card-face flex flex-col items-center bg-blue-900 mx-3 my-3 rounded-lg"
		>
			<div class="flex flex-col items-center w-card h-card bg-blue-900 mx-3 mt-3 rounded-sm">
				<div class="mt-4">
					<span class="text-2xl font-semibold text-center text-white">{title}</span>
				</div>
				<div class="mt-3">
					<p class="text-white text-center m-5 text-2xl">{content}</p>
				</div>
			</div>
			<a href={url} target="_blank">
				<button class="w-24 h-10 mb-8 bg-blue-500 text-white rounded-lg text-lg"> Open </button>
			</a>
		</div>
	</div>
</div>

<style>
	.perspective {
		perspective: 1000px;
	}
	#card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
		transform-origin: center;
	}
	.card-face {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}
	#card-back {
		transform: rotateY(180deg);
	}
	.flipped {
		transform: rotateY(180deg);
	}
</style>
