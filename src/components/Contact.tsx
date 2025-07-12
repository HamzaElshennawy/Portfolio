'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Briefcase, Linkedin, Github, Facebook, Instagram } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'elshennawyhamza@gmail.com',
      href: 'mailto:elshennawyhamza@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cairo, Egypt',
      href: null
    },
    {
      icon: Briefcase,
      title: 'Work',
      value: 'Aria Technologies',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/hamza-elshennawy-939768127/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://www.github.com/HamzaElshennawy',
      label: 'GitHub'
    },
    {
      icon: Facebook,
      href: 'https://www.fb.com/hamza.elshennawy.9',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/elshennawy.exe/',
      label: 'Instagram'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}