---
title: Styles
description: Learn about the primary component of Vale's configuration system.
---

Vale has a powerful extension system that doesn't require knowledge of
any programming language. Instead, it uses collections of individual
[YAML](http://yaml.org) files (or "rules") to enforce particular writing
constructs.

```yaml
# An example rule from the "Microsoft" style.
extends: existence
message: "Don't use end punctuation in headings."
link: https://docs.microsoft.com/en-us/style-guide/punctuation/periods
nonword: true
level: warning
scope: heading
action:
  name: edit
  params:
    - remove
    - '.?!'
tokens:
  - '[a-z0-9][.?!](?:\s|$)'
```

These collections are referred to as _styles_ and are organized in a
nested folder structure at a user-specified location. For example,

```yaml
styles/
├── base/
│   ├── ComplexWords.yml
│   ├── SentenceLength.yml
│   ...
├── blog/
│   ├── TechTerms.yml
│   ...
└── docs/
├── Branding.yml
```
