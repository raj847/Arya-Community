import React from "react";
import { ReactComponent as Logo } from "../Header/Assets/logo1.svg";
import classes from "./Footer.module.css";
import { footerData } from "./footerData";

function Footer() {
  return (
    <div className={classes.footer}>
      <Logo />
      {footerData.map((data, i) => {
        return (
          <div key={i}>
            <h4>{data.title}</h4>
            {data.items.map(({ Icon, item }, i) => {
              return (
                <p key={i}>
                  {Icon && <Icon />} {item}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
