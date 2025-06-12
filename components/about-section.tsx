"use client"
import { motion } from "motion/react"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import Image from "next/image"

export default function AboutSection() {
  return (
    <div className="w-full py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo on Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <CardSpotlight className="h-96 w-96">
              <div className="relative z-20 flex flex-col items-center justify-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-32 h-32 mb-6 rounded-full overflow-hidden"
                >
                  <Image
                    src="/sohail_ghibli.png"
                    alt="Mohammad Sohail"
                    width={128} height={128}
                    className="object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Mohammad Sohail</h3>
                <p className="text-neutral-200 text-center mb-4">
                  Machine Learning and Ai Engineer with Full Stack Expertise passionate about creating amazing user experiences
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://x.com/MohammadSo76779"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/mohdsohailshk/"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://github.com/sohailshk"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* About Text on Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed"
            >
              Hey there! I’m Mohammad Sohail — a curious mind who loves building things that actually do something.

From tinkering with machine learning models to developing full-stack apps that solve real problems, I’m passionate about turning complex ideas into practical, impactful solutions. Whether it’s deploying a real-time AI tool, contributing to a hackathon project that helps track missing people, or experimenting with deep learning models just for the thrill of learning — I’m always chasing the next challenge that stretches my brain and builds my skills.

I believe in learning by doing. That’s why you’ll find me deep in code, shipping projects, or exploring the intersection of AI, software engineering, and creative problem-solving. I’ve spent hundreds of hours getting my hands dirty with C++, Python, React, Next.js, Django, and deploying end-to-end systems — not because I had to, but because I genuinely love it.

Beyond code, I’m driven by purpose. I enjoy building tech that feels meaningful — like tools that empower people, automate the boring stuff, or make our lives just a little smarter.

I’m 20. Still learning. Still building. Still dreaming bigger.

Let’s connect if you’re into tech that matters.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community, Lifting Heavy Weights and Reading Books.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <h3 className="font-semibold text-neutral-800 dark:text-white mb-2">Frontend</h3>
                <p className="text-neutral-600 dark:text-neutral-300">React, Next.js, HTML5, CSS3, TailwindCSS, ShadCN</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <h3 className="font-semibold text-neutral-800 dark:text-white mb-2">Backend</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Python,C++(Competetive Programming), PostgreSQL,Langchain,Langgraph,TensorFlow,Pandas</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
