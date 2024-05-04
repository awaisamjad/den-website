<script>
	import MemoryCard from './MemoryCard.svelte';
	import * as fs from 'fs';
	let title = '';
	let content = '';
	let url = '';
	let gif = '';

	function addGif(event) {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = function (event) {
			gif = event.target.result;
		};

		if (file) {
			reader.readAsDataURL(file);
		} else {
			gif = '';
		}
	}
	let data = JSON.stringify({ title, content, url, gif });
	console.log(data);
	async function submit() {
		try {
			await fs.promises.writeFile('src/data.json', data);
			console.log('data.json written correctly');
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
</script>

<div class="bg-white p-10 mb-3 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
	<form>
		<!-- Title  -->
		<div class="mb-5">
			<label for="title" class="block mb-2 font-bold text-gray-800">Title</label>
			<input
				type="text"
				id="title"
				name="title"
				placeholder="Enter title..."
				bind:value={title}
				class="border border-gray-300 shadow p-3 w-full rounded mb-"
			/>
		</div>

		<!-- Content -->
		<div class="mb-5">
			<label for="content" class="block mb-2 font-bold text-gray-800">Content</label>
			<textarea
				name="content"
				bind:value={content}
				class="border border-gray-300 shadow p-3 w-full rounded mb-"
			/>
		</div>

		<!-- URL -->
		<div class="mb-5">
			<label for="url" class="block mb-2 font-bold text-gray-800">Enter URL</label>
			<input
				name="url"
				bind:value={url}
				class="border border-gray-300 shadow p-3 w-full rounded mb-"
			/>
		</div>
		<!-- Gif -->
		<div class="mb-5">
			<label for="gif" class="block mb-2 font-bold text-gray-800">Choose GIF</label>
			<input
				type="file"
				id="gif"
				name="gif"
				accept=".gif"
				placeholder="Choose GIF..."
				on:change={addGif}
				class="border border-gray-300 shadow p-3 w-full rounded mb-"
			/>
		</div>

		<!-- Output -->
		<div class="mb-5 flex justify-center">
			<MemoryCard {gif} {title} {url} {content} />
		</div>

		<!-- Submit -->
		<button
			type="submit"
			class="block w-full bg-slate-800 text-white font-bold p-4 rounded-lg"
			on:click={submit}>Submit</button
		>
	</form>
</div>
