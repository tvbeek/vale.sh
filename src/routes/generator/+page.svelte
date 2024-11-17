<script lang="ts">
	import SuperDebug, { type Infer, type SuperValidated, superForm } from 'sveltekit-superforms';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import { Label } from '$lib/components/ui/label';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import CodeMirror from 'svelte-codemirror-editor';
	import { properties } from '@codemirror/legacy-modes/mode/properties';
	import { StreamLanguage, LanguageSupport } from '@codemirror/language';

	const propertiesLanguage = new LanguageSupport(StreamLanguage.define(properties));

	const configs = [
		{
			value: 'hugo',
			label: 'Hugo'
		},
		{
			value: 'mdx',
			label: 'MDX'
		},
		{
			value: 'svelte',
			label: 'Svelte'
		}
	];

	const supplementaryStyles = [
		{
			value: 'proselint',
			label: 'proselint'
		},
		{
			value: 'write-good',
			label: 'write-good'
		},
		{
			value: 'alex',
			label: 'alex'
		},
		{
			value: 'joblint',
			label: 'Joblint'
		}
	];

	const baseStyles = [
		{
			value: 'microsoft',
			label: 'Microsoft Writing Style Guide'
		},
		{
			value: 'google',
			label: 'Google Developer Documentation Style Guide'
		},
		{
			value: 'redhat',
			label: 'Red Hat Documentation Style Guide'
		}
	];

	let baseStyle = $state('');
	const baseLabel = $derived(
		baseStyles.find((f) => f.value === baseStyle)?.label ?? 'Select a style guide'
	);

	let selectedStyles = $state(['']);
	let selectedConfigs = $state(['']);

	let value = '';
</script>

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
	<Card.Root>
		<Card.Header class="text-center">
			<Card.Title>Config Generator</Card.Title>
			<Card.Description
				>Quickly generate comprehensive configuration files for Vale.</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<form>
				<div class="grid w-full items-center gap-4">
					<div class="flex flex-col space-y-1.5">
						<Label for="base">Base style</Label>
						<Select.Root type="single" bind:value={baseStyle}>
							<Select.Trigger id="base">
								{baseLabel}
							</Select.Trigger>
							<Select.Content>
								{#each baseStyles as base}
									<Select.Item value={base.value} label={base.label} />
								{/each}
							</Select.Content>
						</Select.Root>
					</div>
					<div class="grid grid-cols-1 gap-4">
						<div class="flex flex-col space-y-1.5">
							<div class="mb-2">
								<Label for="supplementary">Supplementary styles</Label>
							</div>
							<div class="space-y-2">
								{#each supplementaryStyles as item, i}
									{@const checked = selectedStyles.includes(item.value)}
									<div class="flex flex-row items-start space-x-3">
										<Checkbox
											id="style-{i}"
											{checked}
											value={item.value}
											onCheckedChange={(v) => {
												if (v) {
													selectedStyles = [...selectedStyles, item.value];
												} else {
													selectedStyles = selectedStyles.filter((s) => s !== item.value);
												}
											}}
										/>
										<Label
											for="style-{i}"
											class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											{item.label}
										</Label>
									</div>
								{/each}
							</div>
						</div>
						<div class="flex flex-col space-y-1.5">
							<div class="mb-2">
								<Label for="supplementary">Configurations</Label>
							</div>
							<div class="space-y-2">
								{#each configs as item, i}
									{@const checked = selectedConfigs.includes(item.value)}
									<div class="flex flex-row items-start space-x-3">
										<Checkbox
											id="config-{i}"
											{checked}
											value={item.value}
											onCheckedChange={(v) => {
												if (v) {
													selectedConfigs = [...selectedConfigs, item.value];
												} else {
													selectedConfigs = selectedConfigs.filter((s) => s !== item.value);
												}
											}}
										/>
										<Label
											for="config-{i}"
											class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											{item.label}
										</Label>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</form>
		</Card.Content>
		<Card.Footer class="w-100 border-t-2 border-solid p-0">
			<div class="w-full">
				<CodeMirror bind:value lang={propertiesLanguage} />
			</div>
		</Card.Footer>
	</Card.Root>
</div>
