<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { properties } from '@codemirror/legacy-modes/mode/properties';
	import { StreamLanguage, LanguageSupport } from '@codemirror/language';
	import { yaml } from '@codemirror/lang-yaml';
	import { EditorView } from '@codemirror/view';
	import { oneDark } from '@codemirror/theme-one-dark';

	const ini = new LanguageSupport(StreamLanguage.define(properties));

	let {
		mode,
		height,
		value = $bindable(),
		readonly
	}: { mode: 'yaml' | 'ini'; value: string; readonly: boolean; height: string } = $props();
	let language = mode === 'yaml' ? yaml() : ini;

	// Custom theme to disable line highlighting
	const noLineHighlightTheme = EditorView.theme({
		'.cm-line': {
			backgroundColor: 'transparent !important'
		},
		'.cm-editor': {},
		'.cm-scroller': {
			overflow: 'auto',
			'min-height': height,
			'max-height': height
		}
	});
</script>

<CodeMirror
	bind:value
	lang={language}
	theme={[oneDark, noLineHighlightTheme]}
	{readonly}
	class="h-full"
/>
