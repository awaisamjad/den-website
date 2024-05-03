<script>
    let email = '';
    let password = '';

    function sumbit() {
        if (email === 'a' && password === 'a') {
            alert('Login Successful');
        } else {
            alert('Login Failed');
        }   
    }

</script>

<div class="bg-white p-10 mb-3 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
	<form action="">
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
				placeholder="Put in your fullname."
                bind:value={password}
				class="border border-gray-300 shadow p-3 w-full rounded mb-"
			/>
		</div>

		<button class="block w-full bg-slate-800 text-white font-bold p-4 rounded-lg" on:click={sumbit}>
            Enter
        </button>
	</form>
</div>
