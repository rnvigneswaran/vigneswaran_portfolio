import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30" />
            <div className="container mx-auto px-6">
                <p className="text-[var(--text-muted)] text-sm">
                    © 2025 Vigneswaran Ravi — Built with Passion for Clean Software
                </p>
            </div>
        </footer>
    );
};

export default Footer;
