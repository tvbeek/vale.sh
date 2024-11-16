<script lang="ts">
	let { content, name, title }: { content: string; name: string; title: string } = $props();
</script>

<section class="px-6 py-24 sm:py-32 lg:px-8">
	<figure class="mx-auto max-w-2xl">
		<blockquote class="mt-10 text-sm font-semibold tracking-tight">
			<p>
				{content}
			</p>
		</blockquote>
		<figcaption class="mt-10 flex items-center gap-x-6">
			<div class="text-sm/6">
				<div class="font-semibold">{name}</div>
				<div class="mt-0.5">{title}</div>
			</div>
		</figcaption>
	</figure>
</section>
