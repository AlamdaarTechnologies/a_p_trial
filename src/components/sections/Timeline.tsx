import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { GlassCard } from '../ui/GlassCard';

const sentiment = [
    {
        id: 1,
        type: "work",
        role: "Founder",
        organization: "Alamdaar Technologies",
        date: "Nov 2025 - Present",
        description: "Two aspirants founded a digital solutions startup delivering modern web solutions for businesses. Strengthened skills in development, client communication, strategic thinking, and project execution.",
        skills: ["Leadership", "Strategic Thinking", "Project Management"]
    },
    {
        id: 2,
        type: "work",
        role: "Web Designing Internship",
        organization: "Sparks to Ideas",
        date: "May 2025 - June 2025",
        description: "Designed and developed responsive websites using HTML, CSS, JavaScript, and modern frameworks. Collaborated with UI/UX teams to transform wireframes into functional web pages.",
        skills: ["Figma", "VS Code", "Git"]
    },
    {
        id: 3,
        type: "education",
        degree: "B.Tech Computer Science Engineering",
        organization: "ITM Vocational University",
        date: "2023 - 2027",
        description: "Specializing in Cloud Technology and Information Security. Focusing on building a strong foundation in network defense and secure infrastructure.",
        skills: ["Network Security", "Cryptography", "Ethical Hacking"]
    }
];

// import { CyberBackground } from '../ui/CyberBackground';

export function Timeline() {
    return (
        <section id="timeline" className="py-20 bg-black relative overflow-hidden">
            {/* <CyberBackground variant="purple" /> */}
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 flex items-center justify-center gap-2">
                        <span className="text-cyber-500">03.</span> <GlitchText text="Journey & Experience" />
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        My academic and professional path in the world of technology.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-500 to-transparent opacity-30" />

                    <div className="space-y-12">
                        {sentiment.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-cyber-500 rounded-full z-10 mt-1.5 shadow-[0_0_10px_rgba(0,255,157,0.5)]">
                                    <div className="absolute inset-0 bg-cyber-500 rounded-full animate-ping opacity-20" />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                                    <GlassCard className="p-6 group">
                                        <div className={`flex items-center gap-2 text-sm text-electric-500 mb-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            <Calendar size={14} />
                                            <span>{item.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-cyber-500 transition-colors">
                                            {item.type === 'work' ? item.role : item.degree}
                                        </h3>

                                        <div className={`flex items-center gap-2 text-gray-400 mb-4 font-medium ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                                            <span>{item.organization}</span>
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            {item.skills.map((skill) => (
                                                <span key={skill} className="px-2 py-1 bg-black/30 border border-white/10 rounded text-xs text-cyber-500/80">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </GlassCard>
                                </div>

                                {/* Empty Space for Grid Alignment */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
