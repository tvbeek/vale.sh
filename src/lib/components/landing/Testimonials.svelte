<script lang="ts">
	import { mode } from 'mode-watcher';

	let cardColor = $mode == 'dark' ? 'bg-white/5' : 'bg-gray-400/5';
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
			<div class="{cardColor} p-8 sm:p-10">
				<img
					class="max-h-12 w-full object-contain"
					src="/users/Amazon Web Services.png"
					alt="Transistor"
					width="158"
					height="48"
				/>
			</div>
			<div class="bg-white/5 p-6 sm:p-10">
				<img
					class="max-h-12 w-full object-contain"
					src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
					alt="Reform"
					width="158"
					height="48"
				/>
			</div>
			<div class="bg-white/5 p-6 sm:p-10">
				<img
					class="max-h-12 w-full object-contain"
					src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
					alt="Tuple"
					width="158"
					height="48"
				/>
			</div>
			<div class="bg-white/5 p-6 sm:p-10">
				<img
					class="max-h-12 w-full object-contain"
					src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg"
					alt="Laravel"
					width="158"
					height="48"
				/>
			</div>
			<div class="bg-white/5 p-6 sm:p-10">
				<img
					class="max-h-12 w-full object-contain"
					src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
					alt="SavvyCal"
					width="158"
					height="48"
				/>
			</div>
			<div class="bg-white/5 p-6 sm:p-10">
				<img
					class="max-h-12 w-full object-contain"
					src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
					alt="Statamic"
					width="158"
					height="48"
				/>
			</div>
		</div>
	</div>
</div>
