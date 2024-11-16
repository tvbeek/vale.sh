import { defineConfig } from 'mdsx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkCapitalize from 'remark-capitalize';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeToc from 'rehype-toc';

export const mdsxConfig = defineConfig({
    extensions: ['.md'],
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    blueprints: {
        default: {
            rehypePlugins: [rehypePrettyCode],
            path: "src/lib/components/markdown/blueprint.svelte",
        },
    },
});
