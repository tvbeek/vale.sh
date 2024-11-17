---
title: .vale.ini
description: Learn how to configure Vale for your specific needs.
---

<script>
    import Alert from '$lib/components/Alert.svelte';
</script>

## Creating a `.vale.ini` File

After installing Vale, you'll need to create a `.vale.ini` file in your
project's root directory. This file is used to configure Vale's behavior and
can be used to specify which rules to use, which directories to lint, and more.

The fastest way to get started with Vale is to use the
[Config Generator](/generator) to create a `.vale.ini` configuration file.

Once you have your local `.vale.ini` created in the directory of your choice,
run `vale sync` from the command line to initialize it:

```bash
$ cd some-project
# You'll need to create this file
$ cat .vale.ini
...
$ vale sync
...
$ ls styles
...
$ vale README.md
```

Check out our [sample repository][1] for a complete example of the required components of a Vale configuration.

## Search process

<Alert>
You can override the default search process by manually specifying a path using
the <a class="underline" href="/manual/config">--config</a> option or by defining a <code>VALE_CONFIG_PATH</code> environment variable.
</Alert>

Vale expects its configuration to be in a file named `.vale.ini` or
`_vale.ini`. It'll start looking for this file in the same folder as the file
that's being linted. If it can't find one, it'll search up the file tree.

If no ancestor of the current directory has a configuration file, Vale will
use a global configuration file (see below).

## Global configuration

In addition to project-specific configurations, Vale also supports a global
configuration file and `StylesPath`. The expected location of the global
configuration depends on your operating system:

| OS      | Search Locations                                   |
| :------ | :------------------------------------------------- |
| Windows | `%LOCALAPPDATA%\vale\.vale.ini`                    |
| macOS   | `$HOME/Library/Application Support/vale/.vale.ini` |
| Unix    | `$XDG_CONFIG_HOME/vale/.vale.ini`                  |

(Run the `vale ls-dirs` command to see the exact locations on your system.)

This is different from the other config-defining options (`--config`,
`VALE_CONFIG_PATH`, etc.) in that it's loaded in addition to, rather than
instead of, any other configuration sources.

In other words, this config file is _always_ loaded and is read after
any other sources to allow for project-agnostic customization.

[1]: https://github.com/errata-ai/vale-boilerplate
[2]: https://github.com/errata-ai/Microsoft
[3]: https://github.com/errata-ai/write-good
