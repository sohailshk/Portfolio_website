"use client"
import { motion } from "motion/react"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconHeart } from "@tabler/icons-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black dark:bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-medium text-white text-lg">Portfolio</span>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Machine Learning and Ai Engineer with Full Stack Expertise passionate about creating amazing user experiences
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors duration-200"
              >
                <IconBrandGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors duration-200"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors duration-200"
              >
                <IconBrandTwitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:sohailsaif504@gmail.com"
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  sohailsaif504@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  +91 ########
                </a>
              </li>
              <li>
                <span className="text-neutral-300">Mumbai, India</span>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">© {currentYear} Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-1 text-neutral-400 text-sm">
            <span>Made with</span>
            <IconHeart className="w-4 h-4 text-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
