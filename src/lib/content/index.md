---
title: Introduction
description: Learn about what Vale is (and isn't).
---

<script lang="ts">
	import TechStack from '$lib/components/TechStack.svelte';
</script>

Vale is a command-line tool that brings code-like linting to prose. Vale is
cross-platform (Windows, macOS, and Linux), written in Go, and available on
GitHub.

> _Linting_ is the process of ensuring that written work (source code or prose)
> adheres to a particular style&mdash;for example, Python's [PEP 8][12] style
> guide (code) or the Google's [Documentation Style Guide][13] (prose).

Before we get into the details of what makes Vale useful, there's one point we
need to clarify: **Vale is not a general-purpose writing aid**.

It doesn't teach you _how_ to write; it's a tool _for_ writers.

More specifically, Vale focuses (primarily) on the style of writing rather than
its grammatical correctness&mdash;making it fundamentally different from,
for example, Grammarly.

![A diagram demonstrating Vale's purpose.](/media/flow.png)

In other words, Vale focuses on ensuring consistency across multiple authors
(according to customizable guidelines) rather than the general
"correctness" of a single author's work.

This distinction is particularly important to understand because Vale doesn't
offer any of its own advice. Instead, it offers a framework for creating and
enforcing [custom rules][1]. Its approach is much more similar to code linters
than it is to traditional grammar checkers.

## Your style, our editor

One of Vale's most important features is its ability to support external styles
through its extension system, which only requires some familiarity with the
YAML file format (and, optionally, regular expressions).

![A diagram comparing Vale to other tools.](/media/output.png)

To get a better idea of how this works, let's look at an example from the
[Linode documentation][14]:

```yaml
# `extends` specifies the extension point you're using. Here, we're
# using `substitution` to ensure correct usage of some techincal and
# brand-specifc terminology.
extends: substitution
# `message` allows you to customize the output shown to your users.
message: Use '%s' instead of '%s'.
# We're setting this rule's severity to `error`, which will cause
# CI builds to fail.
level: error
# We're using case-insensitive patterns.
ignorecase: true
swap:
  "(?:LetsEncrypt|Let's Encrypt)": Let's Encrypt
  'node[.]?js': Node.js
  'Post?gr?e(?:SQL)': PostgreSQL
  'java[ -]?scripts?': JavaScript
  linode cli: Linode CLI
  linode manager: Linode Manager
  linode: Linode
  longview: Longview
  nodebalancer: NodeBalancer
```

In the above example, we've defined a few terms that have a particular
capitalization style. If Vale finds an instance of a term that matches a
pattern on the left of swap (case-insensitive) but doesn’t exactly match the
value on the right, it issues an error. So, for example, `Nodebalancer`,
`nodebalancer` or any other variation that doesn't exactly match `NodeBalancer`
will be flagged as an error.

While this example may appear quite simple, it's possible to achieve fairly
high coverage on complete editorial style guides. Check out the
[Package Hub][/hub] for more examples.

## Syntax- and context-aware linting

Another feature that separates Vale from other linters is its ability to
understand its input at both a syntactic and contextual level.

![A diagram showcases Vale's ability to understand markup.](/media/syntax.png)

This level of understanding gives you fine-grained control over the linting
process, including the ability to limit rules to certain sections
(e.g., only headings) or ignore sections entirely (block and inline code are
ignored by default).

Additionally, since Vale is built on top of an NLP library, you can also target
specific segments of text&mdash;allowing you to, for example, warn about
paragraphs that exceed a certain number of words or sentences that end with
prepositions.

## Sub-second performance

Vale is designed to be fast enough to be included in continuous integration
test suites for large (> 1,000 files) repositories. To give you an idea of its
performance, we ran Vale on three GitHub repositories of varying sizes and
formats:

| GitHub Repo                                                              | Format           | Files | Average Size (lines) | 5-Run Average (seconds) |
| ------------------------------------------------------------------------ | ---------------- | ----- | -------------------- | ----------------------- |
| [linode / docs](https://github.com/linode/docs)                          | Markdown         | 1,067 | 189.376              | 23.713                  |
| [nltk / nltk_book](https://github.com/nltk/nltk_book)                    | reStructuredText | 43    | 833.372              | 18.662                  |
| [clojure-cookbook](https://github.com/clojure-cookbook/clojure-cookbook) | AsciiDoc         | 196   | 128.408              | 15.237                  |

In each case, Vale was configured to lint against its `write-good` style. As
you can see, it took an approximate average of only 0.0441 seconds to lint each
file.

See the project's [README][15] for a comparison with other tools.

## Tech stack

Vale is a 100% open-source, MIT-licensed project that consists of multiple
parts:

<TechStack />

## Meet the creator

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
[12]: https://www.python.org/dev/peps/pep-0008/
[13]: https://developers.google.com/style/
[14]: https://github.com/linode/docs/blob/master/ci/vale/styles/Linode/Terms.yml
[15]: https://github.com/errata-ai/vale?tab=readme-ov-file#benchmarks
