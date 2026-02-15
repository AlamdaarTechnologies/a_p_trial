import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("INITIALIZING...");

    const steps = [
        "ESTABLISHING CONNECTION...",
        "VERIFYING SECURITY PROTOCOLS...",
        "LOADING ASSETS...",
        "DECRYPTING PORTFOLIO DATA...",
        "ACCESS GRANTED"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + 1;
                if (next > 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Small delay before unmount
                    return 100;
                }

                // Update text based on progress
                if (next < 30) setText(steps[0]);
                else if (next < 50) setText(steps[1]);
                else if (next < 70) setText(steps[2]);
                else if (next < 90) setText(steps[3]);
                else setText(steps[4]);

                return next;
            });
        }, 30); // Total duration approx 3s

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center font-mono"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Cyber Container */}
            <div className="w-80 relative">

                {/* Glitchy Header */}
                <div className="mb-8 text-center">
                    <motion.div
                        className="text-cyber-500 font-bold text-xl tracking-widest"
                        animate={{ opacity: [1, 0.5, 1, 0.8, 1] }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                    >
                        ALAKMAR.DEV
                    </motion.div>
                    <div className="h-px w-full bg-cyber-500/30 mt-2 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-cyber-500"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                    </div>
                </div>

                {/* Progress Bar Container */}
                <div className="h-2 bg-gray-900 border border-gray-800 rounded-full overflow-hidden relative mb-4">
                    {/* Filling Bar */}
                    <motion.div
                        className="h-full bg-cyber-500 relative"
                        style={{ width: `${progress}%` }}
                    >
                        {/* Shimmer Effect on Bar */}
                        <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_1s_infinite]" />
                    </motion.div>
                </div>

                {/* Status Text & Percentage */}
                <div className="flex justify-between text-xs text-cyber-500/80 font-bold uppercase tracking-wider">
                    <span className="min-w-[150px]">{text}</span>
                    <span>{progress}%</span>
                </div>

                {/* Decoding Effects (Decorative) */}
                <div className="absolute -left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-500/20 to-transparent" />
                <div className="absolute -right-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-500/20 to-transparent" />
            </div>

            {/* Background Grid (Subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,255,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,157,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </motion.div>
    );
}

// Add shimmer animation to tailwind config or global css if needed,
// for now relying on standard pulse or implementing custom keyframe in CSS
