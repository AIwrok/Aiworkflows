'use client';

import { useState } from 'react';

const JsonFormatter: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const format = (indent?: number) => {
        setError('');
        try {
            const parsed = JSON.parse(input);
            setOutput(indent !== undefined ? JSON.stringify(parsed, null, indent) : JSON.stringify(parsed));
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Invalid JSON');
            setOutput('');
        }
    };

    return (
        <div className="space-y-6">
            <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='{"key": "value"}'
                rows={8}
                className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground font-mono text-sm placeholder:text-foreground-accent focus:outline-none focus:border-primary/50 resize-y"
                aria-label="JSON input"
            />
            <div className="flex flex-wrap gap-3">
                <button onClick={() => format(2)} className="px-6 py-2 rounded-full bg-primary text-black font-semibold hover:bg-primary-accent transition-colors">
                    Format
                </button>
                <button onClick={() => format()} className="px-6 py-2 rounded-full border border-white/10 text-foreground hover:border-primary/30 transition-colors">
                    Minify
                </button>
                <button onClick={() => format(2)} className="px-6 py-2 rounded-full border border-white/10 text-foreground hover:border-primary/30 transition-colors">
                    Validate
                </button>
                {output && (
                    <button
                        onClick={() => navigator.clipboard.writeText(output)}
                        className="px-6 py-2 rounded-full border border-white/10 text-foreground-accent hover:border-primary/30 transition-colors"
                    >
                        Copy Output
                    </button>
                )}
            </div>
            {error && (
                <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">{error}</p>
            )}
            {output && (
                <pre className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-foreground font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                    {output}
                </pre>
            )}
        </div>
    );
};

export default JsonFormatter;
