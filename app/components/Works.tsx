'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['Reels', 'Commercials', 'Music Videos']

const works = {
  'Reels': [
    { title: 'Dance Challenge', url: 'https://youtube.com/shorts/vJhXDe8qxc0?si=WKiUvJOJZyHZeo8M' },
    { title: 'Fashion Story', url: 'https://example.com/reel2' },
    { title: 'Product Showcase', url: 'https://example.com/reel3' },
  ],
  'Commercials': [
    { title: 'Brand Campaign', url: 'https://youtube.com/shorts/TsJNMnToGRc?si=WIfiAdqPMxLzLDr2' },
    { title: 'Product Launch', url: 'https://drive.google.com/file/d/14SMKmxvdYvmA79xRpNcMcRftHYIKRoPF/view?usp=sharing' },
    { title: 'Service Promo', url: 'https://example.com/commercial3' },
  ],
  'Music Videos': [
    { title: 'Artist Performance', url: 'https://youtu.be/Svtr-p4mrQ8?si=b7cGHFVRlZmIKTPC/music1' },
    { title: 'Lyric Video', url: 'https://example.com/music2' },
    { title: 'Concert Highlights', url: 'https://example.com/music3' },
  ],
}

export default function Works() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [selectedWork, setSelectedWork] = useState(null)

  return (
    <section className="py-20 relative overflow-hidden" id="works">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          My Works
        </motion.h2>

        <div className="flex justify-center mb-12 gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full backdrop-blur-md transition-all
                ${activeCategory === category 
                  ? 'bg-primary/20 text-white border border-primary/50' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {works[activeCategory].map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
              onClick={() => setSelectedWork(work)}
            >
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-white group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

