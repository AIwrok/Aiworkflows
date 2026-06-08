import { ITool } from "@/types";

export const tools: ITool[] = [
    {
        slug: "word-counter",
        title: "Word Counter",
        description: "Count words, characters, sentences, and estimate reading time for any text.",
        category: "Writing",
        tags: ["text", "writing", "SEO"],
        seoContent: "Our free word counter tool helps content creators, bloggers, and SEO specialists analyze text length instantly. Count words, characters (with and without spaces), sentences, and paragraphs. Get an estimated reading time to optimize your content for audience engagement. Perfect for meeting Google AdSense content requirements and ensuring your articles hit the ideal length for search rankings.",
    },
    {
        slug: "json-formatter",
        title: "JSON Formatter & Validator",
        description: "Format, validate, and minify JSON data with syntax highlighting.",
        category: "Developer",
        tags: ["JSON", "developer", "formatter"],
        seoContent: "Format and validate JSON data with our free online JSON formatter. Paste raw JSON to instantly beautify it with proper indentation, or minify JSON for production use. The built-in validator catches syntax errors with clear error messages. Essential for developers working with APIs, configuration files, and data interchange in modern web applications.",
    },
    {
        slug: "meta-tag-generator",
        title: "Meta Tag Generator",
        description: "Generate SEO-optimized meta tags, Open Graph, and Twitter Card markup.",
        category: "SEO",
        tags: ["SEO", "meta tags", "Open Graph"],
        seoContent: "Generate complete SEO meta tags for your web pages with our free meta tag generator. Create title tags, meta descriptions, Open Graph tags for social sharing, and Twitter Card markup. Copy the generated HTML directly into your site's head section. Improve click-through rates from search results and social media with properly optimized metadata.",
    },
];
