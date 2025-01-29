'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-md"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            Kirlosker
          </motion.div>
          
          <nav className="hidden md:flex items-center justify-center space-x-8">
            {['About', 'Works', 'Services', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link 
                  href={`#${item.toLowerCase()}`}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {item}
                </Link>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            ))}
          </nav>

          <motion.a
            href="/Kirlosker_VE_4yrs_exp.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-primary/20 hover:bg-primary/30 rounded-full transition-colors border border-primary/50"
          >
            Download Resume
          </motion.a>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}

