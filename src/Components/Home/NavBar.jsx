import React, { useState, useEffect } from "react";
import Navigation from "./Desktop/Navigation";
import DropDownNav from "./Mobile/DropDownNav";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768); // For example, considering screens below 768px as "mobile"
  };

  useEffect(() => {
    checkScreenSize(); // Check initial screen size
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className=" flex justify-between px-4 py-8 md:px-12">
      <div>
        <h1 className=" text-4xl font-extrabold ">
          TAPHA<span className=" text-5xl text-yellow-400">.</span>
        </h1>
      </div>


      {isMobile ? <DropDownNav /> : <Navigation />}
    </div>
  );
};

export default NavBar;
