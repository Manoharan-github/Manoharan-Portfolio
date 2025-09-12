import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Instagram, ExternalLink } from "lucide-react";

const SocialSection = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      username: "@Manoharan-github",
      description: "Open source projects and code repositories",
      icon: Github,
      color: "#333",
      gradient: "from-gray-700 to-gray-900",
      link: "https://github.com/Manoharan-github",
      stats: "3 repositories",
      followers: "0 followers" // ✅ added to prevent split error
    },
    {
      platform: "LinkedIn", 
      username: "@Manoharan N",
      description: "Professional networking and career updates",
      followers: "33 connections",
      icon: Linkedin,
      color: "#0077B5",
      gradient: "from-blue-600 to-blue-800",
      link: "https://www.linkedin.com/in/manoharan-n-613755319/",
      stats: "33 connections"
    },
    {
      platform: "Twitter",
      username: "@yourusername", 
      description: "Tech insights, tips, and industry discussions",
      followers: "3.1K followers",
      icon: Twitter,
      color: "#1DA1F2",
      gradient: "from-blue-400 to-blue-600",
      link: "https://twitter.com/yourusername",
      stats: "800 following"
    },
    
    {
      platform: "Instagram",
      username: "@m_a_n_o_vk",
      description: "Behind the scenes and tech lifestyle",
      followers: "621 followers", // ✅ added to prevent split error
      icon: Instagram,
      color: "#E4405F",
      gradient: "from-pink-500 to-rose-600",
      link: "https://instagram.com/m_a_n_o_vk",
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
            <span className="text-gradient">Social Links</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Stay connected with me across various social platforms for updates, insights, and collaborations.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            
            return (
              <motion.div
                key={social.platform}
                className="glass rounded-2xl overflow-hidden border-glow group cursor-pointer relative"
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: `0 20px 40px ${social.color}30`
                }}
                onClick={() => window.open(social.link, '_blank')}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-10`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                {/* Content */}
                <div className="relative p-8">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="p-3 rounded-xl group-hover:shadow-lg transition-all duration-300"
                        style={{ backgroundColor: `${social.color}20` }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 360,
                          backgroundColor: social.color 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent 
                          className="w-6 h-6 group-hover:text-white transition-colors duration-300" 
                          style={{ color: social.color }}
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-electric text-lg">{social.platform}</h3>
                        <p className="text-muted-foreground text-sm">{social.username}</p>
                      </div>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                    >
                      <ExternalLink className="w-5 h-5 text-neon-cyan" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {social.description}
                  </motion.p>

                  {/* Stats */}
                  <div className="space-y-3">
                    <motion.div
                      className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border group-hover:border-neon-cyan/50 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <p className="text-sm text-muted-foreground">Followers</p>
                        <motion.p 
                          className="font-bold text-neon-cyan text-lg"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.3 
                          }}
                        >
                          {(social.followers ?? "0 followers").split(" ")[0]}
                        </motion.p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Content</p>
                        <p className="font-semibold text-electric">{social.stats}</p>
                      </div>
                    </motion.div>

                    {/* Follow Button */}
                    <motion.div
                      className={`flex items-center justify-center py-3 px-4 rounded-lg border border-border group-hover:border-neon-cyan/50 transition-all duration-300 bg-gradient-to-r from-${social.color}10 to-transparent`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span
                        className="text-sm font-medium"
                        style={{ color: social.color }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Follow on {social.platform}
                      </motion.span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${social.color}20 0%, transparent 70%)`
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Quick Connect Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
            <p className="text-muted-foreground mb-6 max-w-md">
              Choose your preferred platform to stay updated with my latest work, insights, and tech adventures.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.slice(0, 3).map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.button
                    key={social.platform}
                    onClick={() => window.open(social.link, '_blank')}
                    className="flex items-center space-x-2 px-4 py-2 bg-muted/20 rounded-lg border border-border hover:border-neon-cyan/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent 
                      className="w-4 h-4" 
                      style={{ color: social.color }} 
                    />
                    <span className="text-sm font-medium">{social.platform}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
