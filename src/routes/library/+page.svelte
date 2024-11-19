<script lang="ts">
	import Rocket from 'svelte-radix/Rocket.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as Popover from '$lib/components/ui/popover';
	import { onMount } from 'svelte';
	import data from '$lib/data/media.json';
	import { search as searchLambda } from '$lib/api';

	function getParts(id: string) {
		let tag = id.match(/title=(.+)&url=(.+)&author=(.+)&year=(.+)&type=(.+)/);
		return {
			title: tag[1],
			url: tag[2],
			author: tag[3],
			year: tag[4],
			type: tag[5]
		};
	}

	onMount(() => {
		const { autocomplete } = window['@algolia/autocomplete-js'];

		autocomplete({
			container: '#autocomplete',
			placeholder: 'Search topics or keywords',
			debug: false,
			defaultActiveItemId: 0,
			getSources({ query }) {
				return searchLambda(query)
					.then((response) => response.json())
					.then((data) => {
						return [
							{
								sourceId: 'predictions',
								getItemUrl({ item }) {
									return getParts(item.ID).url;
								},
								getItems() {
									return data || [];
								},
								templates: {
									noResults({ html }) {
										return html`<div class="prose dark:prose-invert">
											<h3 class="mt-0">No results found.</h3>
											<p>Try adjusting your search with a query string:</p>
											<ul>
												<li class="pb-1 pt-1">
													Faceted search: <code>date:>2021</code> or <code>author:jdkato</code>
												</li>
												<li class="pb-1 pt-1">
													Fuzzy search: <code>term~1</code> or <code>term~2</code>
												</li>
												<li class="pb-1 pt-1">
													Boosted search: <code>text:neovim title:neovim^5</code>
												</li>
												<li class="pb-1 pt-1">
													Regex search: <code>author:/(jdkato|another)/</code>
												</li>
											</ul>
										</div>`;
									},
									item({ item, html, createElement }) {
										const parsed = getParts(item.ID);
										const sample = createElement('p', {
											dangerouslySetInnerHTML: { __html: item.Fragment }
										});
										return html`<div class="card text-muted">
											<div class="card-body">
												<h5 class="card-title mt-0">${parsed.title}</h5>
												<p class="card-text pt-2"><small>${sample}</small></p>
												<a href="${parsed.url}" class="stretched-link" target="_blank"></a>
											</div>
											<div class="card-footer">
												<small class="text-muted">
													<span class="badge rounded-pill result-tag bg-secondary"
														><i class="fas fa-calendar"></i> ${parsed.year}</span
													>
													<span class="badge rounded-pill result-tag bg-secondary"
														><i class="fas fa-user"></i> ${parsed.author}</span
													>
													<span class="badge rounded-pill result-tag bg-secondary"
														><i class="fas fa-tag"></i> ${parsed.type}</span
													>
												</small>
											</div>
										</div>`;
									}
								}
							}
						];
					});
			}
		});
	});
</script>

<div class="bg-secondary py-6">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
				<Popover.Root>
					<Popover.Trigger>Go to <span class="underline">anything</span></Popover.Trigger>
					<Popover.Content class="prose prose-sm dark:prose-invert">
						<p>
							The Media Library is indexed daily and supports a variety of advaned search operators:
						</p>
						<ul class="list-disc">
							<li>Faceted search: <code>date:>2021</code> or <code>author:jdkato</code></li>
							<li>Fuzzy search: <code>term~1</code> or <code>term~2</code></li>
							<li>Boosted search: <code>text:neovim title:neovim^5</code></li>
							<li>Regex search: <code>author:/(jdkato|another)/</code></li>
						</ul>
					</Popover.Content>
				</Popover.Root>
				<Rocket class="inline-block h-8 w-8" />
			</h2>
			<form>
				<div class="mt-4">
					<div class="w-full" id="autocomplete"></div>
				</div>
				<p class="mt-2 text-center text-sm">
					The <i>Go to Anything</i> feature allows you to search the Media Library using a variety
					of
					<a
						class="underline"
						href="https://github.com/errata-ai/library/blob/main/README.md#searching"
						>search operators</a
					>.
				</p>
			</form>
		</div>
	</div>
</div>

<div class="py-12">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<!--<h3 class="text-balance text-4xl font-semibold tracking-tight sm:text-4xl">Media Library</h3>-->
			<p class="mt-2 text-lg/8 text-muted-foreground">
				The Media library is a collection of Vale-related resources to help you learn more about how
				how others are using Vale.
			</p>
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

<sytle> </sytle>
