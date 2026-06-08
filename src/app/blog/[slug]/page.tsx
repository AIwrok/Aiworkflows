import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const post = getPostBySlug(params.slug);
    if (!post) return {};

    return {
        title: `${post.title} | ${siteDetails.siteName}`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

const BlogPostPage: React.FC<Props> = ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) notFound();

    return (
        <Container>
            <article className="pt-32 pb-20 max-w-3xl mx-auto">
                <Link href="/blog" className="text-primary hover:text-primary-accent text-sm mb-6 inline-block">
                    &larr; Back to AI Insights
                </Link>

                <header className="mb-10">
                    <div className="flex items-center gap-3 text-sm text-foreground-accent mb-4">
                        <span className="text-primary font-medium">{post.category}</span>
                        <span>&middot;</span>
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </time>
                        <span>&middot;</span>
                        <span>{post.readingTime}</span>
                        {post.videoUrl && (
                            <>
                                <span>&middot;</span>
                                <span className="text-primary">Video recap</span>
                            </>
                        )}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold manrope mb-4">{post.title}</h1>
                    <p className="text-foreground-accent text-lg">{post.description}</p>
                    <p className="text-sm text-foreground-accent mt-4">By {post.author}</p>
                </header>

                {post.videoUrl && (
                    <div className="mb-10 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                        <iframe
                            src={`https://www.youtube.com/embed/${post.videoUrl.match(/(?:v=|\/embed\/)([\w-]{11})/)?.[1] ?? ''}`}
                            title={post.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                )}

                <div className="prose prose-invert prose-lg max-w-none prose-headings:manrope prose-a:text-primary prose-code:text-primary prose-pre:bg-hero-background prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

                <footer className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-foreground-accent">
                                {tag}
                            </span>
                        ))}
                    </div>
                </footer>
            </article>
        </Container>
    );
};

export default BlogPostPage;
