'use client';

import { motion } from 'framer-motion';

import { teamMembers } from '@/data/team';

const Team: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.role}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-hero-background p-6 text-center hover:border-primary/30 transition-colors"
                >
                    <div className="w-14 h-14 mx-auto rounded-full bg-secondary/20 flex items-center justify-center text-primary mb-4">
                        {member.icon}
                    </div>
                    <h3 className="font-bold manrope text-lg mb-1">{member.role}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.title}</p>
                    <p className="text-foreground-accent text-sm leading-relaxed">{member.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default Team;
