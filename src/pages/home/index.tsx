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
  {
    icon: <Github />,
    url: "https://github.com/luqmanul0612/",
  },
  {
    icon: <Linkedin />,
    url: "https://linkedin.com/in/luqmanul0612/",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/luqmanul.hakem/",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const contactMe = () => {
    navigate("/contact");
  };

  const onClickUrl = (url: string): void => {
    window.open(url, "_blank");
  };

  return (
    <motion.div exit={{ opacity: 0 }} className={classNames.main}>
      <div className={classNames.container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={classNames.content}
        >
          <GlowCard size="large" className={classNames.mainContent}>
            <div className={classNames.textWrapper}>
              <p>Web Developer</p>
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
                With 3 years of experience in creating and maintaining code for
                interactive and user-friendly web applications
              </p>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={classNames.imageWrapper}
        >
          <img
            src={meBlack}
            onLoad={() => setIsLoaded(true)}
            className={clsx(classNames.image, {
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
          <div
            className={clsx(classNames.circle, {
              [classNames.isLoaded]: isLoaded,
            })}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
