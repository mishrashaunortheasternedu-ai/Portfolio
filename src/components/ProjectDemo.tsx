'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import LiquidGlassCard from './LiquidGlassCard';

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  demoType?: 'screenshot' | 'iframe';
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'p-4 space-y-4',
  md: 'p-6 space-y-6',
  lg: 'p-8 space-y-8',
};

interface ProjectDemoProps {
  project: Project;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProjectDemo({
  project,
  size = 'md',
}: ProjectDemoProps) {
  const preview = (() => {
    if (project.demoType === 'iframe' && project.demoUrl) {
      return (
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <iframe
            src={project.demoUrl}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            title={`${project.title} demo`}
          />
        </div>
      );
    }

    if (project.demoType === 'screenshot' && project.demoUrl) {
      return (
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
          <img
            src={project.demoUrl}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }

    return (
      <div className="aspect-video rounded-2xl border border-dashed border-white/20 bg-black/40 text-white/50 flex items-center justify-center">
        Preview coming soon
      </div>
    );
  })();

  return (
    <LiquidGlassCard variant="default" className={sizeClasses[size]}>
      <div className="flex flex-col gap-4">
        {preview}

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Featured Project
          </p>
          <h3 className="text-2xl font-semibold text-white mt-2">
            {project.title}
          </h3>
        </div>

        <p className="text-white/70 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span
              key={`${project.id}-${tech}`}
              className="glass px-3 py-1 text-xs uppercase tracking-wide rounded-full text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-intense inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </LiquidGlassCard>
  );
}
