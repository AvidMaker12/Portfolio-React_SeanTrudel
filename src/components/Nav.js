import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

  return(
    <nav id="main-navigation" aria-label="Main navigation">
      <ul className="menu">
        <li className="w3-bar-item w3-button w3-mobile w3-hover-dark-grey">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="w3-bar-item w3-button w3-mobile w3-hover-dark-grey">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="w3-bar-item w3-button w3-mobile w3-hover-dark-grey">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="w3-bar-item w3-button w3-mobile w3-hover-dark-grey">
          <NavLink to="/education">Résumé</NavLink>
        </li>
      </ul>
    </nav>
  )

}

export default Nav;