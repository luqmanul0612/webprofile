import classNames from "./portofolios.module.scss";
import { motion } from "framer-motion";
import GlowCard from "../../components/GlowCard";
import { ExternalLink, Github, Layers } from "lucide-react";

const portfolioData = [
  {
    id: 1,
    title: "Web Profile",
    description:
      "Personal portfolio website built with React, Vite, TypeScript, and SCSS. Features animated glow cards, framer-motion page transitions, and responsive layout.",
    tech: ["React", "TypeScript", "Vite", "SCSS", "Framer Motion"],
    github: "https://github.com/luqmanul0612/",
    live: null,
    category: "Personal",
    featured: true,
  },
  {
    id: 2,
    title: "Microfrontend Dashboard",
    description:
      "Enterprise-grade admin dashboard built using Module Federation. Multiple independently deployable micro-apps communicating through shared state.",
    tech: ["React", "Module Federation", "TypeScript", "Zustand", "Nginx"],
    github: null,
    live: null,
    category: "Work",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce web app with product catalog, cart management, user auth, and payment gateway integration.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    github: "https://github.com/luqmanul0612/",
    live: null,
    category: "Freelance",
    featured: false,
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description:
      "Chat application with real-time messaging, rooms, online presence indicator, and message history using WebSocket.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/luqmanul0612/",
    live: null,
    category: "Personal",
    featured: false,
  },
  {
    id: 5,
    title: "Component Library",
    description:
      "Internal reusable UI component library with accessible, composable components designed for consistent design language across projects.",
    tech: ["React", "TypeScript", "SCSS", "Storybook", "Radix UI"],
    github: null,
    live: null,
    category: "Work",
    featured: false,
  },
  {
    id: 6,
    title: "Landing Page Builder",
    description:
      "Drag-and-drop landing page builder for small businesses, allowing non-technical users to compose and publish pages without code.",
    tech: ["React", "dnd-kit", "TypeScript", "Firebase", "Tailwind"],
    github: "https://github.com/luqmanul0612/",
    live: null,
    category: "Freelance",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Personal: "#38bdf8",
  Work: "#34d399",
  Freelance: "#f59e0b",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const PortofoliosPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }} className={classNames.main}>
      <div className={classNames.container}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={classNames.header}
        >
          <p className={classNames.subtitle}>What I've Built</p>
          <h1 className={classNames.title}>Portfolios</h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={classNames.grid}
        >
          {portfolioData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={classNames.cardWrapper}
              data-featured={project.featured}
            >
              <GlowCard size="large" className={classNames.card}>
                <div className={classNames.cardInner}>
                  <div className={classNames.cardTop}>
                    <div className={classNames.projectIcon}>
                      <Layers size={18} />
                    </div>
                    <div className={classNames.cardActions}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classNames.actionBtn}
                          title="GitHub"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classNames.actionBtn}
                          title="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={classNames.cardContent}>
                    <div className={classNames.titleRow}>
                      <h2 className={classNames.projectTitle}>{project.title}</h2>
                      <span
                        className={classNames.categoryBadge}
                        style={{ color: categoryColors[project.category] }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <p className={classNames.description}>{project.description}</p>
                  </div>

                  <div className={classNames.techStack}>
                    {project.tech.map((t) => (
                      <span key={t} className={classNames.techBadge}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortofoliosPage;
