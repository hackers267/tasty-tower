import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
});
