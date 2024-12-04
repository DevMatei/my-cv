import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'HypeMC Website',
    description: 'Modern Minecraft server website with player statistics, store integration, and real-time server status.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Node.js', 'MySQL', 'WebSocket'],
    demoLink: 'https://hypemc.example.com',
    githubLink: 'https://github.com/devmatei/hypemc',
  },
  {
    title: 'DoinaGPT Assistant',
    description: 'AI-powered chatbot leveraging OpenAI\'s GPT for intelligent conversations and task automation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    techStack: ['Python', 'OpenAI API', 'Flask', 'Redis'],
    demoLink: 'https://doinagpt.example.com',
    githubLink: 'https://github.com/devmatei/doinagpt',
  },
  {
    title: 'ChatGPT Desktop App',
    description: 'Cross-platform desktop application for ChatGPT with offline capabilities and custom prompts.',
    image: 'https://images.unsplash.com/photo-1673187456578-2e9b39ae0e83?auto=format&fit=crop&w=800&q=80',
    techStack: ['Electron', 'React', 'TypeScript', 'SQLite'],
    demoLink: 'https://chatgpt-desktop.example.com',
    githubLink: 'https://github.com/devmatei/chatgpt-desktop',
  },
  {
    title: 'Minecraft SMP Platform',
    description: 'Advanced survival multiplayer platform with custom plugins and web integration.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
    techStack: ['Java', 'Spigot API', 'Redis', 'React'],
    demoLink: 'https://smp.example.com',
    githubLink: 'https://github.com/devmatei/smp-platform',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full"
                  >
                    <Github className="w-6 h-6 text-gray-900" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}