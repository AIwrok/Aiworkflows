import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Container from '@/components/Container';
import ToolLayout from '@/components/tools/ToolLayout';
import { siteDetails } from '@/data/siteDetails';
import { getToolBySlug, getAllToolSlugs } from '@/lib/tools';

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllToolSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const tool = getToolBySlug(params.slug);
    if (!tool) return {};

    return {
        title: `${tool.title} — Free Online Tool | ${siteDetails.siteName}`,
        description: tool.description,
        keywords: tool.tags,
        openGraph: {
            title: tool.title,
            description: tool.description,
            type: 'website',
        },
    };
}

const ToolPage: React.FC<Props> = ({ params }) => {
    const tool = getToolBySlug(params.slug);
    if (!tool) notFound();

    return (
        <Container>
            <section className="pt-32 pb-20 max-w-3xl mx-auto">
                <ToolLayout tool={tool} />
            </section>
        </Container>
    );
};

export default ToolPage;
