'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com/kirlosker', color: 'hover:text-pink-500' },
  { icon: FaYoutube, href: 'https://youtube.com/kirlosker', color: 'hover:text-red-500' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/kirlosker', color: 'hover:text-blue-500' },
  { icon: FaEnvelope, href: 'mailto:kirlosker@example.com', color: 'hover:text-green-500' },
]

export default function Contact() {
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-8 md:gap-12 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl md:text-4xl text-white/80 transition-all ${social.color}`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-lg text-white/80"
          >
            Feel free to reach out to me on any of these platforms. 
            <br />
            I'm always excited to discuss new projects and opportunities!
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

