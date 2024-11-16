<script lang="ts">
	import { tick } from 'svelte';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import { cn, createCopyCodeButton } from '$lib/utils.js';

	let className: string | undefined | null = undefined;
	export { className as class };

	const { copied, copyCode, codeString, setCodeString } = createCopyCodeButton();

	let preNode: HTMLPreElement;

	function handleCopy() {
		tick().then(() => {
			copyCode();
		});
	}
</script>

<pre
	bind:this={preNode}
	use:setCodeString
	class={cn(
		'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900',
		className
	)}
	{...$$restProps}>
	<slot />
</pre>
<CopyButton
	copied={$copied}
	copyCode={handleCopy}
	className={cn('pre-copy-btn absolute right-4 top-4')}
/>
