'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Internal Tool for Production Line Data',
      description: 'Real-time visualization dashboard for factory production data, featuring live updates and comprehensive analytics.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
      tech: ['MongoDB', 'MQTT', 'Next.js', 'PostgreSQL'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Agrly',
      description: 'A comprehensive rental application for North Coast apartments, streamlining the rental process for both owners and tenants.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      tech: ['Flutter', 'Next.js', 'PostgreSQL'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'AALAA Designs',
      description: 'Modern e-commerce platform for a design brand, featuring product customization, user accounts, and secure payment processing.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tech: ['Next.js', 'PostgreSQL', 'ShadCN'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <motion.a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}