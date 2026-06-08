export interface IMenuItem {
    text: string;
    url: string;
}

export interface IPhoneScreenItem {
    icon: string;
    text: string;
    status?: string;
    incoming?: boolean;
}

export interface IPhoneScreen {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    accent: string;
    items: IPhoneScreenItem[];
    footer?: string;
}

export interface IBenefit {
    title: string;
    description: string;
    phoneScreen: IPhoneScreen;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IPortfolioItem {
    title: string;
    description: string;
    tags: string[];
    highlights: string[];
    phoneScreen: IPhoneScreen;
    featured?: boolean;
    demoUrl?: string;
    videoUrl?: string;
}

export interface ITeamMember {
    role: string;
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IBlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
    author: string;
    readingTime: string;
    videoUrl?: string;
}

export interface ITool {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    seoContent: string;
}

export interface IToolHubItem {
    id: string;
    title: string;
    icon: string;
    description: string;
    link?: string;
}

export interface IToolHub {
    id: string;
    name: string;
    tagline: string;
    description: string;
    accent: string;
    tools: IToolHubItem[];
}

export interface IPricing {
    name: string;
    price: number | string;
    features: string[];
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}
