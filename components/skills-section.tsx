"use client"
import { motion } from "motion/react"
import { useState } from "react"

const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
      { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-green-500" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 85, color: "from-green-500 to-green-700" },
      { name: "Python", level: 80, color: "from-yellow-500 to-orange-500" },
      { name: "PostgreSQL", level: 82, color: "from-blue-500 to-indigo-600" },
      { name: "MongoDB", level: 78, color: "from-green-600 to-green-800" },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: [
      { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
      { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
      { name: "AWS", level: 70, color: "from-yellow-400 to-orange-500" },
      { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
    ],
  },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="w-full py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{skillGroup.icon}</span>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.7 }}
                        className="text-sm text-neutral-500 dark:text-neutral-400"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: groupIndex * 0.1 + index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{
                            x: ["0%", "100%", "0%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-white/30 w-1/3"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", color: "text-blue-600 dark:text-blue-400" },
              { number: "5+", label: "Years Experience", color: "text-purple-600 dark:text-purple-400" },
              { number: "30+", label: "Happy Clients", color: "text-green-600 dark:text-green-400" },
              { number: "24/7", label: "Support", color: "text-orange-600 dark:text-orange-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center p-6 bg-white dark:bg-black rounded-xl shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-neutral-600 dark:text-neutral-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
