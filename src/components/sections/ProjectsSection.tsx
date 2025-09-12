import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Eye, Plus, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showMiniProjects, setShowMiniProjects] = useState(false);

  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "AI-Powered Dashboard",
      description: "Analytics dashboard with machine learning insights and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Real-time social platform with chat, posts, and advanced user interactions.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["React Native", "Firebase", "Socket.io", "Redux"],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["Vue.js", "Web3.js", "Solidity", "MetaMask"],
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["React", "Express", "PostgreSQL", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["React", "OpenWeather API", "Mapbox", "Styled Components"],
      github: "#",
      live: "#",
    },
    {
      id: 7,
      title: "Video Streaming Platform",
      description: "Netflix-style streaming platform with user authentication and content management.",
      image: "https://images.unsplash.com/photo-1489599856878-4b4c15d87bb9?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["React", "Node.js", "AWS S3", "JWT"],
      github: "#",
      live: "#",
    },
    {
      id: 8,
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search and virtual tour features.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["Next.js", "Prisma", "Three.js", "Stripe"],
      github: "#",
      live: "#",
    },
  ];

  const miniProjects = [
    {
      id: 1,
      title: "Password Generator",
      description: "Secure password generator with customizable options",
      tech: ["JavaScript", "CSS", "HTML"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Color Palette Generator",
      description: "Beautiful color palette generator for designers",
      tech: ["React", "CSS", "Color API"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "QR Code Generator",
      description: "Generate QR codes for URLs and text",
      tech: ["JavaScript", "QR.js", "HTML5"],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Unit Converter",
      description: "Multi-unit conversion tool for various measurements",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Expense Tracker",
      description: "Simple expense tracking with local storage",
      tech: ["JavaScript", "Chart.js", "LocalStorage"],
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Markdown Previewer",
      description: "Live markdown editor and previewer",
      tech: ["React", "Marked.js", "CSS"],
      github: "#",
      live: "#",
    },
  ];

  const projects = showAllProjects ? allProjects : allProjects.slice(0, 4);

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass rounded-2xl overflow-hidden border-glow group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px hsl(var(--neon-cyan) / 0.2)"
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-neon/80 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.github}
                    className="p-3 bg-background/20 rounded-full backdrop-blur-sm hover:bg-background/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-6 h-6 text-background" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="p-3 bg-background/20 rounded-full backdrop-blur-sm hover:bg-background/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-6 h-6 text-background" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-3 text-electric group-hover:text-neon-cyan transition-colors duration-300"
                  layoutId={`title-${project.id}`}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p
                  className="text-muted-foreground mb-4 leading-relaxed"
                  layoutId={`description-${project.id}`}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-muted/50 rounded-full text-sm font-medium border border-border hover:border-neon-cyan/50 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + techIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4 group-hover:text-neon-cyan transition-colors duration-300" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-neon text-background rounded-lg hover:shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAllProjects && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAllProjects(true)}
              className="btn-neon group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Show More Projects</span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Plus className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* Mini Projects Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-gradient">Mini Projects</span>
            </motion.h3>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Small but impactful projects showcasing specific skills and creative solutions.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showMiniProjects ? miniProjects : miniProjects.slice(0, 3)).map((project, index) => (
              <motion.div
                key={project.id}
                className="glass rounded-xl p-6 border-glow group hover:border-neon-cyan/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px hsl(var(--neon-cyan) / 0.2)"
                }}
              >
                <motion.h4
                  className="text-xl font-bold mb-3 text-electric"
                  whileHover={{ color: "hsl(var(--neon-cyan))" }}
                >
                  {project.title}
                </motion.h4>
                
                <motion.p
                  className="text-muted-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-muted/30 text-neon-cyan rounded-full border border-neon-cyan/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, borderColor: "hsl(var(--neon-cyan))" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 group text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-3 h-3 group-hover:text-neon-cyan transition-colors duration-300" />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-gradient-neon text-background rounded-lg hover:shadow-glow-cyan transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Live</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Mini Projects Button */}
          {!showMiniProjects && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setShowMiniProjects(true)}
                className="btn-electric group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Show All Mini Projects</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;