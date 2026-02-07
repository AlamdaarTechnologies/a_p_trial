import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxBackground() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

    return (
        <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Floating Circle 1 */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[10%] left-[5%] w-64 h-64 border border-cyber-500/30 rounded-full opacity-40 blur-[2px]"
            />

            {/* Floating Rectangle */}
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute top-[40%] right-[10%] w-48 h-48 border border-electric-500/30 rounded-xl opacity-40 blur-[2px]"
            />

            {/* Floating Grid */}
            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-[20%] left-[15%] w-32 h-32 border border-neon-500/30 opacity-40 grid grid-cols-2 grid-rows-2"
            >
                <div className="border-r border-b border-neon-500/30" />
                <div className="border-b border-neon-500/30" />
                <div className="border-r border-neon-500/30" />
            </motion.div>
        </div>
    );
}
