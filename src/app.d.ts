// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare module '*.md' {
    import type { SvelteComponent } from 'svelte'

    export default class Comp extends SvelteComponent { }

    export const metadata: Record<string, unknown>
}

// export {};
// ensure this is not an ambient module, else types will be overridden instead of augmented
