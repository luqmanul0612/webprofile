import { useLocation, useNavigate } from "react-router-dom";
import classNames from "./navbar.module.scss";
import GlowCard from "../GlowCard";
import clsx from "clsx";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ResumeBtn from "../ResumeButton";
import { ChartNoAxesColumn } from "lucide-react";

const menuData = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Portofolios",
    path: "/portofolios",
  },
  {
    label: "Experiences",
    path: "/experiences",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar: FC<NavbarProps> = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [startAnimate, setStartAnimate] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={classNames.main}
    >
      <div className={classNames.container}>
        <GlowCard size="large" className={classNames.navbar}>
          <div className={classNames.logo}>
            <motion.span
              initial={{ opacity: 0, display: "none" }}
              animate={{
                opacity: pathname !== "/" ? 1 : 0,
                display: pathname !== "/" ? "flex" : "none",
              }}
              className={classNames.name}
            >
              Luqman
            </motion.span>
          </div>
          <div className={classNames.rightItems}>
            <ul className={classNames.menu}>
              {menuData.map((data) => (
                <li
                  key={data.path}
                  onClick={() => navigate(data.path)}
                  className={clsx(classNames.menuItem, {
                    [classNames.active]: pathname === data.path,
                  })}
                >
                  <div className={classNames.dot} />
                  {data.label}
                </li>
              ))}
            </ul>
            <motion.div
              animate={
                pathname !== "/"
                  ? { maxWidth: 120, opacity: 1 }
                  : { maxWidth: 0, opacity: 0 }
              }
              style={{ overflow: startAnimate ? "hidden" : "visible" }}
              onAnimationStart={() =>
                requestAnimationFrame(() => setStartAnimate(true))
              }
              onAnimationComplete={() =>
                requestAnimationFrame(() => setStartAnimate(false))
              }
            >
              <ResumeBtn />
            </motion.div>
            <button className={classNames.mobileMenu}>
              <ChartNoAxesColumn size={25} />
            </button>
          </div>
        </GlowCard>
        <AnimatePresence mode="wait">{props.children}</AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
