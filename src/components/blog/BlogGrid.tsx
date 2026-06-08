'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { IBlogPostMeta } from '@/types';

interface Props {
    posts: IBlogPostMeta[];
    categories: string[];
}

const BlogGrid: React.FC<Props> = ({ posts, categories }) => {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = search === '' ||
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.description.toLowerCase().includes(search.toLowerCase()) ||
                post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [posts, search, activeCategory]);

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <input
                    type="search"
                    placeholder="Search articles..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-hero-background border border-white/10 text-foreground placeholder:text-foreground-accent focus:outline-none focus:border-primary/50"
                    aria-label="Search blog posts"
                />
                <div className="flex flex-wrap gap-2">
                    {['All', ...categories].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm transition-colors ${
                                activeCategory === cat
                                    ? 'bg-primary text-black font-semibold'
                                    : 'border border-white/10 text-foreground-accent hover:border-primary/30'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {filtered.length === 0 ? (
                <p className="text-center text-foreground-accent py-12">No articles match your search.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="block rounded-2xl border border-white/10 bg-hero-background p-6 hover:border-primary/30 transition-colors h-full"
                            >
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground-accent mb-3">
                                    <span className="text-primary font-medium">{post.category}</span>
                                    {post.videoUrl && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                                            Video
                                        </span>
                                    )}
                                    <span>&middot;</span>
                                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                                    <span>&middot;</span>
                                    <span>{post.readingTime}</span>
                                </div>
                                <h2 className="text-xl font-bold manrope mb-2">{post.title}</h2>
                                <p className="text-foreground-accent text-sm leading-relaxed mb-4">{post.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-foreground-accent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogGrid;
