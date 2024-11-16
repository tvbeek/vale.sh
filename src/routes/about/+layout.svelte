<script lang="ts">
	let { children } = $props();
</script>

<div class="px-6 py-8 lg:px-8">
	<div class="mx-auto max-w-3xl text-base/7">
		<p class="text-base/7 font-semibold text-indigo-600">About</p>
		<h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
			Introducing Vale CLI
		</h1>
		<div class="mt-6 text-lg/8">
			{@render children()}
		</div>
	</div>
</div>
