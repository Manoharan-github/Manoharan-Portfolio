import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "./ui/navigation";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

import ProfilesSection from "./sections/ProfilesSection";
import ContactSection from "./sections/ContactSection";
import ResumeSection from "./sections/ResumeSection";
import SocialSection from "./sections/SocialSection";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: "hero", component: HeroSection, title: "Hero" },
    { id: "about", component: AboutSection, title: "About" },
    { id: "projects", component: ProjectsSection, title: "Projects" },
    { id: "skills", component: SkillsSection, title: "Skills" },
    { id: "profiles", component: ProfilesSection, title: "Profiles" },
    { id: "contact", component: ContactSection, title: "Contact" },
    { id: "resume", component: ResumeSection, title: "Resume" },
    { id: "social", component: SocialSection, title: "Social" },
  ];

  const handleNavigate = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Track which section is currently in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = sectionsRef.current[id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scrolling with mouse wheel (optional enhancement)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow normal scrolling - no custom wheel behavior
      // This lets users scroll naturally through the content
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="relative bg-background text-foreground">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content - All sections visible for smooth scrolling */}
      <main className="relative">
        {sections.map(({ id, component: SectionComponent }, index) => (
          <motion.section
            key={id}
            id={id}
            ref={(el) => { sectionsRef.current[id] = el; }}
            className="min-h-screen"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionComponent onNavigate={handleNavigate} />
          </motion.section>
        ))}
      </main>


      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-muted/20 z-30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="h-full bg-gradient-neon"
          style={{
            scaleX: (sections.findIndex(s => s.id === activeSection) + 1) / sections.length,
            transformOrigin: "left"
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => handleNavigate("hero")}
        className="fixed bottom-6 right-6 p-3 glass rounded-full border-glow z-30 opacity-0"
        animate={{ 
          opacity: activeSection !== "hero" ? 1 : 0,
          scale: activeSection !== "hero" ? 1 : 0.8
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>

      {/* Navigation Instructions */}
      <motion.div
        className="fixed bottom-6 left-6 glass p-3 rounded-lg border-glow z-30 hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <p className="text-xs text-muted-foreground">
          Scroll naturally or use navigation menu
        </p>
      </motion.div>
    </div>
  );
};

export default Portfolio;