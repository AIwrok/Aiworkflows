'use client';

import { motion } from 'framer-motion';

import { toolHubs } from '@/data/toolHub';

const HubShowcase: React.FC = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {toolHubs.map((hub, index) => (
            <motion.a
                key={hub.id}
                href={`#tools-grid`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-white/10 p-5 text-center overflow-hidden group cursor-pointer"
                style={{ background: `linear-gradient(160deg, ${hub.accent}12, transparent)` }}
            >
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 100%, ${hub.accent}20, transparent)` }}
                />
                <div className="relative z-10">
                    <div
                        className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center text-lg mb-3"
                        style={{ backgroundColor: `${hub.accent}25` }}
                    >
                        {hub.tools[0]?.icon}
                    </div>
                    <h3 className="font-bold manrope text-sm sm:text-base">{hub.name.replace(' Hub', '')}</h3>
                    <p className="text-[10px] sm:text-xs mt-1" style={{ color: hub.accent }}>{hub.tagline}</p>
                    <p className="text-[10px] text-foreground-accent mt-2">{hub.tools.length} tools</p>
                </div>
            </motion.a>
        ))}
    </div>
);

export default HubShowcase;
