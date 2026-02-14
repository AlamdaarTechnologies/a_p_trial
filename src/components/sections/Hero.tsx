import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { IconGlobe } from '../ui/IconGlobe';

// import { CyberBackground } from '../ui/CyberBackground';

export function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "Computer Science Student",
        "Aspiring Cloud Engineer",
        "Cybersecurity Enthusiast",
        "Building Secure Web Apps",
        "Open to Learning & Opportunities"
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 50);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, phrases]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* <CyberBackground variant="default" /> */}

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-electric-500 mb-4 font-mono text-sm">
                        <Terminal className="w-4 h-4" />
                        <span>CSE | CYBER | CLOUD</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-orbitron mb-6 leading-tight break-words">
                        ALAKMAR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-500 to-electric-500">
                            SAHERWALA
                        </span>
                    </h1>

                    <div className="h-8 mb-8">
                        <span className="text-xl md:text-2xl text-gray-400 font-mono border-r-2 border-cyber-500 pr-2 animate-pulse">
                            {text}
                        </span>
                    </div>

                    <p className="text-gray-400 max-w-lg mb-8 text-lg">
                        Crafting resilient digital infrastructures and securing the future of the web.
                        Blending code, cloud, and cybersecurity.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            // @ts-ignore
                            href="#projects"
                            size="lg"
                            className="border-cyber-500 text-black bg-cyber-500 hover:bg-cyber-600"
                        >
                            View Work
                        </Button>
                        <Button
                            // @ts-ignore
                            href="#contact"
                            size="lg"
                            variant="outline"
                            className="border-electric-500 text-electric-500 hover:bg-electric-500/10"
                        >
                            Contact Me
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:flex items-center justify-center h-[500px]"
                >
                    <IconGlobe />
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
                <ChevronDown size={24} />
            </div>
        </section>
    );
}
