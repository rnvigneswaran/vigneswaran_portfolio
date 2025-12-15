import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Counter = ({ from, to, duration = 2 }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let start = from;
        const end = to; // Assuming 'to' is a number like 3, 10, 100
        // If 'to' string has '+', we parse it. But for animation allow numeric.
        // Simplifying: just animate the number part
        const numericEnd = parseInt(to.toString().replace(/\D/g, ''));
        if (isNaN(numericEnd)) return;

        const stepTime = Math.abs(Math.floor(duration * 1000 / (numericEnd - start)));

        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= numericEnd) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [from, to, duration]);

    return <span>{count}{to.toString().includes('+') ? '+' : ''}{to.toString().includes('%') ? '%' : ''}</span>;
}

const Hero = () => {
    const stats = [
        { label: 'IT & Technical Experience', value: '3+' },
        { label: 'Web & Data Projects', value: '10+' },
        { label: 'Focus on Clean Code', value: '100%' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--primary)] rounded-full opacity-10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-600 rounded-full opacity-10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Turning Real-World Problems into <br />
                        <span className="text-[var(--primary)] neon-text">Scalable Software Solutions</span>
                    </h1>

                    <p className="text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
                        Software Developer | Python & Backend | Full-Stack & Data-Driven Applications
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--primary-glow)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-[var(--primary)] text-black font-bold rounded-lg flex items-center gap-2 transition-all"
                        >
                            View My Projects <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-[var(--primary)] text-[var(--primary)] font-bold rounded-lg flex items-center gap-2 glass transition-all"
                        >
                            Download Resume <Download size={20} />
                        </motion.a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.2 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {/* Simple animation hook or just text for now to ensure robustness */}
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
