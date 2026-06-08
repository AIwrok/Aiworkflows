'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import PhoneMockup from '../PhoneMockup';
import { portfolioItems } from '@/data/portfolio';

const Portfolio: React.FC = () => {
    if (portfolioItems.length === 0) {
        return (
            <p className="text-center text-foreground-accent py-12">
                Case studies coming soon.{' '}
                <a href="mailto:ashokkumar1112.ch@gmail.com" className="text-primary hover:text-primary-accent">
                    Get in touch
                </a>{' '}
                to discuss your project.
            </p>
        );
    }

    return (
        <div className="grid gap-8">
            {portfolioItems.map((item, index) => (
                <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="relative rounded-2xl border border-white/10 bg-hero-background overflow-hidden"
                >
                    {item.featured && (
                        <span className="absolute top-4 left-4 z-10 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                            Flagship Project
                        </span>
                    )}
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl lg:text-3xl font-bold manrope mb-3">{item.title}</h3>
                            <p className="text-foreground-accent mb-6">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-foreground-accent">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <ul className="space-y-3 mb-6">
                                {item.highlights.map(highlight => (
                                    <li key={highlight} className="flex items-start gap-2 text-sm text-foreground-accent">
                                        <span className="text-primary mt-1">&#9679;</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            {(item.demoUrl || item.videoUrl) && (
                                <div className="flex flex-wrap gap-3">
                                    {item.demoUrl && (
                                        <Link
                                            href={item.demoUrl}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black text-sm font-semibold hover:bg-primary-accent transition-colors"
                                        >
                                            View Live
                                        </Link>
                                    )}
                                    {item.videoUrl && (
                                        <a
                                            href={item.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm font-semibold hover:border-primary/40 transition-colors"
                                        >
                                            Watch Demo
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="relative min-h-[280px] md:min-h-0 bg-gradient-to-br from-secondary/10 to-primary/5 flex items-center justify-center p-6 sm:p-8">
                            <PhoneMockup screens={[item.phoneScreen]} compact />
                        </div>
                    </div>
                </motion.article>
            ))}
        </div>
    );
};

export default Portfolio;
