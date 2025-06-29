import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-16">
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          my projects
        </h1>
        <p 
          className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-4"
          style={{ color: 'var(--color-textSecondary)' }}
        >
          a collection of web apps, desktop applications, apis, and creative digital solutions i've built with passion and attention to detail.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}