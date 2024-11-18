---
title: CLI
description: Learn about the Vale command-line interface.
---

<script lang="ts">
  import CLIOptions from "$lib/components/docs/CLIOptions.svelte";
  import Env from "$lib/components/docs/Env.svelte";
</script>

The Vale CLI is a powerful tool for linting your content in a variety of
formats. To get started, try running with no arguments:

```console
$ vale
vale - A command-line linter for prose.

Usage:  vale [options] [input...]
        vale myfile.md myfile1.md mydir1
        vale --output=JSON [input...]

<...>

See https://vale.sh for more setup information.

(Or use vale --help for a listing of all CLI options.)
```

## Environment variables

The following list of environment variables are supported by the `vale`
command-line interface:

<Env />

You can inspect the current environment variables by running:

```console
$ vale ls-vars
```

The exact steps for setting environment variables depend on your operating
system, but here are some useful links for [Windows][1] and [macOS][2].

## Options

### sync

<CLIOptions name="sync" />

The `sync` command downloads and installs all packages listed in your
`.vale.ini` file.

```console
$ vale sync
```

See the [Packages](/docs/packages) section for more information.

### ls-config

<CLIOptions name="ls-config" />

The `ls-config` command prints the current configuration options (as JSON) to
`stdout`.

```console
$ vale ls-config
```

### ls-metrics

<CLIOptions name="ls-config" />

## errors

[1]: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/setx
[2]: https://support.apple.com/guide/terminal/use-environment-variables-apd382cc5fa-4f58-4449-b20a-41c53c006f8f/mac
