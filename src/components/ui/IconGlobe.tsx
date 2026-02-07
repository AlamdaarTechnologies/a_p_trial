import { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Cloud, Lock, Terminal, Shield,
    Database, Globe, Server, Cpu, Wifi,
    Smartphone, Layers, Box, Command
} from 'lucide-react';

interface IconGlobeProps {
    radius?: number;
}

const icons = [
    Code2, Cloud, Lock, Terminal, Shield,
    Database, Globe, Server, Cpu, Wifi,
    Smartphone, Layers, Box, Command
];

export function IconGlobe({ radius = 180 }: IconGlobeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    // Calculate initial positions on a sphere (Fibonacci Sphere algorithm)
    const points = useMemo(() => {
        const phi = Math.PI * (3 - Math.sqrt(5));
        return icons.map((Icon, i) => {
            const y = 1 - (i / (icons.length - 1)) * 2; // y goes from 1 to -1
            const r = Math.sqrt(1 - y * y); // radius at y
            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;

            return { Icon, x, y, z };
        });
    }, []);

    const isDragging = useRef(false);
    const lastMousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            setRotation(prev => ({
                x: prev.x + 0.002, // Constant slow rotation
                y: prev.y + 0.003
            }));
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (!isDragging.current) return;
            const deltaX = e.clientX - lastMousePos.current.x;
            const deltaY = e.clientY - lastMousePos.current.y;
            lastMousePos.current = { x: e.clientX, y: e.clientY };

            setRotation(prev => ({
                x: prev.x - deltaY * 0.005,
                y: prev.y - deltaX * 0.005
            }));
        };

        const handleGlobalMouseUp = () => {
            isDragging.current = false;
        };

        window.addEventListener('mousemove', handleGlobalMouseMove);
        window.addEventListener('mouseup', handleGlobalMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div
                ref={containerRef}
                className="relative flex items-center justify-center cursor-grab active:cursor-grabbing rounded-full z-10"
                style={{ width: radius * 2.4, height: radius * 2.4 }}
                onMouseDown={handleMouseDown}
            >
                <div className="absolute inset-0 rounded-full bg-cyber-500/5 blur-[80px] pointer-events-none" />

                {points.map((point, i) => {
                    // Apply rotation matrix
                    const cosX = Math.cos(rotation.x);
                    const sinX = Math.sin(rotation.x);
                    const cosY = Math.cos(rotation.y);
                    const sinY = Math.sin(rotation.y);

                    // Rotate around Y axis
                    let x = point.x * cosY - point.z * sinY;
                    let z = point.z * cosY + point.x * sinY;

                    // Rotate around X axis
                    const y = point.y * cosX - z * sinX;
                    z = point.y * sinX + z * cosX;

                    // Project to 2D
                    const scale = (z + 2) / 3; // Simple perspective scaling
                    const opacity = Math.max(0.1, scale - 0.2); // Fade out back elements

                    // Colors
                    const colors = ["text-cyber-500", "text-electric-500", "text-neon-500"];
                    const colorClass = colors[i % colors.length];

                    return (
                        <motion.div
                            key={i}
                            className={`absolute flex items-center justify-center p-2 rounded-lg bg-black/80 border border-white/10 backdrop-blur-sm shadow-sm ${colorClass} pointer-events-none`}
                            style={{
                                x: x * radius,
                                y: y * radius,
                                scale: scale,
                                opacity: opacity,
                                zIndex: Math.floor(scale * 100)
                            }}
                        >
                            <point.Icon size={24} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
