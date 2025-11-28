"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-900"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="#"
                    className="font-bold text-white tracking-tight"
                >
                    HE.
                </a>

                <div className="flex gap-6 text-sm font-medium">
                    <a
                        href="#about"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Work
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
