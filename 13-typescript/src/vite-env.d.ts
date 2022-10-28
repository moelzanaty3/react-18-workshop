/// <reference types="vite/client" />

/**
 * <-- https://stackoverflow.com/a/48216311/6483379 -->
 * /// => These are referred to as "Triple Slash Directives" [Typescript docs](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)
 * Triple-slash directives are single-line comments containing a single XML tag. The contents of the comment are used as compiler directives.
 * So yes, the typescript compiler is picking this up during compilation and taking the appropriate action.
 * In this case, since you are using a types directive, you are telling the compiler that this file has a dependency on the vite/client typings.
 * That said, the docs also state that for types directives:
 *    > Use these directives only when you're authoring a d.ts file by hand
 */
