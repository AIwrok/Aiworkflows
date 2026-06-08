import { IPhoneScreen } from '@/types';

export const heroPhoneScreens: IPhoneScreen[] = [
    {
        id: 'fullstack',
        label: 'Full-Stack Dev',
        title: 'Project Dashboard',
        subtitle: 'Next.js · Tailwind · Supabase',
        accent: '#6366f1',
        items: [
            { icon: '⚡', text: 'Agency landing page deployed', status: 'Live' },
            { icon: '🔐', text: 'Supabase auth & database', status: 'Done' },
            { icon: '📊', text: 'Blog & tools hub live', status: 'Active' },
            { icon: '🚀', text: 'SEO-optimized App Router', status: 'Ready' },
        ],
        footer: 'aiworkflows.dev',
    },
    {
        id: 'automation',
        label: 'n8n Automation',
        title: 'Workflow Pipeline',
        subtitle: 'Self-hosted n8n instance',
        accent: '#FED835',
        items: [
            { icon: '📩', text: 'WhatsApp trigger received', status: 'Running' },
            { icon: '🤖', text: 'AI intent classified', status: 'Done' },
            { icon: '🍽️', text: 'Menu item matched', status: 'Done' },
            { icon: '✅', text: 'Order confirmed & logged', status: 'Sent' },
        ],
        footer: '12 workflows active',
    },
    {
        id: 'whatsapp',
        label: 'Restaurant Bot',
        title: 'WhatsApp Orders',
        subtitle: 'Flagship automation system',
        accent: '#25D366',
        items: [
            { icon: '💬', text: 'Customer: "2 burgers & fries"', incoming: true },
            { icon: '🤖', text: 'Bot: Order #1042 confirmed — ₹450', incoming: true },
            { icon: '📋', text: 'Admin: Menu item marked sold out' },
            { icon: '⭐', text: 'Bot: Rate your experience 1-5' },
        ],
        footer: '98% auto-resolved queries',
    },
    {
        id: 'ai-tools',
        label: 'AI Tools Hub',
        title: 'Free Utilities',
        subtitle: 'Browser extensions & web tools',
        accent: '#a855f7',
        items: [
            { icon: '🔧', text: 'Word Counter tool', status: 'Free' },
            { icon: '📝', text: 'JSON Formatter & Validator', status: 'Free' },
            { icon: '🔍', text: 'Meta Tag Generator', status: 'Free' },
            { icon: '🧩', text: 'AI browser extension', status: 'Live' },
        ],
        footer: 'aiworkflows.dev/tools',
    },
];
