<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { siteConfig } from '$lib/config/site.js';
</script>

<div>
	<div class="px-6 py-14 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
				Your style, our editor
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8">
				Vale is an open-source, command-line tool that brings your editorial style guide to life.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button variant="outline">Get Started</Button>
				<a href="#" class="text-sm/6 font-semibold">Learn more <span aria-hidden="true">→</span></a>
			</div>
		</div>
		<img
			src="/media/mac.png"
			alt="App screenshot"
			class="mx-auto mt-10"
			style="width:85%;max-width:700px"
		/>
		<dl
			class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
		>
			<div class="flex flex-col bg-gray-400/5 p-8">
				<dt class="text-sm/6 font-semibold text-gray-600 underline">
					<a href={siteConfig.links.github}>Stars on GitHub</a>
				</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">4.5K+</dd>
			</div>
			<div class="flex flex-col bg-gray-400/5 p-8">
				<dt class="text-sm/6 font-semibold text-gray-600 underline">
					<a href={siteConfig.links.releases}>Downloads</a>
				</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">3M+</dd>
			</div>
			<div class="flex flex-col bg-gray-400/5 p-8">
				<dt class="text-sm/6 font-semibold text-gray-600 underline">
					<a href={siteConfig.links.docker}>Docker pulls</a>
				</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">1.5M+</dd>
			</div>
			<div class="flex flex-col bg-gray-400/5 p-8">
				<dt class="text-sm/6 font-semibold text-gray-600 underline underline">
					<a href={siteConfig.links.contributors}>Contributors</a>
				</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">40+</dd>
			</div>
		</dl>
	</div>
</div>
