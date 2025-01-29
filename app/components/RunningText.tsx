'use client'

import { motion } from 'framer-motion'

const services = [
  "Video Editing", "Color Grading", "Cinematic Edits", "Insta Reels",
  "Wedding Videos", "Podcasts", "Tutorial Videos", "Documentaries",
  "Behind-the-Scenes", "Time-lapse Creation", "Poster Design",
  "Video Restoration", "Subtitling & Captioning"
]

export default function RunningText() {
  return (
    <div className="py-8 bg-black overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -50 * services.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {services.map((service, index) => (
            <span key={index} className="text-2xl font-bold text-primary mx-4">
              {service}
            </span>
          ))}
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -50 * services.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {services.map((service, index) => (
            <span key={index} className="text-2xl font-bold text-primary mx-4">
              {service}
            </span>
          ))}
        </motion.div>
      </div>
      <div className="flex mt-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [-50 * services.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {services.map((service, index) => (
            <span key={index} className="text-2xl font-bold text-secondary mx-4">
              {service}
            </span>
          ))}
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [-50 * services.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {services.map((service, index) => (
            <span key={index} className="text-2xl font-bold text-secondary mx-4">
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

