import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const navStyle = (navData) => {
    return navData.isActive ? classes.active : "";
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="home" className={navStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className={navStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="help" className={navStyle}>
              Help
            </NavLink>
          </li>

          <li>
            <NavLink to="ourlocation" className={navStyle}>
              Locate us 
            </NavLink>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
