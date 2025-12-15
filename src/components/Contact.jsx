import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--primary)] rounded-full opacity-5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">

                {/* Social / Community Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold mb-6">Let’s Connect & Build Together</h2>
                    <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
                        I share my learning journey, projects, and insights on software development, backend systems, and data analytics.
                    </p>

                    <div className="flex justify-center gap-8">
                        {[
                            { icon: Linkedin, href: "https://www.linkedin.com/in/vigneswaran-ravi/" },
                            { icon: Github, href: "https://github.com/rnvigneswaran" },
                            { icon: Mail, href: "mailto:rnvigneswaran@gmail.com" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, boxShadow: "0 0 15px var(--primary-glow)", color: "var(--primary)" }}
                                className="w-16 h-16 glass rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/10"
                            >
                                <item.icon size={28} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Contact Card Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="glass max-w-4xl mx-auto p-12 rounded-3xl text-center border border-[var(--glass-border)]"
                >
                    <h3 className="text-3xl font-bold mb-6">Have an opportunity or project in mind?</h3>
                    <p className="text-[var(--text-muted)] mb-8 text-lg">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <a
                        href="mailto:rnvigneswaran@gmail.com"
                        className="inline-block px-10 py-4 bg-[var(--primary)] text-black font-bold rounded-lg hover:shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300 mb-4"
                    >
                        Get in Touch
                    </a>
                    <div className="block mt-4 text-[var(--text-muted)]">
                        OR email me at <a href="mailto:rnvigneswaran@gmail.com" className="text-[var(--primary)] hover:underline">rnvigneswaran@gmail.com</a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
