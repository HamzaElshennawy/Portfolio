"use client";

import { motion } from "framer-motion";

export default function About() {
    const skills = [
        "MongoDB",
        "Next.js",
        "PostgreSQL",
        "IoT",
        "MQTT",
        "React",
        "Node.js",
        "C#",
        "Flutter",
        "Data Architecture",
    ];

    return (
        <section
            id="about"
            className="py-20 px-6 bg-[#0a0a0a]"
        >
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold text-white mb-8">
                        About Me
                    </h2>

                    <div className="prose prose-invert max-w-none text-gray-400">
                        <p className="mb-6">
                            I'm a Data Architect and Data Flow Engineer at Aria
                            Technologies, specializing in MongoDB and automation
                            for robotic arms in factories.
                        </p>
                        <p className="mb-8">
                            With expertise in both frontend and backend
                            technologies, I build comprehensive systems that
                            solve real-world problems. I'm particularly
                            interested in IoT applications and machine learning
                            integration.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-[#111] border border-gray-800 rounded-full text-sm text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
