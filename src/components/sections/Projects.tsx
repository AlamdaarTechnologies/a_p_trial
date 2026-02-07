import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';

// Projects data...
const projects = [
    {
        title: "Cloud Native Banking App",
        description: "A microservices-based banking application deployed on AWS EKS with CI/CD pipelines.",
        tech: ["AWS", "Kubernetes", "Golang", "React"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
        github: "#",
        demo: "#"
    },
    {
        title: "Cyber Threat Intelligence Dashboard",
        description: "Real-time threat monitoring dashboard aggregating data from various threat feeds.",
        tech: ["Python", "Elasticsearch", "Kibana", "Docker"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        github: "#",
        demo: "#"
    },
    {
        title: "Secure File Storage",
        description: "End-to-end encrypted file storage solution with zero-knowledge architecture.",
        tech: ["Rust", "WASM", "React", "Node.js"],
        image: "https://images.unsplash.com/photo-1558494949-efc54d0c3c5f?auto=format&fit=crop&q=80&w=1000", // Fixed broken URL space
        github: "#",
        demo: "#"
    }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
                rotateX: [0, 5, -5, 0], // Gentle bobbing/tilt effect
                rotateY: [0, 5, -5, 0],
                scale: 1.02,
                transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className="group relative bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-cyber-500/50 transition-colors perspective-1000"
        >
            <div className="h-full">
                {/* Image Overlay */}
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-cyber-500/10 group-hover:bg-transparent transition-colors z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                </div>

                <div className="p-6 bg-gray-900">
                    <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-cyber-500 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-xs text-electric-500 font-mono">
                                #{t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// import { CyberBackground } from '../ui/CyberBackground';

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
            {/* <CyberBackground variant="orange" /> */}
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 flex items-center justify-center gap-2">
                        <span className="text-neon-500">04.</span> <GlitchText text="Featured Projects" />
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A showcase of my projects demonstrating secure coding practices and cloud architecture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
