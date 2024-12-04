import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Bot, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Passionate About Creating Digital Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              As a Full-Stack Developer, I bridge the gap between frontend elegance and backend robustness. 
              My journey in tech has led me to create diverse solutions, from responsive web applications 
              to efficient Minecraft servers and intelligent Discord bots.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, text: 'Frontend Development' },
                { icon: Server, text: 'Backend Systems' },
                { icon: Bot, text: 'Bot Development' },
                { icon: Globe, text: 'Web Solutions' }
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <Icon className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}