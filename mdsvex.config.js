import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import { addCopyButton } from 'shiki-transformer-copy-button'

const theme = 'github-dark';

// optional
const options = {
    // delay time from "copied" state back to normal state
    toggle: 2000,
}

const highlighter = await createHighlighter({
    themes: [theme],
    langs: [
        'json',
        'bash',
        'shell',
        'yaml',
        'plaintext',
        'properties',
        'dockerfile',
        'console',
    ]
});


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const html = escapeSvelte(highlighter.codeToHtml(code, {
                lang,
                theme,
                transformers: [
                    addCopyButton(options)
                ]
            }));
            return `{@html \`${html}\` }`;
        }
    },
    layout: './src/lib/mdsvex/wrapper.svelte'
};

export default mdsvexOptions;
