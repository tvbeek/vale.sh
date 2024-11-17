<script lang="ts">
	import TextEditor from '$lib/components/TextEditor.svelte';
	import SuperDebug from 'sveltekit-superforms';

	const API = 'https://vale-cascade-demo.vercel.app/config';

	let value1 = $state(`StylesPath = styles

MinAlertLevel = suggestion

[*]
BasedOnStyles = Vale`);

	let value2 = $state(`StylesPath = styles

MinAlertLevel = suggestion

[*]
BasedOnStyles = Vale`);

	let json = $state({
		BlockIgnores: {},
		Checks: null,
		Formats: {
			cc: 'md',
			mdx: 'md'
		},
		Asciidoctor: {},
		FormatToLang: {},
		GBaseStyles: null,
		GChecks: {},
		IgnoredClasses: null,
		IgnoredScopes: null,
		MinAlertLevel: 0,
		Vocab: ['Vale', 'Basic'],
		RuleToLevel: {},
		SBaseStyles: {
			'*.{md,adoc}': ['Test'],
			'README.md': ['Vale', 'Microsoft']
		},
		SChecks: {
			'*.{md,adoc}': {},
			'README.md': {}
		},
		SkippedScopes: null,
		Stylesheets: {},
		TokenIgnores: {},
		CommentDelimiters: {},
		WordTemplate: '',
		RootINI: '/Users/jdkato/Documents/Code/Go/vale/.vale.ini',
		Paths: ['/Users/jdkato/Library/Application Support/vale/styles', 'styles'],
		ConfigFiles: ['/Users/jdkato/Documents/Code/Go/vale/.vale.ini', '.vale.ini']
	});

	$effect(() => {
		// Post the configs to the API as JSON with CORS enabled:
		console.log(
			JSON.stringify({
				project: value1,
				local: value2
			})
		);
		fetch(API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify({
				project: value1,
				local: value2
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	});
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
	<SuperDebug data={json} status={false} />
</div>
