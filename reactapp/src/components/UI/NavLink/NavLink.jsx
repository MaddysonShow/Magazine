import React from "react";
import "./NavLink.scss";

const NavLink = ({ link, text, classes }) => {
  const propsClassesStr = classes ? classes : "";
  const classesStr = "nav__link " + propsClassesStr;
  return (
    <a href={link} className={classesStr}>
      {text}
    </a>
  );
};

export default NavLink;
