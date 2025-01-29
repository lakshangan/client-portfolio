'use client'

import { motion } from 'framer-motion'

const videoEmojis = ['🎥', '🎬', '🎞️', '📽️', '🖥️', '📹', '🎭', '🎨', '🖋️', '✂️', '🔊', '🎵', '📸']

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Video Timeline Markers */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`timeline-${i}`}
          className="absolute h-px bg-primary/20"
          style={{
            width: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scaleX: [1, 2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Video Control Icons */}
      {['▶', '⏸', '⏪', '⏩', '⏺', '⭐', '✂️', '🎬'].map((icon, i) => (
        <motion.div
          key={`icon-${i}`}
          className="absolute text-primary/10 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {icon}
        </motion.div>
      ))}


      {/* Frame Counter */}
      <motion.div
        className="absolute top-4 right-4 font-mono text-primary/20 text-sm"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        00:00:00:00
      </motion.div>


      {/* Emoji Background at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        {videoEmojis.map((emoji, index) => (
          <motion.span
            key={`emoji-${index}`}
            className="absolute text-2xl opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${index * (100 / videoEmojis.length)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

