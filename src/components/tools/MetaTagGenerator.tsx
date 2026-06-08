'use client';

import { useMemo, useState } from 'react';

const MetaTagGenerator: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState('');
    const [keywords, setKeywords] = useState('');

    const markup = useMemo(() => {
        const lines = [
            `<title>${title}</title>`,
            `<meta name="description" content="${description}" />`,
        ];
        if (keywords) lines.push(`<meta name="keywords" content="${keywords}" />`);
        lines.push(
            `<meta property="og:title" content="${title}" />`,
            `<meta property="og:description" content="${description}" />`,
            `<meta property="og:type" content="website" />`,
        );
        if (url) lines.push(`<meta property="og:url" content="${url}" />`);
        if (image) lines.push(`<meta property="og:image" content="${image}" />`);
        lines.push(
            `<meta name="twitter:card" content="summary_large_image" />`,
            `<meta name="twitter:title" content="${title}" />`,
            `<meta name="twitter:description" content="${description}" />`,
        );
        if (image) lines.push(`<meta name="twitter:image" content="${image}" />`);
        return lines.join('\n');
    }, [title, description, url, image, keywords]);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm text-foreground-accent mb-1">Page Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground focus:outline-none focus:border-primary/50" />
                </div>
                <div>
                    <label className="block text-sm text-foreground-accent mb-1">Page URL</label>
                    <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com/page" className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground focus:outline-none focus:border-primary/50" />
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-sm text-foreground-accent mb-1">Meta Description</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground focus:outline-none focus:border-primary/50 resize-y" />
                </div>
                <div>
                    <label className="block text-sm text-foreground-accent mb-1">OG Image URL</label>
                    <input value={image} onChange={e => setImage(e.target.value)} placeholder="https://example.com/og.jpg" className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground focus:outline-none focus:border-primary/50" />
                </div>
                <div>
                    <label className="block text-sm text-foreground-accent mb-1">Keywords</label>
                    <input value={keywords} onChange={e => setKeywords(e.target.value)} placeholder="keyword1, keyword2" className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground focus:outline-none focus:border-primary/50" />
                </div>
            </div>
            <div className="flex gap-3">
                <button
                    onClick={() => navigator.clipboard.writeText(markup)}
                    disabled={!title}
                    className="px-6 py-2 rounded-full bg-primary text-black font-semibold hover:bg-primary-accent transition-colors disabled:opacity-40"
                >
                    Copy Meta Tags
                </button>
            </div>
            {title && (
                <pre className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                    {markup}
                </pre>
            )}
        </div>
    );
};

export default MetaTagGenerator;
