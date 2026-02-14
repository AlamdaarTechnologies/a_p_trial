import { motion } from 'framer-motion';
import { GlitchText } from '../ui/GlitchText';
import { TechBackground } from '../ui/TechBackground';
import { GlassCard } from '../ui/GlassCard';

const skills = [
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"] },
    { category: "Cybersecurity", items: ["Network Security", "Ethical Hacking", "Metasploit", "Wireshark", "Burp Suite", "Cryptography"] },
    { category: "Development", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Python", "TailwindCSS"] },
    { category: "Databases & Tools", items: ["MySQL", "XAMPP", "Vercel", "Git", "Kali Linux", "Bash"] },
];

// import { CyberBackground } from '../ui/CyberBackground';

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-black relative">
            {/* <CyberBackground variant="green" /> */}
            <TechBackground />

            {/* Background Noise/Grid - kept for texture, but TechBackground adds motion */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 flex items-center justify-center gap-2">
                        <span className="text-electric-500">02.</span> <GlitchText text="Technical Arsenal" />
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A curated list of technologies and tools I use to build and secure digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skills.map((skillGroup, index) => (
                        <GlassCard
                            key={skillGroup.category}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="p-6"
                        >
                            <h3 className="text-xl font-bold font-orbitron text-cyber-500 mb-6 border-b border-white/10 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-black/50 border border-electric-500/30 rounded-full text-sm text-gray-300 hover:border-electric-500 hover:text-electric-500 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
