import { Outlet, useLocation } from "react-router-dom";
import classNames from "./navbar.module.scss";
import GlowCard from "../GlowCard";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className={classNames.main}>
      <div className={classNames.container}>
        <GlowCard size="large" className={classNames.navbar}>
        {pathname !== "/" && <div className={classNames.logo}>Luqman</div>}
        </GlowCard>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
