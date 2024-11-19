<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import data from '$lib/data/media.json';
</script>

<div class="py-12">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">From the blog</h2>
			<p class="mt-2 text-lg/8">Learn how to grow your business with our expert advice.</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data as media}
				{@const image = media.image === '' ? '/media/fallback.png' : media.image}
				<article class="flex flex-col items-start justify-start">
					<div class="relative w-full">
						<img
							src={image}
							alt=""
							class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
						/>
						<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
					</div>
					<div class="max-w-xl">
						<div class="mt-8 flex items-center gap-x-4 text-xs">
							<Badge variant="secondary">{media.year}</Badge>
							<Badge variant="secondary">{media.type}</Badge>
						</div>
						<div class="group relative">
							<h3 class="mt-3 text-lg/6 font-semibold">
								<a class="underline" href={media.url}>
									<span class="absolute inset-0"></span>
									{media.title}
								</a>
							</h3>
							<p class="mt-5 line-clamp-3 text-sm/6 text-muted-foreground">
								{media.description}
							</p>
						</div>
						<div class="relative mt-4 flex items-center gap-x-4">
							<div class="text-sm/6">
								<p class="font-semibold text-muted-foreground">
									<span class="absolute inset-0"></span>
									{media.author}
								</p>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</div>
