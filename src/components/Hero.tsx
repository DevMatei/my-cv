import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2, Terminal, Database, Braces } from 'lucide-react';

export default function Hero() {
  const handleViewWork = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const offset = 80; // Height of navbar + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = skillsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              background: `linear-gradient(${120 + i * 60}deg, #8B5CF6, #EC4899)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient">
              <TypeAnimation
                sequence={[
                  '</DevMatei>',
                  1000,
                  'Matei Toma',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          >
            Full-Stack Developer & Digital Creator
          </motion.p>

          <motion.div 
            className="flex justify-center gap-6 md:gap-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[Code2, Terminal, Database, Braces].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 text-purple-600" />
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            onClick={() => window.open('/portofolio', '_self')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
          >
            Portofolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}