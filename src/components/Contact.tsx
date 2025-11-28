"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-6"
        >
            <div className="max-w-3xl mx-auto border-t border-gray-900 pt-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Get in touch
                        </h2>
                        <p className="text-gray-400">
                            Available for freelance opportunities and
                            interesting projects.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="mailto:elshennawyhamza@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
