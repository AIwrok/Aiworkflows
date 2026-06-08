'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import HeroPhoneMockup from './HeroPhoneMockup';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(17,17,24,0.5)] to-[rgba(10,10,15,0.8)]">
            </div>

            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl sm:text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-3xl mx-auto px-1"
                >
                    {heroDetails.heading}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-4 text-foreground-accent max-w-2xl mx-auto text-base sm:text-lg px-1"
                >
                    {heroDetails.subheading}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-fit mx-auto px-2 sm:px-0"
                >
                    <Link href={heroDetails.primaryCta.url} className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors font-semibold text-center">
                        {heroDetails.primaryCta.text}
                    </Link>
                    <Link href={heroDetails.secondaryCta.url} className="text-foreground border border-white/20 hover:border-primary/50 px-8 py-3 rounded-full transition-colors text-center">
                        {heroDetails.secondaryCta.text}
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <HeroPhoneMockup />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
