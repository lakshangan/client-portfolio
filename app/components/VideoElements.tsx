'use client'

import { motion } from 'framer-motion'

export default function VideoElements() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Film Strip */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-24 w-4 bg-primary/20 rounded-sm"
            style={{
              left: `${i * 15}%`,
              top: '-20%',
            }}
            animate={{
              top: ['-20%', '120%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Timeline Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
          style={{
            width: '200px',
            left: `${i * 25}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            x: ['-100%', '100vw'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 3,
            ease: 'linear',
          }}
        />
      ))}

      {/* Video Icons */}
      {['▶', '⏸', '⏪', '⏩', '◼'].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 text-4xl"
          style={{
            left: `${20 + i * 15}%`,
            top: `${70 + (i % 2) * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i,
            ease: 'easeInOut',
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}

