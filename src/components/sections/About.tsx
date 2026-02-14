import { motion } from 'framer-motion';
import { User, Code, Server, Cloud, Shield } from 'lucide-react';
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
                                    I build real-world web applications and continuously push myself toward mastering <span className="text-cyber-500 font-semibold">Cyber Security</span> and <span className="text-electric-500 font-semibold">Cloud Computing</span>.
                                    From developing live business websites to exploring system security and deployment practices, I focus on building practical, secure, and scalable solutions.
                                    <br /><br />
                                    My goal is to combine <span className="text-neon-500 font-semibold">development</span>, <span className="text-electric-500 font-semibold">cloud</span>, and <span className="text-cyber-500 font-semibold">security</span> to create systems that are not just functional — but <span className="text-white font-bold">resilient</span>.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-cyber-500/50 transition-colors">
                                        <Code className="text-cyber-500 w-5 h-5" />
                                        <span className="font-bold text-sm text-white">Frontend Development</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-neon-500/50 transition-colors">
                                        <Server className="text-neon-500 w-5 h-5" />
                                        <span className="font-bold text-sm text-white">Backend Development</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-electric-500/50 transition-colors">
                                        <Cloud className="text-electric-500 w-5 h-5" />
                                        <span className="font-bold text-sm text-white">Cloud Fundamentals</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-red-500/50 transition-colors">
                                        <Shield className="text-red-500 w-5 h-5" />
                                        <span className="font-bold text-sm text-white">Cyber Security Basics</span>
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
