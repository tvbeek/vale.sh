<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { mode } from 'mode-watcher';
	import { onMount } from 'svelte';

	let colors = '';
	onMount(() => {
		mode.subscribe((value) => {
			colors =
				value == 'dark'
					? 'background-color:#222222;color:#E6E6E6;'
					: 'background-color:#FFF;color:#333333;';
		});
	});
</script>

<Tabs.Root value="win" class="">
	<Tabs.List>
		<Tabs.Trigger value="win">Windows</Tabs.Trigger>
		<Tabs.Trigger value="mac">macOS</Tabs.Trigger>
		<Tabs.Trigger value="linux">Linux</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="win">
		<pre class="mb-0" style={colors}><code>choco install vale</code></pre>
		<p class="text-center text-xs text-muted-foreground">
			See <a href="https://chocolatey.org/packages/vale" target="_blank" rel="noopener"
				>chocolatey.org/packages/vale</a
			>
			for more information.
		</p>
	</Tabs.Content>
	<Tabs.Content value="mac">
		<pre class="mb-0" style={colors}>brew install vale</pre>
		<p class="text-center text-xs text-muted-foreground">
			See <a href="https://formulae.brew.sh/formula/vale" target="_blank" rel="noopener"
				>formulae.brew.sh/formula/vale</a
			>
			for more information.
		</p>
	</Tabs.Content>
	<Tabs.Content value="linux">
		<pre class="mb-0" style={colors}>snap install vale</pre>
		<p class="text-center text-xs text-muted-foreground">
			See <a href="https://snapcraft.io/vale" target="_blank" rel="noopener">snapcraft.io/vale</a>
			for more information.
		</p>
	</Tabs.Content>
</Tabs.Root>
