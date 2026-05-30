import classNames from "./portofolios.module.scss";
import { motion } from "framer-motion";
import GlowCard from "../../components/GlowCard";
import { ExternalLink, Github, Layers } from "lucide-react";

const portfolioData = [
  {
    id: 1,
    title: "Andi Teknik",
    description:
      "Responsive landing page for a local AC repair business in Jabodetabek. Includes service catalog, pricing tiers, area coverage, and contact integration — built with smooth Framer Motion animations.",
    tech: ["Next.js", "Typescript", "Framer Motion"],
    github: "https://github.com/luqmanul0612/anditeknik",
    live: "https://anditeknik.vercel.app/",
    category: "Freelance",
    featured: true,
  },
  {
    id: 2,
    title: "Sonata Web",
    description:
      "Freelance company profile for an Indonesian oil & gas manpower consulting firm. Includes service showcases, project portfolio, latest news, and contact section with bilingual (EN/ID) support.",
    tech: ["Next.js", "Typescript"],
    github: null,
    live: "https://sonata-web-nu.vercel.app/",
    category: "Freelance",
    featured: true,
  },
  {
    id: 3,
    title: "Penerbit Dapur Kata",
    description:
      "Freelance company profile website for Penerbit DapurKata, an Indonesian book publisher. Features a searchable book catalog and contact information.",
    tech: ["Next.js", "Typescript", "MongoDB", "JWT"],
    github: null,
    live: "https://www.penerbitdapurkata.com/",
    category: "Freelance",
    featured: true,
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
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
                      <h2 className={classNames.projectTitle}>
                        {project.title}
                      </h2>
                      <span
                        className={classNames.categoryBadge}
                        style={{ color: categoryColors[project.category] }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <p className={classNames.description}>
                      {project.description}
                    </p>
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
