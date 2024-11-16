<script lang="ts">
	import { mode } from 'mode-watcher';
	import { userConfigs, type UserConfig } from '$lib/config/users';
	import { onMount } from 'svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { shuffleArray } from '$lib/utils';

	let cardColor = '';
	let users: UserConfig[] = [];

	onMount(() => {
		users = shuffleArray(userConfigs);
		mode.subscribe((value) => {
			cardColor = value == 'dark' ? 'bg-gray-300' : 'bg-gray-100';
		});
	});
</script>

<div class="py-12">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl sm:text-center">
			<h2 class="text-base/7 font-semibold text-indigo-600">Used around the world</h2>
			<p class="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-balance sm:text-5xl">
				Trusted by thousands of writers, editors, and developers.
			</p>
			<p class="mt-6 text-lg/8">
				Vale intergrates with many popular apps, browers, and platforms, allowing you to use
				wherever you write content.
			</p>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
		<div
			class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3"
		>
			{#each users as user}
				<div class="{cardColor} p-6 sm:p-10">
					<img
						class="max-h-12 w-full object-contain"
						src="/users/{user.name}.svg"
						alt={user.name}
						width="158"
						height="48"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
