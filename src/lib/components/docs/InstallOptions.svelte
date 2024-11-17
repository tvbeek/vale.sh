<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Pre from '$lib/components/markdown/pre.svelte';
</script>

{#snippet choco()}
	<code data-language="shell" data-theme="Lambda Studio — Blackout" style="display: grid;">
		<span data-line>
			<span style="color:#FFF;font-weight:bold">choco</span>
			<span style="color:#FFF8"> install</span>
			<span style="color:#FFF8"> vale</span>
		</span>
	</code>
{/snippet}

{#snippet brew()}
	<code data-language="shell" data-theme="Lambda Studio — Blackout" style="display: grid;">
		<span data-line>
			<span style="color:#FFF;font-weight:bold">brew</span>
			<span style="color:#FFF8"> install</span>
			<span style="color:#FFF8"> vale</span>
		</span>
	</code>
{/snippet}

{#snippet snap()}
	<code data-language="shell" data-theme="Lambda Studio — Blackout" style="display: grid;">
		<span data-line>
			<span style="color:#FFF;font-weight:bold">snap</span>
			<span style="color:#FFF8"> install</span>
			<span style="color:#FFF8"> vale</span>
		</span>
	</code>
{/snippet}

<Tabs.Root value="win" class="relative mt-6 w-full">
	<Tabs.List class="">
		<Tabs.Trigger value="win">Windows</Tabs.Trigger>
		<Tabs.Trigger value="mac">macOS</Tabs.Trigger>
		<Tabs.Trigger value="linux">Linux</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="win"
		><figure data-rehype-pretty-code-figure class="m-0 p-0">
			<Pre className="px-4" children={choco} />
			<figcaption class="text-center text-xs">
				See <a class="underline" href="https://community.chocolatey.org/packages/vale">Chocolatey</a
				> for more information.
			</figcaption>
		</figure></Tabs.Content
	>
	<Tabs.Content value="mac"
		><figure data-rehype-pretty-code-figure>
			<Pre className="px-4" children={brew} />
			<figcaption class="text-center text-xs">
				See <a class="underline" href="https://formulae.brew.sh/formula/vale">Homebrew</a> for more information.
			</figcaption>
		</figure>
	</Tabs.Content>
	<Tabs.Content value="linux"
		><figure data-rehype-pretty-code-figure>
			<Pre className="px-4" children={snap} />
			<figcaption class="text-center text-xs">
				See <a class="underline" href="https://github.com/errata-ai/vale-snap">Snapscraft</a> for more
				information.
			</figcaption>
		</figure></Tabs.Content
	>
</Tabs.Root>
