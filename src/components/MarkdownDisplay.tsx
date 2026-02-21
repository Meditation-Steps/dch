import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

interface MarkdownDisplayProps {
    fileName: string; // e.g., 'about'
}

const MarkdownDisplay: React.FC<MarkdownDisplayProps> = ({ fileName }) => {
    const { i18n } = useTranslation();
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadMarkdown = async () => {
            setLoading(true);
            try {
                // Dynamic import based on current language
                const module = await import(`../locales/${i18n.language}/${fileName}.md?raw`);
                setContent(module.default);
            } catch (error) {
                console.error("Could not load markdown file", error);
                setContent("Content not available.");
            } finally {
                setLoading(false);
            }
        };

        loadMarkdown();
    }, [i18n.language, fileName]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="prose">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownDisplay;
