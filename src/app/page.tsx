@ -1,65 +1,578 @@
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  CheckCircle2,
  Circle,
  Download,
  Sparkles,
  Code,
  Palette,
  Zap,
  Heart,
  Brain,
  Rocket,
  Coffee,
  Music,
  Camera,
  Book,
} from 'lucide-react';

import LiquidGlassCard from '@/components/LiquidGlassCard';
import ProjectDemo, { Project } from '@/components/ProjectDemo';
import AnimatedText from '@/components/AnimatedText';
import { animationPresets, staggerContainerVariants, staggerItemVariants } from '@/lib/liquidGlassAnimations';

/*
 * LANDING PAGE CUSTOMIZATION GUIDE:
 *
 * This is the main landing page component. Here's how to customize each section:
 *
 * 1. HERO SECTION:
 *    - Edit the name, tagline, and introduction text
 *    - Modify typing speed and animation delays
 *    - Add custom background gradients or images
 *
 * 2. INTERESTS SECTION:
 *    - Update interest cards with your actual interests
 *    - Change icons, colors, and descriptions
 *    - Add or remove interest items as needed
 *
 * 3. PROJECTS SECTION:
 *    - Replace sample projects with your actual projects
 *    - Update demo URLs, screenshots, and GitHub links
 *    - Adjust technology stacks for each project
 *
 * 4. TODO LIST:
 *    - Replace sample todos with your actual goals
 *    - Add progress tracking and due dates
 *    - Customize categories and priorities
 *
 * 5. CONTACT SECTION:
 *    - Update your actual contact information
 *    - Add social media links
 *    - Include resume download link
 *
 * 6. VISUAL ENHANCEMENTS:
 *    - See bottom of file for graphics integration guide
 *    - Check ProjectDemo component for demo customization
 *    - Review LiquidGlassCard for card styling options
 */

// Sample project data - Replace with your actual projects
const featuredProjects: Project[] = [
  {
    id: 'liquid-glass-portfolio',
    title: 'Liquid Glass Portfolio',
    description: 'A stunning portfolio website featuring liquid glass morphism effects and dynamic animations built with Next.js and Framer Motion.',
    technologies: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    demoType: 'screenshot',
    liveUrl: 'https://github.com/username/portfolio',
    githubUrl: 'https://github.com/username/portfolio',
    featured: true,
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A comprehensive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demoUrl: 'https://codepen.io/username/embed/pen/example?default-tab=result',
    demoType: 'iframe',
    liveUrl: 'https://taskapp-demo.com',
    githubUrl: 'https://github.com/username/task-app',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and beautiful weather animations.',
    technologies: ['Vue.js', 'Chart.js', 'Weather API', 'CSS3'],
    demoType: 'screenshot',
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
  },
];

// Sample interests data - Customize with your actual interests
const interests = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Building scalable web applications with modern technologies and best practices.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces with focus on user experience and accessibility.',
    color: 'from-pink-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, efficiency, and seamless user experiences.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Exploring AI and ML to build intelligent applications that learn and adapt.',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: Rocket,
    title: 'Cloud Architecture',
    description: 'Designing and deploying scalable cloud solutions with modern infrastructure.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Open Source',
    description: 'Contributing to open source projects and building tools for the developer community.',
    color: 'from-red-500 to-pink-600',
  },
];

// Sample todo items - Replace with your actual goals
const todoItems = [
  { id: 1, text: 'Launch portfolio website', completed: true, priority: 'high' },
  { id: 2, text: 'Complete advanced React certification', completed: false, priority: 'medium' },
  { id: 3, text: 'Contribute to major open source project', completed: false, priority: 'medium' },
  { id: 4, text: 'Build machine learning side project', completed: false, priority: 'low' },
  { id: 5, text: 'Write technical blog posts monthly', completed: false, priority: 'low' },
];

