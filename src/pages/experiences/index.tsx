import classNames from "./experiences.module.scss";
import { motion } from "framer-motion";
import GlowCard from "../../components/GlowCard";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiencesData = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "PT Mandiri International Technology",
    location: "Jakarta, Indonesia",
    period: "January 2026 - Present",
    type: "Full-time",
    description:
      "Developing and delivering new features for an operational banking system using React.js, collaborating within a cross-functional development team with a focus on performance and UI consistency.",
    highlights: [
      "Developed and delivered new features for an operational banking system using React.js",
      "Optimized frontend performance through code-splitting and bundle optimization, resulting in faster load times",
      "Built and maintained reusable React.js components, ensuring UI consistency across the team",
      "Partnered with QA teams to identify, troubleshoot, and resolve bugs, maintaining system reliability",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "REST API",
      "Tailwind CSS | AntD",
      "Micro-frontend",
    ],
    url: null,
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "PT Brilliann Nuswantara Bhagawanta",
    location: "Jakarta, Indonesia",
    period: "September 2024 - January 2026",
    type: "Full-time",
    description:
      "Built and maintained a custom payment gateway system using Next.js, covering end-to-end transaction flows including checkout, reconciliation, and settlement.",
    highlights: [
      "Built and maintained a custom payment gateway system using Next.js end-to-end",
      "Implemented secure authentication and transaction workflows compliant with financial standards",
      "Built a reusable React.js component library, accelerating feature development and maintaining UI consistency",
      "Collaborated with backend and product teams to align frontend behavior with payment service requirements",
      "Collaborated with QA teams to diagnose and resolve critical bugs, maintaining a stable payment experience",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "REST API",
      "Tailwind CSS",
      "Micro-frontend",
    ],
    url: null,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "PT Infosys Solusi Terpadu",
    location: "Yogyakarta, Indonesia",
    period: "February 2022 - September 2024",
    type: "Full-time",
    description:
      "Developed and maintained a large-scale internet banking platform using React.js and TypeScript, integrating RESTful APIs and third-party financial services to power core banking features.",
    highlights: [
      "Translated UX/UI designs into responsive, interactive, and cross-browser-compatible interfaces",
      "Integrated RESTful APIs and third-party financial services for fund transfers, account statements, and bill payments",
      "Built and maintained a shared React.js component library across multiple banking products",
      "Implemented secure user authentication and transaction authorization flows including OTP validation and session timeout",
      "Partnered with QA teams to reproduce, triage, and resolve high-priority bugs",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "REST API",
      "Material UI | AntD",
      "Micro-frontend",
    ],
    url: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ExperiencesPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }} className={classNames.main}>
      <div className={classNames.container}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={classNames.header}
        >
          <p className={classNames.subtitle}>My Journey</p>
          <h1 className={classNames.title}>Work Experiences</h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={classNames.timeline}
        >
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={classNames.timelineItem}
            >
              <div className={classNames.timelineDot} />
              {index < experiencesData.length - 1 && (
                <div className={classNames.timelineLine} />
              )}
              <GlowCard size="large" className={classNames.card}>
                <div className={classNames.cardTop}>
                  <div className={classNames.cardHeader}>
                    <div className={classNames.iconWrapper}>
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h2 className={classNames.role}>{exp.role}</h2>
                      <div className={classNames.meta}>
                        <span className={classNames.company}>
                          {exp.company}
                        </span>
                        {exp.url && (
                          <ExternalLink
                            size={12}
                            className={classNames.externalIcon}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={classNames.badges}>
                    <span className={classNames.typeBadge}>{exp.type}</span>
                  </div>
                </div>

                <div className={classNames.cardMeta}>
                  <span className={classNames.metaItem}>
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className={classNames.metaItem}>
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>

                <p className={classNames.description}>{exp.description}</p>

                <ul className={classNames.highlights}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} className={classNames.highlight}>
                      <span className={classNames.bullet} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className={classNames.techStack}>
                  {exp.tech.map((t) => (
                    <span key={t} className={classNames.techBadge}>
                      {t}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperiencesPage;
