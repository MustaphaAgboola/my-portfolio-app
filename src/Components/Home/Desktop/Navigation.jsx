import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import Aboutme from '../Aboutme';
import Projects from '../Projects';
import Contact from '../Contact';

const Navigation = () => {
  return (
    <div>
      <ul className=" flex justify-evenly gap-2 font-semibold lg:gap-6">
        <div className=" block gap-4 lg:flex">
          <li>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
        </div>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={Aboutme} />
          <Route path="/projects" component={Projects} />
          {/* <Route component={NotFoundPage} />{" "} */}
          {/* This route catches any unknown URLs */}
        </Routes>

        <Contact />
      </ul>
    </div>
  );
}

export default Navigation