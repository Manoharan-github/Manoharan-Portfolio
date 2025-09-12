import { motion } from "framer-motion";
import { ExternalLink, Star, Trophy, Code, GitBranch } from "lucide-react";

const ProfilesSection = () => {
  const profiles = [
    {
      id: 1,
      platform: "GitHub",
      username: "@Manoharan-github",
      description: "Open source contributions and personal projects",
      stats: { label: "Repositories", value: "3", icon: GitBranch },
      followers: "0",
      gradient: "from-gray-700 to-gray-900",
      icon: "🐙",
      link: "https://github.com/Manoharan-github"
    },
    {
      id: 2,
      platform: "LeetCode",
      username: "@Mano1517",
      description: "Algorithmic problem solving and competitive programming",
      stats: { label: "Problems Solved", value: "3", icon: Code },
      followers: "0",
      gradient: "from-orange-500 to-yellow-500",
      icon: "💻",
      link: "https://leetcode.com/u/Mano1517/"
    },
    {
      id: 3,
      platform: "LinkedIn",
      username: "@Manoharan N",
      description: "Professional networking and industry insights",
      stats: { label: "Connections", value: "33", icon: Star },
      followers: "33",
      gradient: "from-blue-600 to-blue-800",
      icon: "💼",
      link: "https://www.linkedin.com/in/manoharan-n-613755319/"
    },
    {
      id: 4,
      platform: "HackerRank",
      username: "@Manoharan_N",
      description: "Coding challenges and skill assessments",
      stats: { label: "Score", value: "1890", icon: Trophy },
      followers: "Bronze Level",
      gradient: "from-purple-600 to-pink-600",
      icon: "🏆",
      link: "https://www.hackerrank.com/profile/Manoharan_N"
    },
    {
      id: 5,
      platform: "Twitter",
      username: "@yourusername",
      description: "Tech insights and development tips",
      stats: { label: "Followers", value: "3.1K", icon: Star },
      followers: "800 Following",
      gradient: "from-blue-400 to-blue-600",
      icon: "🐦",
      link: "https://twitter.com/yourusername"
    },
  ];

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
            <span className="text-gradient">Coding Profiles</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Connect with me across various platforms where I share code, solve problems, and engage with the tech community.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const StatIcon = profile.stats.icon;
            
            return (
              <motion.div
                key={profile.id}
                className="glass rounded-2xl overflow-hidden border-glow group cursor-pointer"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px hsl(var(--neon-cyan) / 0.3)"
                }}
                onClick={() => window.open(profile.link, '_blank')}
              >
                {/* Platform Header */}
                <div className={`h-20 bg-gradient-to-r ${profile.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-6">
                    <div className="flex items-center space-x-3">
                      <motion.span 
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {profile.icon}
                      </motion.span>
                      <div>
                        <h3 className="font-bold text-white">{profile.platform}</h3>
                        <p className="text-white/80 text-sm">{profile.username}</p>
                      </div>
                    </div>
                    <motion.div
                      className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-6">
                  <motion.p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {profile.description}
                  </motion.p>

                  {/* Stats */}
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border group-hover:border-neon-cyan/50 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="p-2 bg-gradient-neon rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <StatIcon className="w-4 h-4 text-background" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground">{profile.stats.label}</p>
                          <p className="font-bold text-electric text-lg">{profile.stats.value}</p>
                        </div>
                      </div>
                      <motion.div
                        className="text-right"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-sm text-muted-foreground">Followers/Rank</p>
                        <p className="font-semibold text-neon-cyan">{profile.followers}</p>
                      </motion.div>
                    </motion.div>

                    {/* Visit Profile Button */}
                    <motion.div
                      className="flex items-center justify-center py-3 px-4 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-lg border border-border group-hover:border-neon-cyan/50 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-sm font-medium text-neon-cyan group-hover:text-neon-purple transition-colors duration-300">
                        Visit {profile.platform} Profile
                      </span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="w-4 h-4 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass p-8 rounded-2xl border-glow inline-block"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px hsl(var(--neon-cyan) / 0.2)"
            }}
          >
            <h3 className="text-2xl font-bold text-electric mb-4">
              Let's Connect!
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow me on these platforms for the latest updates and collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://github.com/Manoharan-github" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow on GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/manoharan-n-613755319/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect on LinkedIn
              </motion.a>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilesSection;