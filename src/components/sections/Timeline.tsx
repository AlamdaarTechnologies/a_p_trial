import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { GlassCard } from '../ui/GlassCard';

const sentiment = [
    {
        id: 1,
        type: "work",
        role: "Cloud Security Intern",
        organization: "TechSafe Solutions",
        date: "June 2025 - Present",
        description: "Assisting in the implementation of Zero Trust architecture and automating security compliance checks using Python and AWS Lambda.",
        skills: ["AWS", "Python", "Security Compliance"]
    },
    {
        id: 2,
        type: "education",
        degree: "B.Tech in Computer Science (Cyber Security)",
        organization: "Global Institute of Technology",
        date: "2023 - 2027",
        description: "Specializing in Network Security, Cryptography, and Cloud Computing. Vice President of the Cyber Security Club.",
        skills: ["Network Security", "Cryptography", "Ethical Hacking"]
    },
    {
        id: 3,
        type: "work",
        role: "Freelance Web Developer",
        organization: "Self-Employed",
        date: "Jan 2024 - May 2025",
        description: "Developed high-performance websites for local businesses using React and TailwindCSS. Implemented secure authentication flows.",
        skills: ["React", "Node.js", "Web Security"]
    },
    {
        id: 4,
        type: "education",
        degree: "Higher Secondary Education",
        organization: "City High School",
        date: "2021 - 2023",
        description: "Graduated with distinction in Science stream. Led the school's robotics team to nationals.",
        skills: ["Physics", "Mathematics", "Computer Science"]
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
