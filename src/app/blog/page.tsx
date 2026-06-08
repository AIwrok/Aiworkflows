import type { Metadata } from 'next';

import Container from '@/components/Container';
import BlogGrid from '@/components/blog/BlogGrid';
import { siteDetails } from '@/data/siteDetails';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export const metadata: Metadata = {
    title: `AI Insights Blog | ${siteDetails.siteName}`,
    description: 'Educational guides, AI tutorials, and daily industry updates from AI Workflows.',
};

const BlogPage: React.FC = () => {
    const posts = getAllPosts();
    const categories = getAllCategories();

    return (
        <Container>
            <section className="pt-32 pb-20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold manrope mb-4 px-2">AI Insights</h1>
                    <p className="text-foreground-accent max-w-2xl mx-auto text-base sm:text-lg px-2">
                        Educational guides, AI tutorials, and daily industry updates to keep you ahead of the curve.
                    </p>
                </div>
                <BlogGrid posts={posts} categories={categories} />
            </section>
        </Container>
    );
};

export default BlogPage;
