"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Brain,
    Github,
    Globe,
    Server,
    Smartphone,
    Monitor,
    Wrench,
    type LucideIcon,
} from "lucide-react";
import {
    featuredProjects,
    otherProjects,
    type Project,
} from "@/data/projects";

const categoryIcons: Record<Project["category"], LucideIcon> = {
    Web: Globe,
    Mobile: Smartphone,
    AI: Brain,
    Backend: Server,
    Desktop: Monitor,
    Tooling: Wrench,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const Icon = categoryIcons[project.category];
    const href = project.live ?? project.repo;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % 2) * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col bg-[#111] rounded-xl border border-gray-800 hover:border-gray-600 transition-colors p-5"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 group-hover:text-blue-400 transition-colors">
                    <Icon size={20} />
                </div>
                <span className="text-xs text-gray-500">
                    {project.category} · {project.year}
                </span>
            </div>

            <h3 className="font-semibold text-white mb-2">
                {href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 group-hover:text-blue-400 transition-colors after:absolute after:inset-0"
                    >
                        {project.title}
                        <ArrowUpRight
                            size={16}
                            className="text-gray-500 group-hover:text-white transition-colors"
                        />
                    </a>
                ) : (
                    project.title
                )}
            </h3>

            <p className="text-sm text-gray-400 mb-4 leading-relaxed flex-1">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-20 px-6 scroll-mt-16"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-2">
                    Selected Work
                </h2>
                <p className="text-gray-400 mb-8">
                    Recent projects across web, mobile, AI and industrial IoT.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                <h3 className="text-lg font-semibold text-white mt-16 mb-4">
                    More Projects
                </h3>
                <ul className="divide-y divide-gray-900 border-y border-gray-900">
                    {otherProjects.map((project) => (
                        <li key={project.title}>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4 hover:bg-[#0d0d0d] transition-colors"
                            >
                                <span className="sm:w-48 shrink-0 font-medium text-gray-200 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </span>
                                <span className="flex-1 text-sm text-gray-400">
                                    {project.description}
                                </span>
                                <span className="flex items-center gap-2 text-xs text-gray-500 shrink-0">
                                    {project.tech.slice(0, 2).join(" · ")}
                                    <Github
                                        size={14}
                                        className="group-hover:text-white transition-colors"
                                    />
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mt-8">
                    <a
                        href="https://github.com/HamzaElshennawy?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        <Github size={16} />
                        See everything on GitHub
                        <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}
