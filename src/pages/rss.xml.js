import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET() {
  return rss({
    title: "Tasty Tower",
    description: "Tasty Tower",
    site: "https://tasty-tower.netlify.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>zh_CN</language>`,
  });
}
