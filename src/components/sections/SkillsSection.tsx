import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// ✅ skillCategories moved outside so it’s stable and not a dependency
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "TypeScript", level: 90, color: "#3178C6" },
      { name: "Next.js", level: 88, color: "#000000" },
      { name: "Vue.js", level: 85, color: "#4FC08D" },
      { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Python", level: 85, color: "#3776AB" },
      { name: "Express.js", level: 88, color: "#000000" },
      { name: "MongoDB", level: 82, color: "#47A248" },
      { name: "PostgreSQL", level: 85, color: "#336791" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", level: 80, color: "#2496ED" },
      { name: "AWS", level: 75, color: "#FF9900" },
      { name: "Git", level: 95, color: "#F05032" },
      { name: "Jest", level: 85, color: "#C21325" },
      { name: "Webpack", level: 78, color: "#8DD6F9" },
    ],
  },
];

const SkillsSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  const animateSkill = (skillName: string, targetLevel: number) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = targetLevel / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentLevel = Math.min(stepValue * currentStep, targetLevel);

      setAnimatedSkills((prev) => ({
        ...prev,
        [skillName]: currentLevel,
      }));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillCategories.forEach((category) => {
              category.skills.forEach((skill) => {
                setTimeout(() => animateSkill(skill.name, skill.level), Math.random() * 500);
              });
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById("skills-section");
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []); // ✅ no warning now

  return (
    <section id="skills-section" className="min-h-screen py-20">
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
            <span className="text-gradient">Technical Skills</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My expertise across various technologies and frameworks that power modern web development.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass p-8 rounded-2xl border-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px hsl(var(--neon-cyan) / 0.1)",
              }}
            >
              <motion.h3
                className="text-2xl font-bold text-electric mb-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const animatedLevel = animatedSkills[skill.name] || 0;

                  return (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: skill.color }}
                            whileHover={{ scale: 1.2 }}
                            animate={{
                              boxShadow: `0 0 20px ${skill.color}40`,
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          />
                          <span className="font-semibold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          className="text-sm font-bold text-neon-cyan"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1 }}
                        >
                          {Math.round(animatedLevel)}%
                        </motion.span>
                      </div>

                      {/* Skill Bar */}
                      <div className="relative">
                        <div className="w-full h-3 bg-muted/30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full relative"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`,
                              width: `${animatedLevel}%`,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${animatedLevel}%` }}
                            transition={{
                              duration: 2,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"
                              animate={{ x: [-100, 200] }}
                              transition={{
                                duration: 1.5,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        </div>

                        {/* Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full blur-sm opacity-50 pointer-events-none"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${skill.color}60, transparent)`,
                            width: `${animatedLevel}%`,
                          }}
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-electric">
            Also Experienced With
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GraphQL",
              "Redux",
              "Sass",
              "WebGL",
              "Three.js",
              "D3.js",
              "Socket.io",
              "Redis",
              "Nginx",
              "Kubernetes",
              "Figma",
              "Adobe XD",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 glass rounded-full border-glow hover:bg-gradient-neon hover:text-background transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
