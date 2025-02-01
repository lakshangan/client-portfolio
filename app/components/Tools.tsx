
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  { name: 'Adobe Premiere Pro', icon:'/images/premier.png' },
  { name: 'Adobe After Effects', icon: '/images/Adob_after.png' },
  { name: 'DaVinci Resolve', icon: '/images/Davanci1.png' },
  { name: 'Final Cut Pro', icon: '/images/cut_pro1.png' },
  { name: 'Adobe Photoshop', icon: '/images/photoshop.png' },
  { name: 'Adobe Audition', icon: '/images/Audition.png' },
  { name: 'Blender', icon: '/images/blender.png' },
  { name: 'Cinema 4D', icon: '/images/Camara_4D.png' },
];

export default function Tools() {
  return (
    <section className="py-20 bg-black" id="tools">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8 text-white"
        >
          Tools I Use
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center mb-12 text-gray-400"
        >
          Crafting visual stories with cutting-edge software
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-24 h-24 mb-4 transition-all duration-300 ease-in-out"
              >
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  style={{ objectFit: 'contain' }} // Replaces objectFit prop
                  className="drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
                />
              </motion.div>
              <motion.span
                className="text-sm text-center text-white/80 group-hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {tool.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}