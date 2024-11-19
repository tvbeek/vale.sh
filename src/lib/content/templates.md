---
title: Templates
description: Learn about Vale's output templates.
---

<script lang="ts">
  import CLIOptions from "$lib/components/docs/CLIOptions.svelte";
  import Env from "$lib/components/docs/Env.svelte";
  import Errors from "$lib/components/docs/Errors.svelte";
</script>

By default, Vale includes support for three output styles: `line`, `JSON`, and
`CLI` (the default). You can specify which style to use via the `--output`
flag:

```bash
$ vale --output=line README.md
```
