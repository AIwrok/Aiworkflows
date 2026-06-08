import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Full-stack development, agentic AI, and workflow automation — engineered for growth.",
    quickLinks: [
        { text: "Services", url: "/#services" },
        { text: "Portfolio", url: "/#portfolio" },
        { text: "Blog (AI Insights)", url: "/blog" },
        { text: "AI Tool Hub", url: "/tools" },
    ],
    email: 'ashokkumar1112.ch@gmail.com',
    telephone: '+91 7999614511',
    socials: {
        github: 'https://github.com/aiworkflows007-ai',
        linkedin: 'https://www.linkedin.com/company/112720692',
    }
}
