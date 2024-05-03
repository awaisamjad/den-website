<script>
	import MemoryCard from '../lib/components/MemoryCard.svelte';
	import logo from '../lib/assets/logo.svg';
	import SideBar from '../lib/components/SideBar.svelte';
	// import AppRail from '../lib/components/AppRail.svelte';
	import Test from '../lib/components/Test.svelte';
	let data = [
		{
			title: 'Aortic Dissection',
			content:
				'Aortic dissection is a serious condition in which there is a tear in the wall of the major artery carrying blood out of the heart (aorta). As the tear extends along the wall of the aorta, blood can flow in between the layers of the blood vessel wall (dissection). This can lead to aortic rupture or decreased blood flow (ischemia) to organs.',
			url: 'https://en.wikipedia.org/wiki/Aortic_dissection',
			gif: '/aortic.gif'
		},
		{
			title: 'Aortic Aneurysm',
			content:
				'An aortic aneurysm is an abnormal bulge that occurs in the wall of the major blood vessel (aorta) that carries blood from your heart to your body. Aortic aneurysms can occur anywhere in your aorta and may be tube-shaped (fusiform) or round (saccular).',
			url: 'https://en.wikipedia.org/wiki/Aortic_aneurysm',
			gif: '/dd.gif'
		},
		{
			title: 'Aortic Stenosis',
			content:
				"Aortic stenosis is a narrowing of the aortic valve opening. The aortic valve allows blood to flow from the heart's lower left chamber (ventricle) into the aorta and to the body. The narrowing of the aortic valve prevents the valve from opening fully, which obstructs blood flow from your heart into the aorta and the rest of your body.",
			url: 'https://en.wikipedia.org/wiki/Aortic_stenosis',
			gif: '/aortic.gif'
		},
		{
			title: 'Aortic Regurgitation',
			content:
				"Aortic regurgitation is a condition that occurs when your heart's aortic valve doesn't close tightly. Aortic regurgitation allows some of the blood that was just pumped out of your heart's main pumping chamber (left ventricle) to leak back into it.",
			url: 'https://en.wikipedia.org/wiki/Aortic_regurgitation',
			gif: '/dd.gif'
		},
		{
			title: 'Aortic Valve Disease',
			content:
				'Aortic valve disease can include aortic stenosis, aortic regurgitation, and bicuspid aortic valve disease. Aortic valve disease can be congenital (present at birth) or acquired (develops after birth).',
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_disease',
			gif: '/aortic.gif'
		},
		{
			title: 'Aortic Valve Stenosis',
			content:
				'Aortic valve stenosis is a condition in which the aortic valve narrows, preventing it from opening fully. This can reduce or block blood flow from your heart to the rest of your body.',
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_stenosis',
			gif: '/dd.gif'
		},
		{
			title: 'Aortic Valve Regurgitation',
			content:
				"Aortic valve regurgitation is a condition that occurs when the aortic valve doesn't close tightly. Aortic valve regurgitation allows some of the blood that was just pumped out of your heart's main pumping chamber (left ventricle) to leak back into it.",
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_regurgitation',
			gif: '/aortic.gif'
		},
		{
			title: 'Aortic Valve Prolapse',
			content:
				"Aortic valve prolapse is a condition in which the aortic valve doesn't close properly. The aortic valve is located between the lower left heart chamber (left ventricle) and the aorta. Normally, the aortic valve closes tightly to prevent blood from flowing back",
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_prolapse',
			gif: '/dd.gif'
		},
		{
			title: 'Aortic Valve Replacement',
			content:
				'Aortic valve replacement is a surgical procedure to replace a damaged or diseased aortic valve with a new valve made from synthetic materials or animal tissue.',
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_replacement',
			gif: '/aortic.gif'
		},
		{
			title: 'Aortic Valve Repair',
			content:
				'Aortic valve repair is a surgical procedure to fix a damaged or diseased aortic valve without replacing it. The goal of aortic valve repair is to restore the normal function of the valve and improve blood flow.',
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_repair',
			gif: '/dd.gif'
		}
	];
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
			class="rounded-full w-[44px] bg-[--secondary-colour] justify-center
		md:w-[64px]
		lg:w-[84px]
		"
		>
			<img
				src={logo}
				alt="LOGO"
				class="
			w-[40px] rounded-lg mt-1 mx-auto
			md:w-[60px]
			lg:w-[80px]
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
