import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What services does ${siteDetails.siteName} offer?`,
        answer: 'We specialize in full-stack web development (Next.js, Tailwind, Supabase), workflow automation with custom and self-hosted n8n instances, and AI tool & browser extension development.',
    },
    {
        question: 'Do you build custom automation workflows?',
        answer: 'Yes. We design and deploy custom n8n workflows tailored to your business — from simple API integrations to complex multi-step AI-powered pipelines. We also offer self-hosted n8n instances for full data control.',
    },
    {
        question: 'What is agentic AI and how can it help my business?',
        answer: 'Agentic AI refers to autonomous AI agents that can plan, execute, and adapt tasks without constant human intervention. We build agentic solutions for customer support, content generation, data processing, and workflow orchestration.',
    },
    {
        question: 'Can you integrate WhatsApp into my business operations?',
        answer: 'Absolutely. Our flagship WhatsApp Restaurant Automation System demonstrates our expertise in building end-to-end messaging pipelines — automated ordering, menu management, and customer communication via WhatsApp.',
    },
    {
        question: 'How do I get started with AI Workflows?',
        answer: 'Reach out via our contact section or explore our free tools hub to see our capabilities in action. We offer consultations to scope your project and recommend the right technology stack.',
    }
];
