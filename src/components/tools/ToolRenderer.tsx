'use client';

import dynamic from 'next/dynamic';

const WordCounter = dynamic(() => import('./WordCounter'), { ssr: false });
const JsonFormatter = dynamic(() => import('./JsonFormatter'), { ssr: false });
const MetaTagGenerator = dynamic(() => import('./MetaTagGenerator'), { ssr: false });

interface Props {
    slug: string;
}

const ToolRenderer: React.FC<Props> = ({ slug }) => {
    switch (slug) {
        case 'word-counter':
            return <WordCounter />;
        case 'json-formatter':
            return <JsonFormatter />;
        case 'meta-tag-generator':
            return <MetaTagGenerator />;
        default:
            return <p className="text-foreground-accent">Tool not found.</p>;
    }
};

export default ToolRenderer;
