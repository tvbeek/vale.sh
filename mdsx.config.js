import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from 'mdsx';
import { visit } from "unist-util-visit";
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { getHighlighter } from "shiki";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * @type {import('rehype-pretty-code').Options}
 */
const prettyCodeOptions = {
    theme: JSON.parse(String(readFileSync(resolve(__dirname, "./rehype/themes/dark.json")))),
    getHighlighter: (options) =>
        getHighlighter({
            ...options,
            langs: [
                "plaintext",
                import("shiki/langs/javascript.mjs"),
                import("shiki/langs/typescript.mjs"),
                import("shiki/langs/css.mjs"),
                import("shiki/langs/svelte.mjs"),
                import("shiki/langs/shellscript.mjs"),
                import("shiki/langs/markdown.mjs"),
            ],
        }),
    keepBackground: false,
    onVisitLine(node) {
        if (node.children.length === 0) {
            // @ts-expect-error - we're changing the node type
            node.children = { type: "text", value: " " };
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className = ["line--highlighted"];
    },
    onVisitHighlightedChars(node) {
        node.properties.className = ["chars--highlighted"];
    },
};


export const mdsxConfig = defineConfig({
    extensions: ['.md'],
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypePreData, [rehypePrettyCode, prettyCodeOptions]],
    blueprints: {
        default: {
            path: "src/lib/components/markdown/blueprint.svelte",
        },
    },
});
/**
 *
 * @returns {HastTransformer} - Unified Transformer
 */
function rehypePreData() {
    return (tree) => {
        visit(tree, (node) => {
            if (node?.type === "element" && node?.tagName === "pre") {
                const [codeEl] = node.children;
                if (codeEl.type !== "element") return;
                if (codeEl.tagName !== "code") return;

                if (
                    codeEl.data &&
                    "meta" in codeEl.data &&
                    codeEl.data.meta &&
                    typeof codeEl.data.meta === "string"
                ) {
                    // Extract event from meta and pass it down the tree.
                    const regex = /event="([^"]*)"/;
                    const match = codeEl.data?.meta.match(regex);
                    if (match) {
                        // @ts-expect-error - this is fine
                        node.__event__ = match ? match[1] : null;
                        codeEl.data.meta = codeEl.data.meta.replace(regex, "");
                    }
                }

                // @ts-expect-error - this is fine
                node.__rawString__ = codeEl.children?.[0].value;
                // @ts-expect-error - this is fine
                node.__src__ = node.properties?.__src__;
                // @ts-expect-error - this is fine
                node.__style__ = node.properties?.__style__;
            }
        });
    };
}

