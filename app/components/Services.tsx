'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const services = [
  {
    title: 'YouTube Video Editing',
    description: 'Professional editing for your YouTube content, optimized for engagement and retention.',
    icon: '🎬',
  },
  {
    title: 'Reels Creation',
    description: 'Eye-catching short-form videos for Instagram and TikTok to boost your social media presence.',
    icon: '📱',
  },
  {
    title: 'Podcast Editing',
    description: 'Polished audio editing and video production for your podcast episodes.',
    icon: '🎙️',
  },
  {
    title: 'Commercial Ads',
    description: 'Compelling video ads to showcase your products and services.',
    icon: '📺',
  },
  {
    title: 'Poster Design',
    description: 'Eye-catching poster designs for your video content or events.',
    icon: '🖼️',
  },
  {
    title: 'Vlog Editing',
    description: 'Dynamic editing to bring your vlogs to life and engage your audience.',
    icon: '🌟',
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  return (
    <section className="py-20 bg-background-light" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Services</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{services[currentIndex].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">{services[currentIndex].title}</h3>
              <p className="text-lg text-white/90">{services[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-20 p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeftIcon className="h-6 w-6 text-primary" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-20 p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRightIcon className="h-6 w-6 text-primary" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

