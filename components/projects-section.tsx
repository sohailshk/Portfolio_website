"use client"
import { motion } from "motion/react"

const projects = [
  {
    title: "Clari News",
    description:
      "Architected an ML-powered B2B service for real-time multi-topic news classification, deployed Hugging Face Inference API and serving real users. Engineered end-to-end pipeline—robust preprocessing (tokenization, 10k-vocab embeddings, padded sequences), balanced experiments (78%+ baseline accuracy vs. imbalance strategies) at Scale. ",
    image: "/",
    technologies: ["Python", "MLops", "TensorFlow", "Hugging Face","REST API'S"],
    liveUrl: "#",
    githubUrl: "https://github.com/sohailshk/NEWs_Filtering_InProdution/",
  },
  {
    title: "Suit Sense AI",
    description:
      "SuitSense AI is an intelligent assistant designed to revolutionize how real estate agents and investors analyze condominium data in Miami. Using the power of Natural Language Processing (NLP), SuitSense AI allows non-technical users to perform deep data queries, generate insights, and visualize market trends without writing a single line of code.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Langchain", "Langgraph", "RAG", "Vector Databases(FAISS)","OPENAI"],
    liveUrl: "#",
    githubUrl: "https://github.com/sohailshk/SuitSenseAI/",
  },
  {
    title: "CarePulse",
    description:
      "CarePulse is an AI-powered healthcare platform designed to provide a seamless and intelligent healthcare experience. It integrates AI diagnosis, real-time health monitoring, emergency response systems, and community engagement tools to enhance patient care and safety.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React (Vite)", "Firebase", "Appwrite", "Google Fit API, Gemini AI", "AI Diagnosis & Image-Based Accident Detection","Next.js for appointment system"],
    liveUrl: "#",
    githubUrl: "https://github.com/sohailshk/WeHack-Healthcare",
  },
  {
    title: "Lunar Lander AI",
    description:
      " implemented a Deep Q-Network (DQN) agent to solve OpenAI Gym's Lunar Lander environment. The agent learns to safely land a lunar module on a landing pad using reinforcement learning techniques.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["OpenAI Gym", "TensorFlow", "Python", "Reinforcement Learning"],
    liveUrl: "#",
    githubUrl: "https://github.com/sohailshk/Lunar-Lander-AI-Safe-Descent",
  },
  
]

export default function ProjectsSection() {
  return (
    <div className="w-full py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-3">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 py-2 px-4 rounded-lg text-center font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
