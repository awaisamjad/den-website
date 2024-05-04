<script>
	import { goto } from '$app/navigation';
	let email = '';
	let password = '';

	function form() {
		goto('/Form');
	}

	function goto_form() {
		if (email === 'a' && password === 'a') {
			form();
		} else {
			alert('Login Failed. Please check your email and password.');
		}
	}
</script>

<div class="bg-white p-10 mb-3 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
	<form>
		<div class="mb-5">
			<label for="email" class="block mb-2 font-bold text-gray-800">Email</label>
			<input
				type="text"
				id="email"
				name="email"
				placeholder="Enter Email..."
				bind:value={email}
				class="border border-gray-300 shadow p-3 w-full rounded mb-"
			/>
		</div>

		<div class="mb-5">
			<label for="password" class="block mb-2 font-bold text-gray-800">Password</label>
			<input
				type="text"
				id="password"
				name="password"
				placeholder="Enter password."
				bind:value={password}
				class="border border-gray-300 shadow p-3 w-full rounded mb-"
			/>
		</div>
	</form>
	<!-- Button was taken out of the form. look into forms and see if this is good code -->
	<button
		class="block w-full bg-slate-800 text-white font-bold p-4 rounded-lg"
		on:click={goto_form}
	>
		Enter
	</button>
</div>
