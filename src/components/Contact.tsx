"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const links = [
    {
        label: "Email",
        href: "mailto:elshennawyhamza@gmail.com",
        icon: Mail,
    },
    {
        label: "GitHub",
        href: "https://github.com/HamzaElshennawy",
        icon: Github,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hamza-elshennawy-29876b376",
        icon: Linkedin,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-6 scroll-mt-16"
        >
            <div className="max-w-3xl mx-auto border-t border-gray-900 pt-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Get in touch
                        </h2>
                        <p className="text-gray-400 mb-3">
                            Available for freelance opportunities and
                            interesting projects.
                        </p>
                        <a
                            href="mailto:elshennawyhamza@gmail.com"
                            className="text-white hover:text-blue-400 transition-colors"
                        >
                            elshennawyhamza@gmail.com
                        </a>
                        <p className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                            <MapPin size={14} /> Cairo, Egypt
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {links.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                title={label}
                                {...(href.startsWith("http") && {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                })}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
