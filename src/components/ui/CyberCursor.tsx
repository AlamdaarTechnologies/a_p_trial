import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CyberCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }; // More fluid, organic feel
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);

            // Dynamic hover detection for better performance & accuracy
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, input, textarea, .cursor-pointer');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block" // Hide on mobile
            style={{ x: cursorX, y: cursorY }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 0.5
                }}
                className="relative w-full h-full"
            >
                {/* Outer Ring */}
                <div className="absolute inset-0 border border-cyber-500 rounded-full animate-[spin_3s_linear_infinite]" />

                {/* Inner Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-electric-500 rounded-full" />

                {/* Crosshair Lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-2 bg-cyber-500" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1px] h-2 bg-cyber-500" />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-[1px] bg-cyber-500" />
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-[1px] bg-cyber-500" />
            </motion.div>
        </motion.div>
    );
}
