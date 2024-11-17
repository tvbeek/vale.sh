---
title: .vale.ini
description: Learn how to configure Vale for your specific needs.
---

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

[1]: https://github.com/errata-ai/vale-boilerplate
[2]: https://github.com/errata-ai/Microsoft
[3]: https://github.com/errata-ai/write-good
