<script lang="ts">
	import TextEditor from '$lib/components/TextEditor.svelte';
	import SuperDebug from 'sveltekit-superforms';

	let value1 = $state(`StylesPath = styles

MinAlertLevel = suggestion

[*]
BasedOnStyles = Vale`);

	let value2 = $state(`StylesPath = styles

MinAlertLevel = suggestion

[*]
BasedOnStyles = Vale`);

	let json = {
		StylesPath: 'styles',
		MinAlertLevel: 'suggestion',
		'[*]': {
			BasedOnStyles: 'Vale'
		}
	};
</script>

<div>
	<div class="mb-1 mt-4 grid grid-cols-1 gap-1 md:grid-cols-2">
		<div>
			<p class="text-xs text-muted-foreground">Project config</p>
			<TextEditor readonly={false} mode="ini" bind:value={value1} />
		</div>
		<div class="hidden md:block">
			<p class="text-xs text-muted-foreground">Global config</p>
			<TextEditor readonly={false} mode="ini" bind:value={value2} />
		</div>
	</div>
	<SuperDebug data={json} class="" />
</div>
