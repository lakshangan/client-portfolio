'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import image from '/images/kirlos.jpeg';



export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center py-20"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="./images/kirlos.jpeg"
              alt="Kirlosker"
              className="rounded-full shadow-lg"
              width={400}
              height={400}
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-4xl font-bold mb-8 text-primary">About Me</h2>
          <p className="text-xl leading-relaxed text-white">
            Hi, I'm Kirlosker, a Video Editor & Designer with a passion for capturing life's
            precious moments and weaving them into beautiful stories. With four years of
            experience and a portfolio of over 20 projects, I'm dedicated to crafting videos
            that evoke joy, laughter, and cherished memories. Let me help you relive your
            special moments through the art of cinematic storytelling.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

