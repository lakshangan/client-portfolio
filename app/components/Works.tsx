'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['Reels', 'Commercials', 'Music Videos']

const works = {
  'Reels': [
    { title: 'Dance Challenge', url: 'https://www.youtube.com/embed/vJhXDe8qxc0?autoplay=1&mute=1&loop=1&playlist=vJhXDe8qxc0' },
    { title: 'Podcast Interview', url: 'https://www.youtube.com/embed/TsJNMnToGRc?autoplay=1&mute=1&loop=1&playlist=TsJNMnToGRc' },
    { title: 'INSTA reels', url: 'https://www.youtube.com/embed/ltdgixgeJxg?autoplay=1&mute=1&loop=1&playlist=ltdgixgeJxg' },
  ],
  'Commercials': [
    { title: '0XDAY Hackathon', url: 'https://www.youtube.com/embed/dQtbHxyY7Xk?autoplay=1&mute=1&loop=1&playlist=dQtbHxyY7Xk' },
    { title: 'Wedding Promo', url: 'https://www.youtube.com/embed/FD7vvjBhWIw?autoplay=1&mute=1&loop=1&playlist=FD7vvjBhWIw' },
    { title: 'Service Promo', url: 'https://example.com/commercial3' },
  ],
  'Music Videos': [
    { title: 'Artist Performance', url: 'https://www.youtube.com/embed/Svtr-p4mrQ8?autoplay=1&mute=1&loop=1&playlist=Svtr-p4mrQ8' },
    { title: 'Lyric Video', url: 'https://example.com/music2' },
    { title: 'Concert Highlights', url: 'https://example.com/music3' },
  ],
}

export default function Works() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

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
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="aspect-video relative">
                {/* Embedded YouTube Video Auto-Playing */}
                {work.url.includes('youtube.com/embed') ? (
                  <iframe 
                    src={work.url} 
                    className="w-full h-full" 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <p className="text-white">Video not available</p>
                  </div>
                )}
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