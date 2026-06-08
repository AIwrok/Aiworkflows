'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { IPhoneScreen } from '@/types';

interface Props {
    screens: IPhoneScreen[];
    autoRotate?: boolean;
    rotateInterval?: number;
    showIndicators?: boolean;
    compact?: boolean;
    className?: string;
}

const PhoneMockup: React.FC<Props> = ({
    screens,
    autoRotate = false,
    rotateInterval = 4000,
    showIndicators = false,
    compact = false,
    className = '',
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const screen = screens[activeIndex];
    const width = compact
        ? 'w-full max-w-[240px] sm:max-w-[260px]'
        : 'w-full max-w-[260px] sm:max-w-[300px]';
    const minHeight = compact ? 'min-h-[320px] sm:min-h-[360px]' : 'min-h-[380px] sm:min-h-[420px]';

    useEffect(() => {
        if (!autoRotate || screens.length <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % screens.length);
        }, rotateInterval);
        return () => clearInterval(interval);
    }, [autoRotate, rotateInterval, screens.length]);

    return (
        <div className={`relative mx-auto z-10 ${width} ${className}`}>
            <div className="relative rounded-[2.5rem] border-[3px] border-white/15 bg-[#0d0d14] shadow-2xl shadow-black/50 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0d0d14] rounded-b-2xl z-20" />

                <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] text-foreground-accent relative z-10">
                    <span>9:41</span>
                    <span className="font-semibold text-primary text-[11px]">AI Workflows</span>
                    <span>●●●</span>
                </div>

                <div className={`px-4 pb-6 pt-2 ${minHeight}`}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={screen.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div
                                className="rounded-2xl p-4 mb-4"
                                style={{ background: `linear-gradient(135deg, ${screen.accent}22, transparent)` }}
                            >
                                <span
                                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                                    style={{ backgroundColor: `${screen.accent}33`, color: screen.accent }}
                                >
                                    {screen.label}
                                </span>
                                <h3 className={`text-foreground font-bold manrope mt-2 ${compact ? 'text-base' : 'text-lg'}`}>{screen.title}</h3>
                                <p className="text-foreground-accent text-xs mt-0.5">{screen.subtitle}</p>
                            </div>

                            <div className="space-y-2.5">
                                {screen.items.map((item, i) => (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-2 sm:gap-3 rounded-xl px-3 py-2.5 border border-white/5 ${
                                            item.incoming ? 'bg-[#25D366]/10 ml-0 mr-2 sm:mr-4' : 'bg-white/5'
                                        }`}
                                    >
                                        <span className="text-base flex-shrink-0">{item.icon}</span>
                                        <span className="text-xs text-foreground flex-1 min-w-0 leading-snug break-words">{item.text}</span>
                                        {item.status && (
                                            <span
                                                className="text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ml-6 sm:ml-0"
                                                style={{ backgroundColor: `${screen.accent}22`, color: screen.accent }}
                                            >
                                                {item.status}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {screen.footer && (
                                <p className="mt-4 text-[10px] text-foreground-accent text-center">{screen.footer}</p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center pb-3">
                    <div className="w-24 h-1 rounded-full bg-white/20" />
                </div>
            </div>

            {showIndicators && screens.length > 1 && (
                <div className="flex justify-center gap-2 mt-5">
                    {screens.map((s, i) => (
                        <button
                            key={s.id}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Show ${s.label} screen`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === activeIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/20 hover:bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            )}

            <div
                className="absolute -inset-4 rounded-[3rem] -z-10 blur-2xl opacity-30 transition-colors duration-700"
                style={{ backgroundColor: screen.accent }}
            />
        </div>
    );
};

export default PhoneMockup;
