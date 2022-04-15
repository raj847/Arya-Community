import React from "react";
import classes from "./Header.module.css";
import { ReactComponent as Logo } from "./Assets/logo4.svg";
import UserHeader from "./UserHeader";
import LoginHeader from "./LoginHeader";
import { useSelector } from "react-redux";

function Header() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <div className={classes.headerRight}>
          {isLogin && <UserHeader />}
          {!isLogin && <LoginHeader />}
        </div>
      </div>
    </div>
  );
}

export default Header;
