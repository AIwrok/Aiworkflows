import { FiCode, FiCpu, FiGitBranch, FiLayers, FiMessageCircle, FiServer, FiZap } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Full-Stack Web Development",
        description: "Production-grade web applications built with modern stacks — blazing-fast, SEO-optimized, and designed to convert.",
        phoneScreen: {
            id: 'svc-fullstack',
            label: 'Next.js App',
            title: 'Code & Deploy',
            subtitle: 'App Router · TypeScript · Vercel',
            accent: '#6366f1',
            items: [
                { icon: '📁', text: 'src/app/page.tsx — Agency homepage', status: 'Built' },
                { icon: '📁', text: 'src/app/blog/[slug] — AI blog', status: 'Built' },
                { icon: '📁', text: 'src/app/tools/[slug] — Free tools', status: 'Built' },
                { icon: '✅', text: 'Lighthouse score: 95+', status: 'Live' },
            ],
            footer: 'Next.js 14 · Tailwind · Supabase',
        },
        bullets: [
            {
                title: "Next.js & React",
                description: "Server-rendered apps with App Router, ISR, and edge-ready performance.",
                icon: <FiCode size={26} />
            },
            {
                title: "Tailwind CSS",
                description: "Pixel-perfect, responsive UI with a consistent design system.",
                icon: <FiLayers size={26} />
            },
            {
                title: "Supabase Backend",
                description: "Auth, real-time databases, and serverless functions in one platform.",
                icon: <FiServer size={26} />
            }
        ],
    },
    {
        title: "Workflow Automation",
        description: "Eliminate manual tasks with custom automation pipelines — from simple integrations to enterprise-grade orchestration.",
        phoneScreen: {
            id: 'svc-automation',
            label: 'n8n Editor',
            title: 'Active Workflow',
            subtitle: 'Self-hosted · 14 nodes connected',
            accent: '#FED835',
            items: [
                { icon: '1️⃣', text: 'Webhook: New WhatsApp message', status: 'Trigger' },
                { icon: '2️⃣', text: 'OpenAI: Classify customer intent', status: 'AI' },
                { icon: '3️⃣', text: 'Supabase: Fetch menu & pricing', status: 'DB' },
                { icon: '4️⃣', text: 'WhatsApp: Send order confirmation', status: 'Send' },
            ],
            footer: 'Running · 847 executions today',
        },
        bullets: [
            {
                title: "Custom n8n Workflows",
                description: "Tailored automations connecting your CRM, email, payments, and APIs.",
                icon: <FiGitBranch size={26} />
            },
            {
                title: "Self-Hosted n8n",
                description: "Full data sovereignty with dedicated, self-hosted n8n instances.",
                icon: <FiZap size={26} />
            },
            {
                title: "AI-Powered Pipelines",
                description: "LLM-integrated workflows for content generation, classification, and routing.",
                icon: <FiCpu size={26} />
            }
        ],
    },
    {
        title: "AI Tool & Browser Extension Development",
        description: "Purpose-built AI utilities and browser extensions that augment productivity and deliver intelligent experiences.",
        phoneScreen: {
            id: 'svc-aitools',
            label: 'Tools Hub',
            title: 'AI Utilities',
            subtitle: 'Free tools · No sign-up',
            accent: '#a855f7',
            items: [
                { icon: '🔧', text: 'Word Counter — 847 words', status: 'Active' },
                { icon: '📝', text: 'JSON Formatter — Valid ✓', status: 'Active' },
                { icon: '🔍', text: 'Meta Tag Generator — 12 tags', status: 'Active' },
                { icon: '🧩', text: 'Extension: AI page summarizer', status: 'v2.1' },
            ],
            footer: 'aiworkflows.dev/tools',
        },
        bullets: [
            {
                title: "Custom AI Tools",
                description: "Interactive web tools powered by GPT, Claude, and open-source models.",
                icon: <FiCpu size={26} />
            },
            {
                title: "Browser Extensions",
                description: "Chrome & Firefox extensions that bring AI directly into user workflows.",
                icon: <FiZap size={26} />
            },
            {
                title: "Content Pipelines",
                description: "Automated content creation, scheduling, and multi-channel distribution.",
                icon: <FiMessageCircle size={26} />
            }
        ],
    },
]
