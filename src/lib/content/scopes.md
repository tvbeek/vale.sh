---
title: Scopes
description: Learn about Vale's advanced markup-specific scoping system.
---

<script lang="ts">
    import Alert from '$lib/components/Alert.svelte';
    import Scopes from '$lib/components/docs/Scopes.svelte';
</script>

Vale is "markup aware," which means that it's capable of both applying rules to
and ignoring certain sections of text. This functionality is implemented
through a scoping system.

A scope is specified through a selector such as `paragraph.rst`, which
indicates that the rule applies to all paragraphs in reStructuredText files.

Here are a few examples:

- `comment` matches all source code comments;
- `comment.line` matches all source code line comments;
- `heading.md` matches all Markdown headings; and
- `text.html` matches all HTML scopes.

Vale classifies files into one of three
types&mdash;`markup`, `code`, or `text`&mdash;that determines what scopes are
available.

Within each type, there can be multiple supported _formats_&mdash;such as
Markdown and AsciiDoc under `markup`. Since each format has access to the same
scopes, rules are compatible across all formats within a particular type.

## Markup

The default behavior for markup files is to apply rules to all non-ignored
sections of the file. This means that for most rules you don't need to specify
a scope.

For rules that need to target specific sections of the file, you can use the
following scopes:

<Scopes />

## Code

## Text
