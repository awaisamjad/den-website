<script>
	export let gif = '';
	export let title = '';
	export let content = '';

	function toggleDropDown() {
		const dropdownContent = document.getElementById('dropdown-content');
		dropdownContent.classList.toggle('show');
		const dropdownButton = document.querySelector('.dropdown');
		if (dropdownContent.classList.contains('show')) {
			dropdownButton.textContent = 'Hide';
		} else {
			dropdownButton.textContent = 'Show More';
		}
	}
</script>

<div class="card">
	<div class="icon-container">
		<div class="icon">
			<img src={gif} alt="GIF" class="icon" />
		</div>
	</div>
	<span class="title">{title}</span>
	<button class="dropdown">Show More</button>
	<div class="content" id="dropdown-content">
		{content}
	</div>
</div>

<style>
	.card {
		display: flex;
		width: 150px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 24px;
		margin-top: 10px;
		margin-right: 5px;
		background-color: rgba(207, 126, 126, 0.384);
		border-radius: 15px;
		box-shadow:
			0px 10px 15px -3px rgba(0, 0, 0, 0.1),
			0px 4px 6px -2px rgba(0, 0, 0, 0.05);
	}
	.icon-container {
		display: flex;
		align-items: center;
		margin-top: 10px;
		outline: red 5px solid;
	}
	.icon {
		width: 144px;
		height: 144px;
		background-color: #e2e8f0;
		border-radius: 50%;
		align-items: center;
	}

	.title {
		margin-top: 16px;
		font-size: 20px;
		font-weight: 600;
		align-items: center;
	}

	.bottom-section {
		margin-top: 16px;
	}

	/* .content {
		display: none;
	} */

	.show {
		display: block;
	}
</style>
