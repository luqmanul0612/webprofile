import { useLocation, useNavigate } from "react-router-dom";
import classNames from "./navbar.module.scss";
import GlowCard from "../GlowCard";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ResumeBtn from "../ResumeButton";
import { Menu, X } from "lucide-react";

const menuData = [
  { label: "Home", path: "/" },
  { label: "Portfolios", path: "/portofolios" },
  { label: "Experiences", path: "/experiences" },
  { label: "Contact", path: "/contact" },
];

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar: FC<NavbarProps> = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [startAnimate, setStartAnimate] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={classNames.main}
    >
      <div className={classNames.container}>
        <GlowCard size="large" className={classNames.navbar}>
          <div className={classNames.navInner}>
            <div className={classNames.rightItems}>
              <ul className={classNames.menu}>
                {menuData.map((data) => (
                  <li
                    key={data.path}
                    onClick={() => handleNavigate(data.path)}
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
                    ? { maxWidth: 120, opacity: 1, pointerEvents: "auto" }
                    : { maxWidth: 0, opacity: 0, pointerEvents: "none" }
                }
                style={{ overflow: startAnimate ? "hidden" : "visible" }}
                onAnimationStart={() =>
                  requestAnimationFrame(() => setStartAnimate(true))
                }
                onAnimationComplete={() =>
                  requestAnimationFrame(() => setStartAnimate(false))
                }
              >
                <div className={classNames.resume}>
                  <ResumeBtn />
                </div>
              </motion.div>
              <button
                className={classNames.mobileMenu}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </GlowCard>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={classNames.mobileDropdown}
            >
              <div className={classNames.mobileDropdownCard}>
                <ul className={classNames.mobileMenuList}>
                  {menuData.map((data) => (
                    <li
                      key={data.path}
                      onClick={() => handleNavigate(data.path)}
                      className={clsx(classNames.mobileMenuItem, {
                        [classNames.mobileActive]: pathname === data.path,
                      })}
                    >
                      <span className={classNames.mobileDot} />
                      {data.label}
                    </li>
                  ))}
                </ul>
                <div className={classNames.mobileResume}>
                  <ResumeBtn />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">{props.children}</AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
