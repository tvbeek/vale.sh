import type { NavItem, SidebarNavItem } from "$lib/types/nav";

type DocsConfig = {
    mainNav: NavItem[];
    sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Docs",
            href: "/docs",
        },
        {
            title: "Vale Studio",
            href: "https://studio.vale.sh",
            external: true,
        },
        {
            title: "Config Generator",
            href: "/generator",
        },
        {
            title: "Package Hub",
            href: "/hub",
        },
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs",
                    items: [],
                },
                {
                    title: "Install",
                    href: "/docs/install",
                    items: [],
                },
                {
                    title: ".vale.ini",
                    href: "/docs/vale-ini",
                    items: [],
                },
                {
                    title: "CLI",
                    href: "/docs/cli",
                    items: [],
                },
                {
                    title: "Styles",
                    href: "/docs/styles",
                    items: [],
                },
                {
                    title: "Scopes",
                    href: "/docs/scopes",
                    items: [],
                },
                {
                    title: "Vocabularies",
                    href: "/docs/vocabularies",
                    items: [],
                },
                {
                    title: "Packages",
                    href: "/docs/packages",
                    items: [],
                },
                {
                    title: "Filters",
                    href: "/docs/filters",
                    items: [],
                },
                {
                    title: "Templates",
                    href: "/docs/templates",
                    items: [],
                },
                {
                    title: "FAQ",
                    href: "/docs/faq",
                    items: [],
                },
                {
                    title: "Support ❤️",
                    href: "/docs/support",
                    items: [],
                },
                {
                    title: "Media",
                    href: "/docs/media",
                    items: [],
                },
                {
                    title: "Glossary",
                    href: "/docs/glossary",
                    items: [],
                },
            ],
        },
        {
            title: "Settings",
            items: [
                {
                    title: "StylesPath",
                    href: "/docs/keys/stylespath",
                    items: [],
                },
                {
                    title: "Packages",
                    href: "/docs/keys/packages",
                    items: [],
                },
                {
                    title: "Vocab",
                    href: "/docs/keys/vocab",
                    items: [],
                },
                {
                    title: "MinAlertLevel",
                    href: "/docs/keys/minalertlevel",
                    items: [],
                },
                {
                    title: "IgnoredScopes",
                    href: "/docs/keys/ignoredscopes",
                    items: [],
                },
                {
                    title: "IgnoredClasses",
                    href: "/docs/keys/ignoredclasses",
                    items: [],
                },
                {
                    title: "SkippedScopes",
                    href: "/docs/keys/skippedscopes",
                    items: [],
                },
                {
                    title: "BasedOnStyles",
                    href: "/docs/keys/basedonstyles",
                    items: [],
                },
                {
                    title: "BlockIgnores",
                    href: "/docs/keys/blockignores",
                    items: [],
                },
                {
                    title: "TokenIgnores",
                    href: "/docs/keys/tokenignores",
                    items: [],
                },
                {
                    title: "CommentDelimiters",
                    href: "/docs/keys/commentdelimiters",
                    items: [],
                },
                {
                    title: "Transform",
                    href: "/docs/keys/transform",
                    items: [],
                },
            ]
        },
        {
            title: "Rules",
            items: [
                {
                    title: "existence",
                    href: "/docs/ext/existence",
                    items: [],
                },
                {
                    title: "substitution",
                    href: "/docs/ext/substitution",
                    items: [],
                },
                {
                    title: "occurrence",
                    href: "/docs/ext/occurrence",
                    items: [],
                },
                {
                    title: "repetition",
                    href: "/docs/ext/repetition",
                    items: [],
                },
                {
                    title: "consistency",
                    href: "/docs/ext/consistency",
                    items: [],
                },
                {
                    title: "conditional",
                    href: "/docs/ext/conditional",
                    items: [],
                },
                {
                    title: "capitalization",
                    href: "/docs/ext/capitalization",
                    items: [],
                },
                {
                    title: "metric",
                    href: "/docs/ext/metric",
                    items: [],
                },
                {
                    title: "spelling",
                    href: "/docs/ext/spelling",
                    items: [],
                },
                {
                    title: "sequence",
                    href: "/docs/ext/sequence",
                    items: [],
                },
                {
                    title: "script",
                    href: "/docs/ext/script",
                    items: [],
                },
            ],
        },
        {
            title: "Actions",
            items: [
                {
                    title: "suggest",
                    href: "/docs/actions/suggest",
                    items: [],
                },
                {
                    title: "replace",
                    href: "/docs/actions/replace",
                    items: [],
                },
                {
                    title: "remove",
                    href: "/docs/actions/remove",
                    items: [],
                },
                {
                    title: "edit",
                    href: "/docs/actions/edit",
                    items: [],
                },
            ],
        },
        {
            title: "Formats",
            items: [
                {
                    title: "Markdown",
                    href: "/docs/formats/markdown",
                    items: [],
                },
                {
                    title: "AsciiDoc",
                    href: "/docs/formats/asciidoc",
                    items: [],
                },
                {
                    title: "HTML",
                    href: "/docs/formats/html",
                    items: [],
                },
                {
                    title: "reStructuredText",
                    href: "/docs/formats/rst",
                    items: [],
                },
                {
                    title: "XML",
                    href: "/docs/formats/xml",
                    items: [],
                },
                {
                    title: "Org",
                    href: "/docs/formats/org",
                    items: [],
                },
                {
                    title: "DITA",
                    href: "/docs/formats/dita",
                    items: [],
                },
                {
                    title: "code",
                    href: "/docs/formats/code",
                    items: [],
                },
            ],
        },
        {
            title: "Intergrations",
            items: [
                {
                    title: "Overview",
                    href: "/docs/integrations/overview",
                    items: [],
                },
                {
                    title: "CircleCI",
                    href: "https://circleci.com/developer/orbs/orb/circleci/vale",
                    external: true,
                    items: [],
                },
                {
                    title: "Emacs",
                    href: "https://github.com/tpeacock19/flymake-vale",
                    external: true,
                    items: [],
                },
                {
                    title: "GitHub Actions",
                    href: "https://github.com/errata-ai/vale-action",
                    external: true,
                    items: [],
                },
                {
                    title: "Git Hooks",
                    href: "https://pre-commit.com",
                    external: true,
                    items: [],
                },
                {
                    title: "JetBrains",
                    href: "/docs/apps/jetbrains",
                    items: [],
                },
                {
                    title: "Laravel",
                    href: "https://github.com/beyondcode/laravel-prose-linter",
                    external: true,
                    items: [],
                },
                {
                    title: "Obsidian",
                    href: "https://github.com/marcusolsson/obsidian-vale",
                    external: true,
                    items: [],
                },
                {
                    title: "Oxygen XML",
                    href: "https://www.oxygenxml.com/doc/versions/23.1/ug-editor/topics/vale-linter-addon.html",
                    items: [],
                },
                {
                    title: "Sublime Text",
                    href: "https://packagecontrol.io/packages/LSP-vale-ls",
                    external: true,
                    items: [],
                },
                {
                    title: "Vim/Neovim",
                    href: "https://github.com/dense-analysis/ale",
                    external: true,
                    items: [],
                },
                {
                    title: "VS Code",
                    href: "https://github.com/chrischinchilla/vale-vscode",
                    external: true,
                    items: [],
                },
                {
                    title: "Zed",
                    href: "https://github.com/koozz/zed-vale",
                    external: true,
                    items: [],
                },
            ],
        },
        {
            title: "Guides",
            items: [
                {
                    title: "LSP",
                    href: "/docs/guides/lsp",
                    items: [],
                },
                {
                    title: "Regex",
                    href: "/docs/guides/regex",
                    items: [],
                },
            ],
        },
    ],
};

type Example = {
    name: string;
    href: string;
    label?: string;
    code: string;
};
export const examples: Example[] = [];
