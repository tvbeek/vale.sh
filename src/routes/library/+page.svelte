<script lang="ts">
	import { onMount } from 'svelte';
	import { getLibrary, getOGInfo } from '$lib/api';

	type Media = {
		year: string;
		type: string;
		title: string;
		author: string;
		url: string;
	};

	let data = [] as Media[];
	onMount(async () => {
		data = await getLibrary();
		console.log(data);
	});
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<h2 class="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">From the blog</h2>
			<p class="mt-2 text-lg/8">Learn how to grow your business with our expert advice.</p>
			<div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
				{#each data as media}
					{@const og = getOGInfo(media.url)}
					<article class="relative isolate flex flex-col gap-8 lg:flex-row">
						<div class="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
							<img
								src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
								alt=""
								class="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
							/>
							<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
						</div>
						<div>
							<div class="flex items-center gap-x-4 text-xs">
								<time datetime="2020-03-16" class="text-gray-500">{media.year}</time>
								<a
									href="#"
									class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
									>{media.type}</a
								>
							</div>
							<div class="group relative max-w-xl">
								<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
									<a href="#">
										<span class="absolute inset-0"></span>
										{media.title}
									</a>
								</h3>
								<p class="mt-5 text-sm/6 text-gray-600">
									{og.description}
								</p>
							</div>
							<div class="mt-4 flex border-t border-gray-900/5 pt-6">
								<div class="relative flex items-center gap-x-4">
									<div class="text-sm/6">
										<p class="font-semibold text-gray-900">
											<a href="#">
												<span class="absolute inset-0"></span>
												{media.author}
											</a>
										</p>
										<p class="text-gray-600">Co-Founder / CTO</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</div>
