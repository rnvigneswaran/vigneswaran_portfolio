import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Python", "JavaScript", "React.js", "Node.js", "Django",
    "Flask", "SQL", "NumPy", "Pandas", "Power BI"
];

const SkillsMarquee = () => {
    // Duplicate skills to create seamless loop
    const marqueeSkills = [...skills, ...skills, ...skills];

    return (
        <section id="skills" className="py-20 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10" />

            <div className="container mx-auto px-6 mb-10 text-center">
                <h2 className="text-2xl font-bold text-[var(--text-muted)] mb-2">Tech Stack</h2>
                <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full" />
            </div>

            <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity
                }}
            >
                {marqueeSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, boxShadow: "0 0 15px var(--primary-glow)", borderColor: "var(--primary)" }}
                        className="px-8 py-4 glass rounded-xl border border-white/10 min-w-[150px] text-center cursor-default transition-all duration-300"
                    >
                        <span className="text-xl font-medium text-white">{skill}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsMarquee;
