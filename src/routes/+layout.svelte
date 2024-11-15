<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher />
<SiteHeader />
{@render children()}
