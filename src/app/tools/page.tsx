import type { Metadata } from 'next';

import Container from '@/components/Container';
import HubShowcase from '@/components/tools/HubShowcase';
import ToolHubGrid from '@/components/tools/ToolHubGrid';
import { siteDetails } from '@/data/siteDetails';
import { platformFeatures, toolHubs } from '@/data/toolHub';

export const metadata: Metadata = {
    title: `AI Tool Hub Platform | ${siteDetails.siteName}`,
    description: '50+ AI-powered SaaS tools across Career, Study, Analytics, Business, and Creator hubs.',
};

const ToolsPage: React.FC = () => {
    const totalTools = toolHubs.reduce((sum, h) => sum + h.tools.length, 0);

    return (
        <Container>
            <section className="pt-32 pb-20">
                {/* Hero */}
                <div className="relative text-center mb-16 overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
                        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
                    </div>
                    <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                        AI Tool Hub Platform
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold manrope mb-4 px-2">
                        One Platform. <span className="text-primary">Infinite</span> Utility.
                    </h1>
                    <p className="text-foreground-accent max-w-2xl mx-auto text-base sm:text-lg px-2">
                        {totalTools} AI tools across {toolHubs.length} hubs — Career, Study, Analytics, Business & Creator.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {[
                            { value: `${toolHubs.length}`, label: 'Hubs' },
                            { value: `${totalTools}`, label: 'Tools' },
                            { value: '50+', label: 'Planned' },
                        ].map(stat => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold manrope text-primary">{stat.value}</p>
                                <p className="text-xs text-foreground-accent uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hub showcase cards */}
                <HubShowcase />

                {/* Platform features strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
                    {platformFeatures.map(f => (
                        <div
                            key={f.title}
                            className="rounded-xl border border-white/5 bg-hero-background/50 px-4 py-3 flex items-center gap-3"
                        >
                            <span className="text-lg">{f.icon}</span>
                            <div>
                                <p className="text-sm font-semibold">{f.title}</p>
                                <p className="text-[11px] text-foreground-accent">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* All tools grid */}
                <div id="tools-grid">
                    <h2 className="text-2xl sm:text-3xl font-bold manrope text-center mb-2">Explore All Tools</h2>
                    <p className="text-foreground-accent text-center text-sm mb-8">Filter by hub or browse everything</p>
                    <ToolHubGrid />
                </div>

                {/* CTA */}
                <div className="mt-20 relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                    <div className="relative border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold manrope mb-3">Links Activating Soon</h2>
                        <p className="text-foreground-accent max-w-lg mx-auto mb-6">
                            Every tool launches with shared login, AI search, and a unified dashboard.
                            Get early access before public launch.
                        </p>
                        <a
                            href="mailto:ashokkumar1112.ch@gmail.com?subject=AI%20Tool%20Hub%20Early%20Access"
                            className="inline-block px-8 py-3 rounded-full bg-primary text-black font-semibold hover:bg-primary-accent transition-colors"
                        >
                            Request Early Access
                        </a>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default ToolsPage;
