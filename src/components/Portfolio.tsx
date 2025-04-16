import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Globe, Code, Server, Database, Paintbrush, MessageSquare, Zap, Layout, Package } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  link: string;
  icon: React.ComponentType;
};

const projects: Project[] = [
  {
    title: 'My CV',
    description: 'Detailed CV showcasing web development skills, projects, and achievements',
    link: '/',
    icon: Terminal
  },
  {
    title: 'HypeMC Website',
    description: 'Minecraft server network website with animations and Discord integration',
    link: 'https://hype-1ibp08fbs-devmateis-projects.vercel.app',
    icon: Globe
  },
  {
    title: 'ChatGPT Desktop App',
    description: 'Free desktop app powered by ChatGPT with restrictions against redistribution',
    link: 'https://desktopgpt.vercel.app',
    icon: MessageSquare
  },
  {
    title: 'EspressoHost',
    description: 'Under development hosting platform offering reliable web hosting services',
    link: 'https://espressohost.xyz',
    icon: Server
  },
  {
    title: 'Base64 Encode/Decode API',
    description: 'Simple API for Base64 transformations with developer-friendly documentation',
    link: 'https://docs.devmatei.is-a.dev',
    icon: Code
  },
  {
    title: 'ideaGPT',
    description: 'Multilingual idea generator for various project categories and domains',
    link: 'https://idea.devmatei.is-a.dev',
    icon: Zap
  },
  {
    title: 'A. O. Centrul de Consultație Educația Civică',
    description: 'Modern civic education website with React and Framer animations',
    link: 'https://educatiecivica.md',
    icon: Layout
  },
  {
    title: 'Chatbot Powered by ChatGPT',
    description: 'Interactive AI chatbot with login functionality using ChatGPT API',
    link: 'https://chatbot.devmatei.is-a.dev',
    icon: MessageSquare
  },
  {
    title: 'CPS Game',
    description: 'Interactive clicks-per-second testing game with real-time feedback',
    link: 'https://cpsgame.devmatei.is-a.dev',
    icon: Zap
  },
  {
    title: '"is-a-dev" Website (Prototype)',
    description: 'Prototype for revamped is-a.dev platform with modern design improvements',
    link: 'https://is-a-dev.devmatei.is-a.dev',
    icon: Layout
  },
  {
    title: 'Hate.is-a.dev',
    description: 'Humorous parody website showcasing creative web design skills',
    link: 'https://hate.is-a.dev',
    icon: Package
  }
];

export default function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Projects Portfolio
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-6 h-6 mr-3 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
              >
                Visit Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}