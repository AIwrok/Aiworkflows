import { tools } from '@/data/tools';
import { ITool } from '@/types';

export function getAllTools(): ITool[] {
    return tools;
}

export function getToolBySlug(slug: string): ITool | undefined {
    return tools.find(t => t.slug === slug);
}

export function getAllToolSlugs(): string[] {
    return tools.map(t => t.slug);
}

export function getToolCategories(): string[] {
    return Array.from(new Set(tools.map(t => t.category))).sort();
}
