import classNames from "./home.module.scss";
import meBlack from "../../assets/me-black-white.png";
import Instagram from "/src/assets/instagram.svg?react";
import Linkedin from "/src/assets/linkedin.svg?react";
import Github from "/src/assets/github.svg?react";
import GlowCard from "../../components/GlowCard";
import GlowButton from "../../components/GlowButton";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ResumeBtn from "../../components/ResumeButton";

const medsosData = [
  { icon: <Github />, url: "https://github.com/luqmanul0612/" },
  { icon: <Linkedin />, url: "https://linkedin.com/in/luqmanul0612/" },
  { icon: <Instagram />, url: "https://www.instagram.com/luqmanul.hakem/" },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Vite", "SCSS", "Framer Motion", "Zustand"],
  },
  {
    label: "Tools & Infra",
    skills: ["Nginx", "Git", "Vercel", "GitHub"],
  },
  {
    label: "Other",
    skills: ["Node.js", "REST API", "GraphQL", "Module Federation", "Radix UI"],
  },
];

const statsData = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "5★", label: "Client Rating" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const contactMe = () => navigate("/contact");
  const onClickUrl = (url: string) => window.open(url, "_blank");

  return (
    <motion.div exit={{ opacity: 0 }} className={classNames.main}>
      <div className={classNames.container}>
        {/* Hero Section */}
        <div className={classNames.hero}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className={classNames.content}
          >
            <GlowCard size="large" className={classNames.mainContent}>
              <div className={classNames.textWrapper}>
                <p>Frontend Developer</p>
                <p>
                  <span>Hello</span> I'm
                </p>
                <div className={classNames.name}>
                  Muhammad <span>Luqmanul</span> Hakim
                  <div className={classNames.line}>
                    <div className={classNames.dot} />
                  </div>
                </div>
                <p>
                  Focused on delivering reliable, user-centered web applications
                  that meet the demands of high-stakes industries. Experienced
                  in building and shipping fintech products with React.js and
                  Next.js in cross-functional teams.
                </p>
              </div>

              {/* Stats row */}
              <div className={classNames.statsRow}>
                {statsData.map((s) => (
                  <div key={s.label} className={classNames.statItem}>
                    <span className={classNames.statValue}>{s.value}</span>
                    <span className={classNames.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className={classNames.buttonWrapper}>
                <GlowButton
                  particles={15}
                  playAnimationOnMobile
                  onClick={contactMe}
                >
                  Contact Me
                </GlowButton>
                <div className={classNames.buttonGroup}>
                  <div className={classNames.medsosContent}>
                    {medsosData.map((data) => (
                      <GlowButton
                        key={data.url}
                        onClick={() => onClickUrl(data.url)}
                        isIcon
                        particles={10}
                      >
                        {data.icon}
                      </GlowButton>
                    ))}
                  </div>
                  <ResumeBtn />
                </div>
              </div>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className={classNames.imageWrapper}
          >
            <img
              src={meBlack}
              onLoad={() => setIsLoaded(true)}
              className={clsx(classNames.image, {
                [classNames.isLoaded]: isLoaded,
              })}
            />
            <div className={classNames.circleWrapper}>
              <div
                className={clsx(classNames.circle, {
                  [classNames.isLoaded]: isLoaded,
                })}
              />
              <div
                className={clsx(classNames.circle, {
                  [classNames.isLoaded]: isLoaded,
                })}
              />
              <div
                className={clsx(classNames.circle, {
                  [classNames.isLoaded]: isLoaded,
                })}
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={classNames.skillsSection}
        >
          <p className={classNames.skillsLabel}>Tech Stack</p>
          <div className={classNames.skillGroups}>
            {skillGroups.map((group) => (
              <GlowCard key={group.label} className={classNames.skillCard}>
                <p className={classNames.groupLabel}>{group.label}</p>
                <div className={classNames.skillList}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={classNames.skillBadge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
