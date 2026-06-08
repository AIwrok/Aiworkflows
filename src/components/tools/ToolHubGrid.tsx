'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { allTools, toolHubs } from '@/data/toolHub';

const ToolHubGrid: React.FC = () => {
    const [activeHub, setActiveHub] = useState('all');

    const filtered = useMemo(() => {
        if (activeHub === 'all') return allTools;
        return allTools.filter(t => t.hubId === activeHub);
    }, [activeHub]);

    return (
        <div>
            {/* Hub filter pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
                <button
                    onClick={() => setActiveHub('all')}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeHub === 'all'
                            ? 'bg-primary text-black shadow-lg shadow-primary/25'
                            : 'border border-white/10 text-foreground-accent hover:border-primary/40'
                    }`}
                >
                    All Tools
                </button>
                {toolHubs.map(hub => (
                    <button
                        key={hub.id}
                        onClick={() => setActiveHub(hub.id)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                            activeHub === hub.id
                                ? 'text-black shadow-lg'
                                : 'border border-white/10 text-foreground-accent hover:border-white/30'
                        }`}
                        style={activeHub === hub.id ? { backgroundColor: hub.accent, boxShadow: `0 8px 32px ${hub.accent}44` } : {}}
                    >
                        {hub.name}
                    </button>
                ))}
            </div>

            {/* Tool cards grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                <AnimatePresence mode="popLayout">
                    {filtered.map((tool, index) => (
                        <motion.article
                            key={tool.id}
                            layout
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.35, delay: index * 0.04 }}
                            className="group relative rounded-2xl border border-white/10 bg-hero-background p-6 overflow-hidden hover:border-white/20 transition-colors"
                        >
                            {/* Glow on hover */}
                            <div
                                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0 blur-xl"
                                style={{ background: `radial-gradient(circle at 50% 0%, ${tool.accent}33, transparent 70%)` }}
                            />

                            <div className="relative z-10">
                                {/* Top row */}
                                <div className="flex items-start justify-between mb-5">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${tool.accent}18`, boxShadow: `0 0 24px ${tool.accent}22` }}
                                    >
                                        {tool.icon}
                                    </div>
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full animate-pulse"
                                        style={{ backgroundColor: `${tool.accent}15`, color: tool.accent }}
                                    >
                                        Coming Soon
                                    </span>
                                </div>

                                {/* Hub badge */}
                                <span
                                    className="text-[10px] font-bold uppercase tracking-widest"
                                    style={{ color: tool.accent }}
                                >
                                    {tool.hubName}
                                </span>

                                <h3 className="text-lg font-bold manrope mt-1 mb-2 group-hover:text-white transition-colors">
                                    {tool.title}
                                </h3>
                                <p className="text-sm text-foreground-accent leading-relaxed">
                                    {tool.description}
                                </p>

                                {/* Bottom accent line */}
                                <div
                                    className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                    style={{ backgroundColor: tool.accent }}
                                />
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ToolHubGrid;
