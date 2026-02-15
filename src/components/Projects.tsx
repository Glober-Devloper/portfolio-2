import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Zap } from 'lucide-react';
import ImageLoader from './ImageLoader';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: '3D City',
      description: 'Hyper-realistic 3D village scene with Three.js featuring procedurally-generated buildings, animated NPCs (animals/people), dynamic water physics, particle systems, soft shadow rendering, and interactive OrbitControls camera navigation.',
      image: '/pro1.png',
      tags: ['3D Graphics', 'WebGL', 'JavaScript', 'Visualization'],
      category: 'Interactive',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/The-Roshan/3dcity',
      demo: 'https://the-roshan.github.io/3dcity/'
    },
    {
      id: 2,
      title: 'Project (Academic)',
      description: 'Full-stack college attendance management system with role-based dashboards for Admin/Faculty/Student, real-time 10-day attendance analytics, card-based marking interface, subject tracking, and comprehensive student management tools.',
      image: '/pro2.png',
      tags: ['College', 'Automation', 'JavaScript', 'DevOps'],
      category: 'Backend',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/The-Roshan/project-test1',
      demo: 'https://github.com/The-Roshan/project-test1'
    },
    {
      id: 3,
      title: 'Kitu Assistant',
      description: 'Advanced Python voice assistant with speech recognition/synthesis, WhatsApp message/call/video automation, system control (brightness/volume/sleep), 50+ integrated Python libraries, and GUI-based interaction.',
      image: '/pro3.png',
      tags: ['Python', 'AI/ML', 'NLP', 'Assistant'],
      category: 'AI/ML',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      github: 'https://github.com/The-Roshan/kitu-assistant',
      demo: 'https://github.com/The-Roshan/kitu-assistant'
    },
    {
      id: 4,
      title: 'Xandu E-Commerce',
      description: 'Professional furniture e-commerce platform with 3 responsive homepage layouts, advanced product filtering, synchronized image galleries (Slick slider), shopping cart/wishlist, blog system, user account management, and checkout integration.',
      image: '/pro4.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      category: 'Full Stack',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      github: 'https://github.com/The-Roshan/xandu-Ecom',
      demo: 'https://github.com/The-Roshan/xandu-Ecom'
    },
    {
      id: 5,
      title: 'Programming',
      description: 'Multi-language library management system (C/C++/Java/Python/SQL) with file persistence, plus advanced Python voice assistant \'Surya\' featuring 47+ voice commands, Gemini AI integration, weather/translation/note-taking, and system monitoring.',
      image: '/pro1.png',
      tags: ['Java', 'Python', 'JavaScript', 'Algorithms', 'DSA'],
      category: 'Educational',
      icon: Globe,
      color: 'from-purple-500 to-cyan-500',
      github: 'https://github.com/The-Roshan/programming',
      demo: 'https://github.com/The-Roshan/programming'
    },
    {
      id: 6,
      title: 'Android Task Manager',
      description: 'A full-featured Android mobile application for task management with features like task creation, categorization, reminders, and synchronization. Built with modern Android architecture and best practices.',
      image: '/pro2.png',
      tags: ['Android', 'Kotlin', 'Firebase', 'Mobile App'],
      category: 'Mobile',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      github: 'https://github.com/The-Roshan',
      demo: 'https://github.com/The-Roshan'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise across different technologies 
              and domains. Each project represents a unique challenge and creative solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 card-interactive scroll-animate-rotate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <ImageLoader
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    fallbackSrc="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
                    loadingClassName="h-48"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center opacity-90`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 md:px-3 md:py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors touch-manipulation"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors touch-manipulation"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-animate">
            <a
              href="https://github.com/The-Roshan?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 touch-manipulation"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;