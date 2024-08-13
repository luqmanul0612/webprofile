import { useLocation, useNavigate } from "react-router-dom";
import classNames from "./navbar.module.scss";
import GlowCard from "../GlowCard";
import clsx from "clsx";
import { FC } from "react";
import GlowButton from "../GlowButton";

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
];

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar: FC<NavbarProps> = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={classNames.main}>
      <div className={classNames.container}>
        <GlowCard size="large" className={classNames.navbar}>
          <div className={classNames.logo}>
            {pathname !== "/" && (
              <span className={classNames.name}>Luqman</span>
            )}
            {pathname === "/" && <div className={classNames.dot} />}
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
            <GlowButton className={classNames.btnResume} particles={15}>
              Resume
            </GlowButton>
          </div>
        </GlowCard>
        {props.children}
      </div>
    </div>
  );
};

export default Navbar;
