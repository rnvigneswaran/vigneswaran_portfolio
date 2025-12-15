import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/vigneswaran.jpg';

const About = () => {
    const tags = [
        "Python Developer",
        "Backend Engineering",
        "Full-Stack Development",
        "Data Analytics",
        "Problem Solver"
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="flex justify-center">
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-80 h-80 md:w-96 md:h-96"
                        >
                            {/* Glow Ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-[var(--primary)] opacity-50 blur-sm scale-110" />
                            <div className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-10 blur-xl" />

                            {/* Image Placeholder */}
                            <div className="w-full h-full rounded-full glass overflow-hidden border-2 border-[var(--primary)] relative z-10 flex items-center justify-center bg-gray-900">
                                <img
                                    src={profileImg}
                                    alt="Vigneswaran Ravi"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold mb-8"
                        >
                            About <span className="text-[var(--primary)]">Me</span>
                        </motion.h2>

                        <div className="space-y-6 text-[var(--text-muted)] text-lg leading-relaxed">
                            <p>
                                I’m a Software Developer specializing in Python-based backend development, full-stack web applications, and data-driven solutions. I focus on building systems that are reliable, scalable, and easy to maintain.
                            </p>
                            <p>
                                With over three years of experience in technical and system support before moving fully into development, I bring a strong debugging mindset, system-level thinking, and real-world problem-solving skills into every project I work on.
                            </p>
                            <p>
                                I enjoy working across the stack — from APIs and databases to clean frontend interfaces — and continuously improve my skills in backend architecture, data processing, and modern web technologies.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 glass rounded-full text-sm text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-colors cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
