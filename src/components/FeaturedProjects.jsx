import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
    {
        title: "Task Management Web App",
        category: "Full-Stack Django",
        description: "Full-stack Django app with authentication, CRUD operations, and task tracking.",
        color: "from-purple-500 to-indigo-500"
    },
    {
        title: "REST API Backend",
        category: "Flask / Node.js",
        description: "Designed APIs to support frontend and data workflows.",
        color: "from-green-500 to-teal-500"
    },
    {
        title: "Sales Analytics Dashboard",
        category: "Power BI",
        description: "Interactive dashboard visualizing sales, regions, and performance metrics.",
        color: "from-orange-500 to-yellow-500"
    },
    {
        title: "Data Processing Pipeline",
        category: "Python + Pandas",
        description: "Data cleaning, transformation, and reporting automation.",
        color: "from-blue-500 to-cyan-500"
    }
];

const FeaturedProjects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-[var(--primary)]">Projects</span></h2>
                    <div className="w-24 h-1 bg-[var(--primary)] rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                {/* Overlay Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-[0_0_20px_var(--primary-glow)]">
                                        <ExternalLink className="text-black" size={32} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <span className="text-[var(--primary)] text-sm font-bold tracking-wider uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--text-muted)]">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 glass border border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-black transition-all duration-300"
                    >
                        View All Projects on GitHub <Github size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
