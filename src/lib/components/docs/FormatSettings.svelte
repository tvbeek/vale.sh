<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	let settings = [
		{
			name: 'BasedOnStyles',
			link: 'docs/keys/basedonstyles',
			type: 'string[]',
			description: 'List of styles to load.'
		},
		{
			name: 'BlockIgnores',
			link: 'docs/keys/blockignores',
			type: 'string[]',
			description: 'List regexes to ignore in block-level content.'
		},
		{
			name: 'TokenIgnores',
			link: 'docs/keys/tokenignores',
			type: 'string[]',
			description: 'List regexes to ignore in inline-level content.'
		},
		{
			name: 'CommentDelimiters',
			link: 'docs/keys/commentdelimiters',
			type: 'string[2]',
			description: 'Comment delimiters to replace at runtime.'
		},
		{
			name: 'Transform',
			link: 'docs/keys/transform',
			type: 'string',
			description: 'A version 1.0 XSL Transformation (XSLT).'
		}
	];
</script>

<Table.Root class="mt-4">
	<Table.Header>
		<Table.Row>
			<Table.Head>Name</Table.Head>
			<Table.Head>Type</Table.Head>
			<Table.Head>Description</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each settings as setting}
			<Table.Row>
				<Table.Head><a class="underline" href={setting.link}>{setting.name}</a></Table.Head>
				<Table.Head><code>{setting.type}</code></Table.Head>
				<Table.Head>{setting.description}</Table.Head>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
