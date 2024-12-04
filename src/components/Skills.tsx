import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'HTML5/CSS3', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'MySQL', level: 75, category: 'backend' },
  { name: 'Python (Learning)', level: 60, category: 'backend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'PHP', level: 70, category: 'backend' },
  { name: 'Git', level: 75, category: 'tools' },
  { name: 'API Integration', level: 85, category: 'tools' },
  { name: 'Discord.js', level: 90, category: 'tools' }
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Technical Expertise
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['frontend', 'backend', 'tools'].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent capitalize">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <motion.div
                        className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : {}}
                        transition={{ duration: 1 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </motion.div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}