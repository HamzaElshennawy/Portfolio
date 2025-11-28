"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        Data Architect & <br />
                        <span className="text-gray-400">
                            Full-Stack Developer.
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-8">
                        I build efficient data pipelines and robust web
                        applications. Specializing in MongoDB, IoT, and modern
                        web technologies.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-2 border border-gray-800 text-gray-300 rounded-md hover:text-white hover:border-gray-600 transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
