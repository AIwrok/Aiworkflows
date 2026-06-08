import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { IBlogPostMeta } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost extends IBlogPostMeta {
    content: string;
}

function getSlugFromFilename(filename: string): string {
    return filename.replace(/\.md$/, '');
}

export function getAllPosts(): IBlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

    const posts = files.map(filename => {
        const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
        const { data, content } = matter(raw);
        const words = content.split(/\s+/).length;
        const readingTime = `${Math.max(1, Math.ceil(words / 200))} min read`;

        return {
            slug: data.slug || getSlugFromFilename(filename),
            title: data.title,
            description: data.description,
            date: data.date,
            category: data.category,
            tags: data.tags || [],
            author: data.author || 'AI Workflows',
            readingTime: data.readingTime || readingTime,
            videoUrl: data.videoUrl,
        } as IBlogPostMeta;
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);
    const words = content.split(/\s+/).length;

    return {
        slug: data.slug || slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        author: data.author || 'AI Workflows',
        readingTime: data.readingTime || `${Math.max(1, Math.ceil(words / 200))} min read`,
        videoUrl: data.videoUrl,
        content,
    };
}

export function getAllCategories(): string[] {
    const posts = getAllPosts();
    return Array.from(new Set(posts.map(p => p.category))).sort();
}

export function getAllSlugs(): string[] {
    return getAllPosts().map(p => p.slug);
}
