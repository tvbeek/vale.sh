<script lang="ts">
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import { siteConfig } from '$lib/config/site.js';
</script>

<p
	class="bg-orange-400 py-1.5 text-center text-sm font-medium text-black dark:bg-orange-700 dark:text-white"
>
	Help Vale grow by supporting us on
	<a
		href={siteConfig.links.sponsors}
		target="_blank"
		class="inline-flex items-center font-semibold underline-offset-2 hover:underline"
	>
		GitHub
		<ArrowUpRight class="ml-0.5 h-3 w-3" />
	</a>
	or
	<a
		href={siteConfig.links.openCollective}
		target="_blank"
		class="inline-flex items-center font-semibold underline-offset-2 hover:underline"
	>
		Open Collective
		<ArrowUpRight class="ml-0.5 h-3 w-3" />
	</a>
	!
</p>
