import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Bot, Globe } from 'lucide-react';
import { TimelineItem } from '../types';

const timeline: TimelineItem[] = [
  {
    date: '2023 - Present',
    title: 'Full-Stack Development',
    description: 'Leading development of modern web applications and custom solutions.',
    icon: 'Code',
  },
  {
    date: '2022 - 2023',
    title: 'Minecraft Server Development',
    description: 'Created custom plugins and managed server infrastructure for gaming communities.',
    icon: 'Server',
  },
  {
    date: '2021 - 2022',
    title: 'Discord Bot Development',
    description: 'Developed automated solutions and community management tools.',
    icon: 'Bot',
  },
  {
    date: '2020 - 2021',
    title: 'Web Development Journey',
    description: 'Started journey in web development and software engineering.',
    icon: 'Globe',
  },
];

const iconMap = {
  Code,
  Server,
  Bot,
  Globe,
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Experience Timeline
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-800" />

          {timeline.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                } mb-8`}
              >
                <div
                  className={`w-1/2 flex ${
                    index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm text-purple-600 dark:text-purple-400">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}