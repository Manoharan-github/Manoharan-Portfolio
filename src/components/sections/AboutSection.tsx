import { motion } from "framer-motion";
import { Code2, Award, Users, Coffee } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Code2, number: "0+", label: "Projects Completed" },
    { icon: Award, number: "0", label: "Years Experience" },
    { icon: Users, number: "0+", label: "Happy Clients" },
    { icon: Coffee, number: "1000+", label: "Cups of Coffee" },
  ];

  const achievements = [
    "Full-Stack Developer specializing in React & Node.js",
    "Expert in modern web technologies and frameworks",
    "Passionate about creating scalable, performant applications",
    "Strong focus on user experience and clean code architecture",
    "Experienced in agile development and team collaboration",
  ];

  return (
    <section className="min-h-screen flex items-center py-20">
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
            <span className="text-gradient">About Me</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Transforming ideas into digital reality through innovative development and thoughtful design.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl border-glow">
              <h3 className="text-2xl font-bold text-electric mb-6">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
              My journey in tech began with a deep curiosity about how websites and apps come to life. I started learning the basics of HTML, CSS, and JavaScript, which opened the door to building my own projects. Over time, I explored Python, MySQL, and backend development, strengthening my skills step by step. What started as curiosity has now grown into a passion for creating, learning, and improving every day. 🚀
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.⚡
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 glass rounded-lg border-glow hover:bg-muted/20 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-2 h-2 bg-gradient-neon rounded-full mt-3 animate-glow-pulse" />
                  <p className="text-muted-foreground">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="glass p-8 rounded-2xl border-glow text-center hover:bg-muted/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 300 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px hsl(var(--neon-cyan) / 0.3)"
                  }}
                >
                  <motion.div
                    className="inline-flex p-4 bg-gradient-neon rounded-full mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-background" />
                  </motion.div>
                  <motion.h4
                    className="text-3xl font-bold text-gradient mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 400 
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.h4>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;