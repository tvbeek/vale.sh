<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	let options = [
		{
			name: 'sync',
			params: 'N/A',
			type: 'command',
			usage: 'Download and install packages.'
		},
		{
			name: 'ls-config',
			params: 'N/A',
			type: 'command',
			usage: 'Print the current configuration.'
		},
		{
			name: 'ls-metrics',
			params: 'string',
			type: 'command',
			usage: 'Print the metrics for a given file.'
		}
	];

	let { name }: { name: string } = $props();
	let opt = options.filter((option) => option.name === name)[0];
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Name</Table.Head>
			<Table.Head>Type</Table.Head>
			<Table.Head>Params</Table.Head>
			<Table.Head>Description</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		<Table.Row>
			<Table.Head>{opt.name}</Table.Head>
			<Table.Head><code>{opt.type}</code></Table.Head>
			<Table.Head><code>{opt.params}</code></Table.Head>
			<Table.Head>{opt.usage}</Table.Head>
		</Table.Row>
	</Table.Body>
</Table.Root>
