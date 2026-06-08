'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { ITool } from '@/types';
import ToolRenderer from './ToolRenderer';

interface Props {
    tool: ITool;
}

const ToolLayout: React.FC<Props> = ({ tool }) => {
    return (
        <article>
            <Link href="/tools" className="text-primary hover:text-primary-accent text-sm mb-6 inline-block">
                &larr; AI Tool Hub
            </Link>

            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <span className="text-sm text-primary font-medium">{tool.category}</span>
                <h1 className="text-3xl md:text-4xl font-bold manrope mt-2 mb-3">{tool.title}</h1>
                <p className="text-foreground-accent">{tool.description}</p>
            </motion.header>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-hero-background p-6 lg:p-8"
                aria-label={`${tool.title} tool interface`}
            >
                <ToolRenderer slug={tool.slug} />
            </motion.section>

            {/* ADSENSE_BANNER_SLOT */}
            <div
                id="adsense-banner-slot"
                className="my-8 min-h-[90px] rounded-xl border border-dashed border-white/10 flex items-center justify-center text-foreground-accent text-sm"
                role="complementary"
                aria-label="Advertisement"
            >
                Advertisement
            </div>

            <section className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold manrope text-foreground">About This Tool</h2>
                <p className="text-foreground-accent leading-relaxed">{tool.seoContent}</p>

                <h3 className="text-xl font-bold manrope text-foreground mt-8">Why Use {tool.title}?</h3>
                <p className="text-foreground-accent leading-relaxed">
                    At AI Workflows, we build tools that solve real problems for developers, content creators, and businesses.
                    This free utility is part of our commitment to providing value to the community while demonstrating our
                    technical expertise in full-stack development and AI-powered solutions.
                </p>

                <h3 className="text-xl font-bold manrope text-foreground mt-8">Explore More</h3>
                <p className="text-foreground-accent leading-relaxed">
                    Check out our other <Link href="/tools" className="text-primary hover:text-primary-accent">free tools</Link>,
                    read the latest on our <Link href="/blog" className="text-primary hover:text-primary-accent">AI Insights blog</Link>,
                    or <Link href="/#portfolio" className="text-primary hover:text-primary-accent">view our portfolio</Link> to see
                    what we can build for your business.
                </p>
            </section>

            <footer className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                    {tool.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-foreground-accent">
                            {tag}
                        </span>
                    ))}
                </div>
            </footer>
        </article>
    );
};

export default ToolLayout;