export default function Home() {
  const [todos, setTodos] = useState(todoItems);

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const completionPercentage = (completedTodos / totalTodos) * 100;

  return (
    <div className="min-h-screen liquid-background relative overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            {...animationPresets.hero}
            className="text-center max-w-4xl"
          >
            {/* Welcome text */}
            <AnimatedText
              text="Hello, I'm"
              animation="fadeIn"
              className="text-2xl text-white/80 mb-4"
              delay={0}
              tag="p"
            />

            {/* Name with typing effect */}
            <AnimatedText
              text="Your Name Here"
              animation="typing"
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              duration={0.1}
              cursor={true}
              repeat={false}
              tag="h1"
            />

            {/* Tagline */}
            <AnimatedText
              text="Full Stack Developer & Creative Technologist"
              animation="fadeIn"
              className="text-xl md:text-2xl text-white/90 mb-8"
              delay={1.5}
              tag="h2"
            />

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <LiquidGlassCard variant="subtle" className="p-6">
                <p className="text-white/90 leading-relaxed">
                  Passionate about building beautiful, functional web applications that
                  solve real-world problems. I love exploring new technologies, creating
                  intuitive user experiences, and contributing to the developer community.
                </p>
              </LiquidGlassCard>
            </motion.div>

            {/* Call to action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-intense px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 hover:bg-purple-600/30 transition-colors"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="w-5 h-5" />
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 hover:bg-gray-600/30 transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedText
              text="My Interests"
              animation="slideIn"
              className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
              direction="down"
              tag="h2"
            />

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.title}
                    variants={staggerItemVariants}
                    className="group"
                  >
                    <LiquidGlassCard
                      variant="default"
                      size="md"
                      hover
                      morphing
                      delay={index * 0.1}
                      className="h-full text-center group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${interest.color} flex items-center justify-center floating`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {interest.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {interest.description}
                      </p>
                    </LiquidGlassCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedText
              text="Featured Projects"
              animation="slideIn"
              className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
              direction="up"
              tag="h2"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectDemo
                  key={project.id}
                  project={project}
                  size="md"
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-intense px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 mx-auto hover:bg-purple-600/30 transition-colors"
                onClick={() => window.open('https://github.com/username', '_blank')}
              >
                <Github className="w-5 h-5" />
                View All Projects on GitHub
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Todo List Section */}
        <section id="todos" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Current Goals & Learning Path"
              animation="slideIn"
              className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
              direction="right"
              tag="h2"
            />

            <LiquidGlassCard variant="intense" className="p-8">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-white/80 mb-2">
                  <span className="font-medium">Progress</span>
                  <span className="font-medium">{completedTodos}/{totalTodos} Complete</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${completionPercentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                  />
                </div>
              </div>

              {/* Todo items */}
              <div className="space-y-4">
                {todos.map((todo, index) => (
                  <motion.div
                    key={todo.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`flex items-center gap-4 p-3 rounded-lg glass ${todo.completed ? 'opacity-60' : ''}`}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleTodo(todo.id)}
                      className="flex-shrink-0"
                    >
                      {todo.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                      ) : (
                        <Circle className="w-6 h-6 text-white/60 hover:text-white/80" />
                      )}
                    </motion.button>
                    <span className={`flex-1 text-white ${todo.completed ? 'line-through' : ''}`}>
                      {todo.text}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full glass ${
                      todo.priority === 'high' ? 'text-red-300' :
                      todo.priority === 'medium' ? 'text-yellow-300' :
                      'text-green-300'
                    }`}>
                      {todo.priority}
                    </span>
                  </motion.div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              text="Let's Connect"
              animation="slideIn"
              className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
              direction="up"
              tag="h2"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <LiquidGlassCard variant="default" size="lg" className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Get In Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white/90">your.email@example.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-purple-400" />
                    <span className="text-white/90">github.com/yourusername</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-purple-400" />
                    <span className="text-white/90">linkedin.com/in/yourprofile</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-purple-400" />
                    <span className="text-white/90">@yourhandle</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-white/20">
                  <p className="text-white/70 mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass p-3 rounded-full text-white/80 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass p-3 rounded-full text-white/80 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass p-3 rounded-full text-white/80 hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </LiquidGlassCard>

              {/* Resume Download */}
              <LiquidGlassCard variant="default" size="lg" className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <Download className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">Resume</h3>
                <p className="text-white/70 mb-6">
                  Download my resume to learn more about my experience, skills, and background.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full glass-intense px-6 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:bg-purple-600/30 transition-colors"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full glass px-6 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-600/30 transition-colors"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Online
                </motion.button>
              </LiquidGlassCard>
            </div>

            {/* Contact Form Placeholder */}
            <LiquidGlassCard variant="subtle" className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Send Me a Message</h3>
              <p className="text-white/70 mb-6">
                I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-intense px-8 py-4 rounded-full text-white font-semibold hover:bg-purple-600/30 transition-colors"
                onClick={() => window.open('mailto:your.email@example.com', '_blank')}
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Send Email
              </motion.button>
            </LiquidGlassCard>
          </div>
        </section>
      </div>
    </div>
  );
}

/*
 * VISUAL ENHANCEMENT & CUSTOMIZATION GUIDE:
 *
 * 1. BACKGROUND CUSTOMIZATION:
 *    - Change the liquid background colors in globals.css .liquid-background
 *    - Add video background: <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-30" />
 *    - Add particle effects using libraries like react-particles or three.js
 *
 * 2. CUSTOM IMAGES:
 *    - Add profile picture: <Image src="/images/profile.jpg" alt="Profile" width={200} height={200} className="rounded-full glass" />
 *    - Add project screenshots in /public/projects/screenshots/
 *    - Add background patterns with CSS: background-image: url('/images/pattern.svg')
 *
 * 3. ANIMATION ENHANCEMENTS:
 *    - Add scroll-triggered animations: use useScrollAnimation() hook from liquidGlassAnimations
 *    - Implement page transitions: <AnimatePresence mode="wait">
 *    - Add mouse tracking effects for parallax or 3D transformations
 *
 * 4. INTERACTIVE ELEMENTS:
 *    - Add confetti animation for completed todos
 *    - Implement dark/light theme toggle
 *    - Add sound effects for interactions (using Web Audio API)
 *    - Create custom cursor with glow effects
 *
 * 5. PERFORMANCE OPTIMIZATIONS:
 *    - Lazy load images and iframes
 *    - Use React.memo for expensive components
 *    - Implement virtual scrolling for large lists
 *    - Optimize animations with will-change and transform3d
 *
 * 6. ADVANCED FEATURES:
 *    - Add blog section with markdown support
 *    - Implement testimonial carousel
 *    - Create interactive timeline for experience
 *    - Add skill progress bars with animated fills
 *    - Implement search functionality for projects
 *
 * 7. DEPLOYMENT CONSIDERATIONS:
 *    - Configure next.config.ts for static export
 *    - Optimize images with next/image
 *    - Add proper meta tags for SEO
 *    - Set up analytics for tracking visitors
 *
 * 8. ACCESSIBILITY IMPROVEMENTS:
 *    - Add ARIA labels for screen readers
 *    - Implement keyboard navigation
 *    - Ensure proper color contrast ratios
 *    - Add skip navigation links
 *    - Test with screen readers
 */