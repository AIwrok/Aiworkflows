'use client';

import { useMemo, useState } from 'react';

const WordCounter: React.FC = () => {
    const [text, setText] = useState('');

    const stats = useMemo(() => {
        const trimmed = text.trim();
        const words = trimmed ? trimmed.split(/\s+/).length : 0;
        const characters = text.length;
        const charactersNoSpaces = text.replace(/\s/g, '').length;
        const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(s => s.trim()).length : 0;
        const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
        const readingTime = Math.max(1, Math.ceil(words / 200));

        return { words, characters, charactersNoSpaces, sentences, paragraphs, readingTime };
    }, [text]);

    return (
        <div className="space-y-6">
            <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Paste or type your text here..."
                rows={10}
                className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground placeholder:text-foreground-accent focus:outline-none focus:border-primary/50 resize-y"
                aria-label="Text input for word counting"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                    { label: 'Words', value: stats.words },
                    { label: 'Characters', value: stats.characters },
                    { label: 'Chars (no spaces)', value: stats.charactersNoSpaces },
                    { label: 'Sentences', value: stats.sentences },
                    { label: 'Paragraphs', value: stats.paragraphs },
                    { label: 'Reading time', value: `${stats.readingTime} min` },
                ].map(item => (
                    <div key={item.label} className="rounded-xl border border-white/10 bg-background p-4 text-center">
                        <p className="text-2xl font-bold manrope text-primary">{item.value}</p>
                        <p className="text-sm text-foreground-accent mt-1">{item.label}</p>
                    </div>
                ))}
            </div>
            <div className="flex gap-3">
                <button
                    onClick={() => setText('')}
                    className="px-6 py-2 rounded-full border border-white/10 text-foreground-accent hover:border-primary/30 transition-colors"
                >
                    Clear
                </button>
                <button
                    onClick={() => navigator.clipboard.writeText(text)}
                    disabled={!text}
                    className="px-6 py-2 rounded-full bg-primary text-black font-semibold hover:bg-primary-accent transition-colors disabled:opacity-40"
                >
                    Copy Text
                </button>
            </div>
        </div>
    );
};

export default WordCounter;
