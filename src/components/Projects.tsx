"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "Real-time analytics dashboard for online retailers.",
            tech: ["Next.js", "TypeScript", "Tailwind"],
            image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
            link: "#",
        },
        {
            title: "IoT Control Center",
            description: "Industrial automation interface for robotic arms.",
            tech: ["React", "MQTT", "Node.js"],
            image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            link: "#",
        },
        {
            title: "Smart Home Hub",
            description: "Centralized control for connected home devices.",
            tech: ["Flutter", "Firebase", "Dart"],
            image: "https://images.pexels.com/photos/1092639/pexels-photo-1092639.jpeg",
            link: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 px-6"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-8">
                    Selected Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group block bg-[#111] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        size={18}
                                        className="text-gray-500 group-hover:text-white"
                                    />
                                </div>
                                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
