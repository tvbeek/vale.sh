import { escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const themes = [
    'github-light',
    'slack-dark',
];

const highlighter = await createHighlighter({
    themes: themes,
    langs: [
        'json',
        'bash',
        'shell',
        'yaml',
        'plaintext',
        'properties',
        'dockerfile',
        'console',
        'rust',
    ]
});


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const html = escapeSvelte(highlighter.codeToHtml(code, {
                lang,
                themes: {
                    light: themes[0],
                    dark: themes[1],
                },
                transformers: [],
            }));
            return `{@html \`${html}\` }`;
        }
    },
    layout: './src/lib/mdsvex/wrapper.svelte'
};

export default mdsvexOptions;
