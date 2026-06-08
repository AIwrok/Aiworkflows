import { IToolHub } from "@/types";

export const platformFeatures = [
    { title: "Single Domain", description: "Cross-hub SEO & brand authority", icon: "🌐" },
    { title: "Shared Login", description: "One account, all 5 hubs", icon: "🔐" },
    { title: "AI Search", description: "Find any tool instantly", icon: "🔍" },
    { title: "Live Dashboard", description: "Usage metrics & analytics", icon: "📈" },
];

export const toolHubs: IToolHub[] = [
    {
        id: "career",
        name: "Career Hub",
        tagline: "Optimizing Job Acquisition",
        description: "LLM-powered tools bridging resumes and job descriptions.",
        accent: "#84cc16",
        tools: [
            { id: "ats-checker", title: "ATS Checker & Optimizer", icon: "📄", description: "Score your resume against any job description instantly." },
            { id: "resume-builder", title: "AI Resume & Cover Letter Builder", icon: "👤", description: "Generate tailored resumes and cover letters in seconds." },
            { id: "interview-coach", title: "Real-time Interview Coach", icon: "🎙️", description: "Practice interviews with live AI feedback and scoring." },
        ],
    },
    {
        id: "study",
        name: "Study Hub",
        tagline: "Intelligent Learning",
        description: "Turn passive reading into active, AI-powered learning.",
        accent: "#22d3ee",
        tools: [
            { id: "pdf-notes", title: "PDF to Smart Notes Generator", icon: "📑", description: "Convert any PDF into structured, searchable study notes." },
            { id: "quiz-flashcard", title: "Quiz & Flashcard AI Creator", icon: "🧠", description: "Auto-generate quizzes and flashcards from your content." },
            { id: "current-affairs", title: "Current Affairs Summarizer", icon: "📰", description: "Daily AI summaries of news for exam prep and awareness." },
        ],
    },
    {
        id: "analytics",
        name: "Analytics Hub",
        tagline: "Data Without Code",
        description: "Raw data to actionable decisions via natural language.",
        accent: "#818cf8",
        tools: [
            { id: "csv-analyzer", title: "Smart CSV Cleaner & Analyzer", icon: "📊", description: "Upload CSV, get instant charts and data insights." },
            { id: "nl-sql", title: "NL-to-SQL Query Assistant", icon: "⌨️", description: "Ask questions in plain English, get SQL results." },
            { id: "dashboard-gen", title: "Dynamic Dashboard Generator", icon: "📈", description: "Build live dashboards from your data with zero code." },
        ],
    },
    {
        id: "business",
        name: "Business Hub",
        tagline: "Micro-SaaS Utilities",
        description: "GST-compliant financial tools for Indian businesses.",
        accent: "#f97316",
        tools: [
            { id: "gst-calculator", title: "AI-Powered GST/Tax Calculator", icon: "🧮", description: "Calculate GST, TDS, and tax liabilities accurately." },
            { id: "invoice-generator", title: "Smart Invoice & Proforma Generator", icon: "🧾", description: "Create GST invoices and proformas in one click." },
            { id: "inventory-helper", title: "Inventory Optimization Helper", icon: "📦", description: "Track stock, predict reorder points, reduce waste." },
        ],
    },
    {
        id: "creator",
        name: "Creator Hub",
        tagline: "Velocity for Creators",
        description: "AI content generation for social media at scale.",
        accent: "#e879f9",
        tools: [
            { id: "youtube-optimizer", title: "YouTube Title & Thumbnail Optimizer", icon: "▶️", description: "AI-optimized titles and thumbnails that boost CTR." },
            { id: "blog-script-gen", title: "SEO Blog & Script Generator", icon: "✍️", description: "Write SEO blogs and video scripts with AI pipelines." },
            { id: "hashtag-engine", title: "Multi-Platform Hashtag Engine", icon: "#️⃣", description: "Trending hashtags for Instagram, YouTube, and X." },
        ],
    },
];

export const allTools = toolHubs.flatMap(hub =>
    hub.tools.map(tool => ({ ...tool, hubId: hub.id, hubName: hub.name, accent: hub.accent }))
);
