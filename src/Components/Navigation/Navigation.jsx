import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = classes.nav;
  if (scrolled) {
    navbarClasses = `${navbarClasses} ${classes.scroll}`;
  }

  return (
    <div className={navbarClasses}>
      <ul className={classes.list}>
        <li>
          <NavLink exact activeClassName={classes.active} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/blog">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/forum">
            Forums
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={classes.active} to="/jobs">
            Jobs
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
