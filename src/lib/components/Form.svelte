<script>
    import MemoryCard from "./MemoryCard.svelte";
    import { createEventDispatcher } from 'svelte';
    let title = '';
    let content = '';
    let gif = '';
    const dispatch = createEventDispatcher();

    function addGif(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(event) {
            gif = event.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch('submit', { title, content, gif });
    }

</script>

<div class="bg-white p-10 mb-3 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
	<form on:submit={handleSubmit}>
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
			<input
				name="content"
                bind:value={content}
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
			<MemoryCard
                gif={gif}
                title={title}
                content={content}
            />
		</div>
            
        <!-- Submit -->
        <button type="submit" class="block w-full bg-slate-800 text-white font-bold p-4 rounded-lg">Submit</button>
	</form>
</div>