"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react"
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="w-full py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: IconMail,
                  label: "Email",
                  value: "sohailsaif504@gmail.com",
                  color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
                },
                {
                  icon: IconMapPin,
                  label: "Location",
                  value: "Mumbai, India",
                  color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-black rounded-lg shadow-md"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}
                  >
                    <item.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-neutral-800 dark:text-white">{item.label}</p>
                    <p className="text-neutral-600 dark:text-neutral-300">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: IconBrandGithub, href: "https://github.com/sohailshk", color: "hover:text-gray-600" },
                  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/mohdsohailshk/", color: "hover:text-blue-600" },
                  { icon: IconBrandTwitter, href: "https://x.com/MohammadSo76779", color: "hover:text-blue-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white dark:bg-neutral-800 rounded-lg flex items-center justify-center shadow-md transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cal.com Embed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="shadow-2xl mx-auto w-full max-w-md rounded-2xl bg-white p-8 dark:bg-black border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Book a Meeting</h3>
              <Cal
                namespace="30min"
                calLink="mohammad-sohail-shaikh/30min"
                style={{ width: "100%", height: "600px", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}
