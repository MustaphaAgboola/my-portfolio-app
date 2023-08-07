import React from "react";

import { Link, NavLink } from "react-router-dom";
import Contact from "../Contact";

const Navigation = () => {
  return (
    <div>
      <ul className=" flex justify-evenly gap-2 font-semibold lg:gap-6">
        <div className=" block gap-4 lg:flex">
          <li>
            <NavLink exact to="/#head">
              HOME
            </NavLink>
          </li>
          <li>
            <Link to="/aboutme.jsx">ABOUT</Link>
          </li>
          <li>
            <Link to="">PROJECTS</Link>
          </li>
        </div>

        <Contact />
      </ul>
    </div>
  );
};

export default Navigation;
