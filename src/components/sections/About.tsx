import { motion } from 'framer-motion';
import { User, Cpu, Globe } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { GlassCard } from '../ui/GlassCard';

// import { CyberBackground } from '../ui/CyberBackground';

export function About() {
    return (
        <section id="about" className="py-20 bg-black relative overflow-hidden">
            {/* <CyberBackground variant="cyan" /> */}
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Heading - Outside the box */}
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 flex items-center justify-center gap-3">
                        <span className="text-cyber-500">01.</span> <GlitchText text="About Me" />
                    </h2>

                    {/* Content Box - Contains Image and Bio */}
                    <GlassCard className="p-8 md:p-12 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">

                            {/* Profile Image / Avatar Placeholder */}
                            <div className="relative group shrink-0">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-500 to-neon-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-48 h-48 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/10">
                                    <User className="w-20 h-20 text-gray-500" />
                                    {/* Replace with actual image: <img src="/path/to/image.jpg" className="w-full h-full object-cover" /> */}
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    I am a passionate <span className="text-electric-500 font-semibold">Computer Science Engineering</span> student specializing in <span className="text-neon-500 font-semibold">Cybersecurity</span> and <span className="text-cyber-500 font-semibold">Cloud Computing</span>.
                                    My journey is driven by a curiosity to understand how systems work at their core and how to secure them against evolving threats.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-cyber-500/50 transition-colors">
                                        <Cpu className="text-cyber-500" />
                                        <div>
                                            <h4 className="font-bold text-sm text-white">Cloud Architecture</h4>
                                            <p className="text-xs text-gray-500">AWS, Azure, Docker</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-neon-500/50 transition-colors">
                                        <Globe className="text-neon-500" />
                                        <div>
                                            <h4 className="font-bold text-sm text-white">Network Security</h4>
                                            <p className="text-xs text-gray-500">Pentesting, Cryptography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
