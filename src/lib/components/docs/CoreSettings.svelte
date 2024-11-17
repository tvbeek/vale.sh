<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	let settings = [
		{
			name: 'StylesPath',
			link: 'docs/keys/stylespath',
			type: 'string',
			description: 'Path to all Vale-related resources.'
		},
		{
			name: 'Packages',
			link: 'docs/keys/packages',
			type: 'string[]',
			description: 'List of packages to download and install.'
		},
		{
			name: 'Vocab',
			link: 'docs/keys/vocab',
			type: 'string[]',
			description: 'List of vocabularies to load.'
		},
		{
			name: 'MinAlertLevel',
			link: 'docs/keys/minalertlevel',
			type: 'enum',
			description: 'Minimum alert level to display.'
		},
		{
			name: 'IgnoredScopes',
			link: 'docs/keys/ignoredscopes',
			type: 'enum',
			description: 'List of inline-level HTML tags to ignore.'
		},
		{
			name: 'SkippedScopes',
			link: 'docs/keys/skippedscopes',
			type: 'enum',
			description: 'List of block-level HTML tags to ignore.'
		}
	];
</script>

<Table.Root class="mt-4">
	<Table.Caption>All available core settings</Table.Caption>
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
