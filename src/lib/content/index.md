---
title: Introduction
description: Learn about what Vale is (and isn't).
---

<script lang="ts">
	import TechStack from '$lib/components/TechStack.svelte';
</script>

When you think about software built for automated writing assistance, a lot
of assumptions probably come to mind. You've heard terms like "cloud-based,"
"artificial intelligence," and "machine learning." You've been promised
"sophisticated," human-like feedback to dramatically improve your writing.

Vale is none of that&mdash;it wasn't designed to be, and it doesn't try to
be. To put it succinctly, Vale doesn't teach you _how to_ write; it's a tool
_for_ writers.

This distinction is particularly important to understand because Vale doesn't
offer any of its own advice. Instead, it offers a framework for creating and
enforcing [custom rules][1]. Its approach is much more similar to code linters than it is to traditional grammar checkers.

See "[Introducing Vale, an NLP-powered linter for prose][2]" for a more
detailed explanation.

## Why should you use Vale?

- It will enforce your own style and can go well beyond traditional
  writing-related rules.

- It understands [markup][4] well, allowing you to write your content in
  Markdown, AsciiDoc, reStructuredText, and more, without syntax-related false
  positives.

- It works 100% offline. Your content is never sent to a remote server for
  processing.

- [It's fast][6], and can be used pretty much anywhere: the terminal, your
  [favorite editor][7], [the web][8], or with a CI/CD service.

## What technologies does Vale use?

Vale is a 100% open-source, MIT-licensed project that consists of multiple
parts:

<TechStack />

## Who created Vale?

Hi, there!

I'm Joseph, or [@jdkato][9], the creator of Vale. I'm a
software engineer from Portland, Oregon, and I've been working on Vale since 2017.

If you have any questions, feedback, or just want to chat, feel free to reach
out to me on [X][9] or via email at [`joseph@jdkatio.io`](mailto:joseph@jdkatio.io).

If you'd like to support my open-source work, you can [sponsor me on GitHub][10]
or [Open Collective][11].

[1]: /docs/topics/styles/
[2]: https://medium.com/valelint/introducing-vale-an-nlp-powered-linter-for-prose-63c4de31be00?sk=959eb8ae72d4704c4b27c881bebf508c
[3]: https://vale.sh#users
[4]: /docs/topics/scoping/
[5]: https://docs.gitlab.com/ee/development/documentation/testing.html#vale
[6]: https://github.com/errata-ai/vale#benchmarks
[7]: /docs/integrations/guide/
[8]: /docs/integrations/chrome/
[9]: https://github.com/jdkato
[10]: https://github.com/sponsors/jdkato
[11]: https://opencollective.com/vale
