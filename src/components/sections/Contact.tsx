import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlitchText } from '../ui/GlitchText';
import { TechBackground } from '../ui/TechBackground';
import { GlassCard } from '../ui/GlassCard';

// import { CyberBackground } from '../ui/CyberBackground';

export function Contact() {
    return (
        <section id="contact" className="py-20 relative">
            {/* <CyberBackground variant="blue" /> */}
            <TechBackground />
            {/* Background elements removed to show StarryBackground */}

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 flex items-center justify-center gap-2">
                        <span className="text-cyber-500">05.</span> <GlitchText text="Get In Touch" />
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or want to discuss security? Let's connect.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold font-orbitron text-white mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-white/5 rounded-lg text-cyber-500">
                                    <Mail size={24} />
                                </div>
                                <span>contact@alakmar.dev</span>
                            </div>
                            <div className="flex gap-4 mt-8">
                                {[Github, Linkedin, Twitter].map((Icon, i) => (
                                    <a key={i} href="#" className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <GlassCard
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8"
                    >
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyber-500 focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyber-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyber-500 focus:outline-none transition-colors" placeholder="Your message..." />
                            </div>
                            <Button className="w-full bg-cyber-500 text-black hover:bg-cyber-600">
                                <Send className="w-4 h-4 mr-2" /> Send Message
                            </Button>
                        </form>
                    </GlassCard>

                </div>

                <div className="mt-20 text-center text-gray-500 text-sm">
                    <p>© 2026 Alakmar Saherwala. Built with React & Tailwind.</p>
                </div>
            </div>
        </section>
    );
}
