import { FiBriefcase, FiCpu, FiPenTool, FiSettings } from "react-icons/fi";

import { ITeamMember } from "@/types";

export const teamMembers: ITeamMember[] = [
    {
        role: "Founder & Full-Stack Developer",
        title: "Engineering Lead",
        description: "Architects scalable Next.js applications, Supabase backends, and end-to-end product delivery.",
        icon: <FiBriefcase size={32} />,
    },
    {
        role: "AI Specialist",
        title: "Agentic AI Engineer",
        description: "Designs LLM-powered agents, RAG pipelines, and intelligent automation workflows.",
        icon: <FiCpu size={32} />,
    },
    {
        role: "Operations & Management",
        title: "Operations Lead",
        description: "Orchestrates project delivery, client success, and infrastructure operations.",
        icon: <FiSettings size={32} />,
    },
    {
        role: "Creative Lead",
        title: "Design & Content",
        description: "Crafts brand identity, UI/UX design, and automated content strategies.",
        icon: <FiPenTool size={32} />,
    },
];
