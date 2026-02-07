import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider font-orbitron cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-cyber-500 text-black hover:bg-cyber-600 shadow-[0_0_15px_rgba(0,255,157,0.5)] hover:shadow-[0_0_25px_rgba(0,255,157,0.7)]",
                destructive:
                    "bg-red-500 text-white hover:bg-red-600 shadow-sm",
                outline:
                    "border border-electric-500 text-electric-500 hover:bg-electric-500/10 shadow-[0_0_10px_rgba(0,240,255,0.3)]",
                secondary:
                    "bg-neon-500 text-white hover:bg-neon-600 shadow-[0_0_15px_rgba(176,38,255,0.5)]",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null;
    size?: "default" | "sm" | "lg" | "icon" | null;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0,255,157,0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                // @ts-ignore
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
