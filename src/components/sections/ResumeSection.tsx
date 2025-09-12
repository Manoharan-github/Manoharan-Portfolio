import { motion } from "framer-motion";
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from "lucide-react";

const ResumeSection = () => {
  const resumeHighlights = [
    {
      icon: Briefcase,
      title: "Professional Experience",
      items: [
        "Fresher as Full-Stack Developer",
        
      ]
    },
    {
      icon: GraduationCap,
      title: "Education & Certifications",
      items: [
        "B.E Computer Science - Chendhuran college of engineering and technology",
        "DEEE - Annamalai polytechnic college",
        
      ]
    },
    {
      icon: Award,
      title: "Key Achievements",
      items: [
        
      ]
    }
  ];

  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume file
    console.log("Downloading resume...");
    // You can replace this with an actual file download
    const link = document.createElement('a');
    link.href = '/MANOHARAN_N.pdf'; // Path to your resume file
    link.download = 'MANOHARAN_N.pdf';
    link.click();
  };

  const handlePreviewResume = () => {
    // In a real application, this would open the resume in a new tab
    window.open('/MANOHARAN_N.pdf','_blank');
  };

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
            <span className="text-gradient">Resume</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Download my comprehensive resume to learn more about my experience, skills, and achievements.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Preview Card */}
          <motion.div
            className="glass p-8 rounded-2xl border-glow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px hsl(var(--neon-cyan) / 0.2)"
            }}
          >
            {/* Resume Preview */}
            <motion.div
              className="relative mb-8 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card border-2 border-border rounded-lg p-8 h-96 overflow-hidden relative">
                {/* Mock Resume Content */}
                <div className="space-y-4">
                  <div className="text-center border-b border-border pb-4">
                    <motion.div
                      className="w-16 h-16 bg-gradient-neon rounded-full mx-auto mb-3"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <h3 className="text-xl font-bold text-electric">Manoharan N</h3>
                    <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                    <p className="text-xs text-muted-foreground">manoharan200384@gmail.com • +916374580818</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-cyan mb-2 text-sm">PROFESSIONAL SUMMARY</h4>
                    <div className="space-y-1">
                      <div className="h-2 bg-muted/30 rounded w-full"></div>
                      <div className="h-2 bg-muted/30 rounded w-4/5"></div>
                      <div className="h-2 bg-muted/30 rounded w-3/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-cyan mb-2 text-sm">EXPERIENCE</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="h-2 bg-muted/30 rounded w-2/3 mb-1"></div>
                        <div className="h-1 bg-muted/20 rounded w-1/2 mb-1"></div>
                        <div className="h-1 bg-muted/20 rounded w-full"></div>
                        <div className="h-1 bg-muted/20 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-cyan mb-2 text-sm">SKILLS</h4>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="h-1 bg-muted/30 rounded"></div>
                      <div className="h-1 bg-muted/30 rounded"></div>
                      <div className="h-1 bg-muted/30 rounded"></div>
                      <div className="h-1 bg-muted/30 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent"></div>
              </div>

              {/* Preview Overlay */}
              <motion.div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"
                initial={false}
              >
                <motion.button
                  onClick={handlePreviewResume}
                  className="flex items-center space-x-2 btn-electric"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  <span>Preview Resume</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <motion.button
                onClick={handleDownloadResume}
                className="w-full btn-neon group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  <span className="font-semibold">Download Resume (PDF)</span>
                </div>
                
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-lg"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <motion.button
                onClick={handlePreviewResume}
                className="w-full btn-electric group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <FileText className="w-5 h-5" />
                  <span className="font-semibold">View Online</span>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {resumeHighlights.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              
              return (
                <motion.div
                  key={section.title}
                  className="glass p-6 rounded-2xl border-glow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px hsl(var(--neon-cyan) / 0.15)"
                  }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      className="p-3 bg-gradient-neon rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-5 h-5 text-background" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-electric">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start space-x-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: sectionIndex * 0.2 + itemIndex * 0.1 + 0.8 
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-neon rounded-full mt-2 group-hover:animate-glow-pulse"
                          whileHover={{ scale: 1.5 }}
                        />
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Stats */}
            <motion.div
              className="glass p-6 rounded-2xl border-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px hsl(var(--neon-cyan) / 0.15)"
              }}
            >
              <h3 className="text-xl font-bold text-electric mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "Fresher" },
                  { label: "Projects Completed", value: "3+" },
                  { label: "Technologies Mastered", value: "5+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 bg-muted/20 rounded-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.4 + index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.p
                      className="text-2xl font-bold text-gradient"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;