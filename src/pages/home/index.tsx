import classNames from "./home.module.scss";
import meBlack from "../../assets/me-black-white.png";
import Instagram from "/src/assets/instagram.svg?react";
import Linkedin from "/src/assets/linkedin.svg?react";
import Github from "/src/assets/github.svg?react";
import GlowCard from "../../components/GlowCard";
import GlowButton from "../../components/GlowButton";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className={classNames.main}>
      <div className={classNames.container}>
        <div className={classNames.content}>
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
              <GlowButton particles={15}>Contact Me</GlowButton>
              <div className={classNames.medsosContent}>
                <GlowButton isIcon particles={10}>
                  <Instagram className={classNames.medsos} />
                </GlowButton>
                <GlowButton isIcon particles={10}>
                  <Linkedin className={classNames.medsos} />
                </GlowButton>
                <GlowButton isIcon particles={10}>
                  <Github className={classNames.medsos} />
                </GlowButton>
              </div>
            </div>
          </GlowCard>
        </div>
        <div className={classNames.imageWrapper}>
          <img src={meBlack} className={classNames.image} />
          <div className={classNames.circle}/>
          {/* <motion.svg
            className={classNames.circle}
            viewBox="0 0 530 530"
            xmlns="http://w3.org/2000/svg"
          >
            <motion.circle
              cx="265"
              cy="265"
              r="250"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
