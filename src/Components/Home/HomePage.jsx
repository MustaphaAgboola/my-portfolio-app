import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import  Footer  from "./Footer";




const HomePage = () => {



  return (
    <div className=" text-gray-400 ">
      <div className=" bg-gray-800">
        <NavBar />
        <Main />
      </div>
      <Aboutme />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
