import React, { useState } from "react";
import { links } from "./data";

import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };
  return (
    <nav className={!navbar ? "navbar-items" : "navbar-items active"}>
      <h2 className="navbar-logo" onClick={() => scrollToElement("Home")}>
        LOGO
      </h2>

      <div className="toggler" onClick={() => setToggle(!toggle)}>
        <i className={toggle ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      <ul className={toggle ? "nav-links show-links" : "nav-links"}>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                exact
                activeStyle={{
                  color: "black",
                  background: "#a2e7f4",
                  borderRadius: "10px",
                }}
                className="navlink"
                to={item.url}
                onClick={() => scrollToElement(item.scrolling)}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
