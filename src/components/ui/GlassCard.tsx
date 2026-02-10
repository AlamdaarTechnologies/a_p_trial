import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group",
                hoverEffect && "hover:bg-white/5 hover:border-cyber-500/30 hover:shadow-[0_0_20px_rgba(0,255,157,0.1)] transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* Glossy Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
