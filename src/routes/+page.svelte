<script>
	import MemoryCard from '../lib/components/MemoryCard.svelte';
	import logo from '../lib/assets/logo.svg';
	import { goto } from '$app/navigation';
	import data from '/src/data.json';

	function goto_login() {
		goto('/Login');
	}	

</script>

<div id="main" class="bg-[--primary-colour] overflow-x-auto overflow-y-hidden">
	<!-- <div id="sidebar" class="outline outline-red-600 outline-2">
		<SideBar/>
	</div> -->
	<!-- TITLE and LOGO -->
	<div class="flex justify-center">
		<h1
			class="
		text-5xl font-bold text-center mt-4 text-[--text-colour]
		md:text-6xl
    	lg:text-7xl"
		>
			Memory
		</h1>
		<div
			class="rounded-full w-[44px] h-[44px]  bg-[--secondary-colour] justify-center mt-4
			md:w-[64px] md:h-[64px] 
			lg:w-[80px] lg:h-[80px] lg:mt-6
		"
		>
			<img
				src={logo}
				alt="LOGO"
				class="
			w-[40px] rounded-lg mt-1 mx-auto
			md:w-[60px]
			lg:w-[76px]
			"
			/>
			<!-- w-[120px] h-[120px] rounded-lg mt-2 mx-auto -->
		</div>
		<h1
			class="
		text-5xl font-bold text-center mt-4 text-[--text-colour]
		md:text-6xl
    	lg:text-7xl"
		>
			Project
		</h1>

		<button class="bg-slate-400 w-auto h-10 px-4 py-2 rounded-md text-white font-semibold shadow-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50" on:click={goto_login}>
			ADD
		</button>
	</div>

	<!-- Display of cards --> 
	<ul class="list ">
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
