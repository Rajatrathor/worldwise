import React from "react";
import styles from "./PageNav.module.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"}>
        <Logo className={styles.logo} />
      </Link>
      <ul>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/Product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
