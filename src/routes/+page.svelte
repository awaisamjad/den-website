<script>
	import MemoryCard from '../lib/components/MemoryCard.svelte';
	import logo from '../lib/assets/logo.svg';
	import arrow from '../lib/assets/arrow.svg';
	import { goto } from '$app/navigation';
	import data from '/src/data.json';

	function goto_login() {
		goto('/Login');
	}
</script>

<div id="main" class="bg-[--primary-colour] overflow-x-auto overflow-y-hidden">
	<!-- TITLE and LOGO -->
	<div class="bg-[#508db1]">
		<div class="flex justify-center items-center placeholder:p-4 space-x-4 pb-[580px]">
			<h1 class="text-3xl font-bold text-center text-white mt-4 md:text-6xl lg:text-8xl">Memory</h1>
			<div
				class="rounded-full w-[44px] h-[44px] bg-[--secondary-colour] flex justify-center items-center mt-4 md:w-[64px] md:h-[64px] lg:w-[80px] lg:h-[80px] lg:mt-6"
			>
				<img
					src={logo}
					alt="LOGO"
					class="w-[40px] rounded-lg mt-1 mx-auto md:w-[60px] lg:w-[76px]"
				/>
			</div>
			<h1 class="text-3xl font-bold text-center text-white mt-4 md:text-6xl lg:text-8xl">
				Project
			</h1>
			<button
				class="bg-[#133142]
        h-8 px-1 py-1 rounded-md
        md:w-auto md:h-10 md:px-5 md:py-2
        text-white shadow-md hover:bg-slate-500
        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
				on:click={goto_login}
			>
				ADD
			</button>
		</div>
		<div class="flex flex-col items-center text-white text-2xl pb-3">
			<img src={arrow} alt="arrow" class="w-52  h-52 animate-bounce" />
			<p>Swipe Below</p>
		</div>
		
	</div>
	<!-- Display of cards -->
	<ul class="list">
		{#each data as item}
			<MemoryCard gif={item.gif} title={item.title} content={item.content} url={item.url} />
		{/each}
	</ul>
</div>

<style>
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		list-style: none;
	}

	@media (max-width: 400px) {
		.list {
			justify-content: center;
		}
	}
</style>
