import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const IconComponent = Icons[project.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div
      className="p-6 rounded-2xl border transition-all duration-200 group hover:scale-[1.02]"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="p-3 rounded-xl transition-transform duration-200 hover:scale-110"
          style={{ backgroundColor: `${project.color}20` }}
        >
          <IconComponent 
            className="w-6 h-6"
            style={{ color: project.color }}
          />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <Github className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <ExternalLink className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
            </a>
          )}
        </div>
      </div>

      <h3 
        className="text-xl font-bold mb-2"
        style={{ color: 'var(--color-text)' }}
      >
        {project.title}
      </h3>
      
      <p 
        className="text-sm mb-4 leading-relaxed"
        style={{ color: 'var(--color-textSecondary)' }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full transition-transform duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-textSecondary)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}