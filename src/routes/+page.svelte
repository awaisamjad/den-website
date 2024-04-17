<script>
	import MemoryCard from '../lib/components/MemoryCard.svelte';
	import SideBar from '../lib/components/SideBar.svelte';
	import Test from '../lib/components/Test.svelte';
	let data = [
		{
			title: 'Aortic Dissection',
			content:
				'Aortic dissection is a serious condition in which there is a tear in the wall of the major artery carrying blood out of the heart (aorta). As the tear extends along the wall of the aorta, blood can flow in between the layers of the blood vessel wall (dissection). This can lead to aortic rupture or decreased blood flow (ischemia) to organs.',
			url: 'https://en.wikipedia.org/wiki/Aortic_dissection'
		},
		{
			title: 'Aortic Aneurysm',
			content:
				'An aortic aneurysm is an abnormal bulge that occurs in the wall of the major blood vessel (aorta) that carries blood from your heart to your body. Aortic aneurysms can occur anywhere in your aorta and may be tube-shaped (fusiform) or round (saccular).',
			url: 'https://en.wikipedia.org/wiki/Aortic_aneurysm'
		},
		{
			title: 'Aortic Stenosis',
			content:
				"Aortic stenosis is a narrowing of the aortic valve opening. The aortic valve allows blood to flow from the heart's lower left chamber (ventricle) into the aorta and to the body. The narrowing of the aortic valve prevents the valve from opening fully, which obstructs blood flow from your heart into the aorta and the rest of your body.",
			url: 'https://en.wikipedia.org/wiki/Aortic_stenosis'
		},
		{
			title: 'Aortic Regurgitation',
			content:
				"Aortic regurgitation is a condition that occurs when your heart's aortic valve doesn't close tightly. Aortic regurgitation allows some of the blood that was just pumped out of your heart's main pumping chamber (left ventricle) to leak back into it.",
			url: 'https://en.wikipedia.org/wiki/Aortic_regurgitation'
		},
		{
			title: 'Aortic Valve Disease',
			content:
				'Aortic valve disease can include aortic stenosis, aortic regurgitation, and bicuspid aortic valve disease. Aortic valve disease can be congenital (present at birth) or acquired (develops after birth).',
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_disease'
		},
		{
			title: 'Aortic Valve Stenosis',
			content:
				'Aortic valve stenosis is a condition in which the aortic valve narrows, preventing it from opening fully. This can reduce or block blood flow from your heart to the rest of your body.',
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_stenosis'
		},
		{
			title: 'Aortic Valve Regurgitation',
			content:
				"Aortic valve regurgitation is a condition that occurs when the aortic valve doesn't close tightly. Aortic valve regurgitation allows some of the blood that was just pumped out of your heart's main pumping chamber (left ventricle) to leak back into it.",
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_regurgitation'
		},
		{
			title: 'Aortic Valve Prolapse',
			content:
				"Aortic valve prolapse is a condition in which the aortic valve doesn't close properly. The aortic valve is located between the lower left heart chamber (left ventricle) and the aorta. Normally, the aortic valve closes tightly to prevent blood from flowing back",
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_prolapse'
		},
		{
			title: 'Aortic Valve Replacement',
			content:
				'Aortic valve replacement is a surgical procedure to replace a damaged or diseased aortic valve with a new valve made from synthetic materials or animal tissue.',
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_replacement'
		},
		{
			title: 'Aortic Valve Repair',
			content:
				'Aortic valve repair is a surgical procedure to fix a damaged or diseased aortic valve without replacing it. The goal of aortic valve repair is to restore the normal function of the valve and improve blood flow.',
			url: 'https://en.wikipedia.org/wiki/Aortic_valve_repair'
		}
	];
</script>

<div id="main" class="bg-blue-100">
	<!-- <SideBar/> -->
	<!-- TITLE and LOGO -->
	<div class="flex justify-evenly">
		<h1 class="title-text-style ">Memory</h1>
		<img
			src="https://media.giphy.com/media/3o7TKz9bX9v9KzCnXq/giphy.gif"
			alt="GIF"
			class="w-24 h-24 rounded-lg mt-4"
		/>
		<h1 class="title-text-style">Project</h1>
	</div>

	<!-- Display of cards -->
	<ul class="list">
		{#each data as item}
			<MemoryCard
				gif="https://media.giphy.com/media/3o7TKz9bX9v9KzCnXq/giphy.gif"
				title={item.title}
				content={item.content}
				url={item.url}
			/>
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
