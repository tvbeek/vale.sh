<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Pre from '$lib/components/markdown/pre.svelte';
</script>

{#snippet choco()}
	<code data-language="bash" data-theme="Lambda Studio — Blackout" style="display: grid;">
		<span data-line>{`choco install vale`}</span>
	</code>
{/snippet}

{#snippet brew()}
	<code data-language="bash" data-theme="Lambda Studio — Blackout" style="display: grid;">
		<span data-line>{`brew install vale`}</span>
	</code>
{/snippet}

{#snippet snap()}
	<code data-language="bash" data-theme="Lambda Studio — Blackout" style="display: grid;">
		<span data-line>{`snap install vale`}</span>
	</code>
{/snippet}

<Tabs.Root value="win" class="relative mt-6 w-full">
	<Tabs.List class="">
		<Tabs.Trigger value="win">Windows</Tabs.Trigger>
		<Tabs.Trigger value="mac">macOS</Tabs.Trigger>
		<Tabs.Trigger value="linux">Linux</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content
		value="win"
		class="relative mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold"
		><figure data-rehype-pretty-code-figure class="m-0 p-0">
			<Pre className="px-4" children={choco} />
			<figcaption class="text-center text-xs">
				See <a class="underline" href="https://community.chocolatey.org/packages/vale">Chocolatey</a
				> for more information.
			</figcaption>
		</figure></Tabs.Content
	>
	<Tabs.Content
		value="mac"
		class="relative mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold"
		><figure data-rehype-pretty-code-figure>
			<Pre className="px-4" children={brew} />
			<figcaption class="text-center text-xs">
				See <a class="underline" href="https://formulae.brew.sh/formula/vale">Homebrew</a> for more information.
			</figcaption>
		</figure>
	</Tabs.Content>
	<Tabs.Content
		value="linux"
		class="relative mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold"
		><figure data-rehype-pretty-code-figure>
			<Pre className="px-4" children={snap} />
			<figcaption class="text-center text-xs">
				See <a class="underline" href="https://github.com/errata-ai/vale-snap">Snapscraft</a> for more
				information.
			</figcaption>
		</figure></Tabs.Content
	>
</Tabs.Root>
