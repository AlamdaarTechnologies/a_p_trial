import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 2000 + Math.random() * 1500); // More frequent glitch

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`relative inline-block ${className}`}>
            <span className="relative z-10">{text}</span>
            {isGlitching && (
                <>
                    <motion.span
                        className="absolute top-0 left-0 z-0 text-cyber-500 opacity-100 mix-blend-screen"
                        animate={{ x: [-3, 3, -2, 0], y: [1, -1, 0] }}
                        transition={{ duration: 0.2 }}
                    >
                        {text}
                    </motion.span>
                    <motion.span
                        className="absolute top-0 left-0 z-0 text-neon-500 opacity-100 mix-blend-screen"
                        animate={{ x: [3, -3, 2, 0], y: [-1, 1, 0] }}
                        transition={{ duration: 0.2 }}
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </div>
    );
}
