"use client"
import { motion, AnimatePresence } from "motion/react"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { useState, useEffect } from "react"

const roles = ["Machine Learning Engineer", "Competetive Programmer", "Full Stack Developer" , "Avid Reader"]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Hi, I'm Mohammad Sohail a {" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.0 }}
            className="inline-block"
          >
            <Highlight className="text-black dark:text-white">{roles[currentRole]}</Highlight>
          </motion.span>
        </AnimatePresence>{" "}
        leveraging code to turn bold ideas into real-world AI & Full-Stack magic
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-neutral-600 dark:text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mt-8 text-center px-4"
      >
        I build modern AI & Web applications with cutting-edge technologies and write clean, efficient code.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
        >
          View My Work
        </motion.a>
        <motion.a
          href="https://drive.google.com/file/d/1giRwtBOzeTh-nPYZ0A7_hbyGx-3IFNaV/view?usp=sharing"
          target="_blank"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200"
          rel="noreferrer"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </HeroHighlight>
  )
}
