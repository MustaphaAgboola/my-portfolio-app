import React from "react";
import profilePic from "../../assets/images/profile-pic.jpeg";

const Main = () => {
  return (
    <div className="flex flex-wrap justify-evenly mt-4 mx-20 md:flex-wrap md:mx-10 md:justify-center lg:flex-nowrap lg:mx-20 lg:justify-evenly">
      <div className=" flex flex-col gap-2 mt-8 md:w-[21rem] lg:">
        <h1 className=" text-3xl mx-10">Hi 👋, I'm </h1>
        <div className=" text-4xl md:text-6xl lg:text-7xl">
          Mustapha <br />
          Agboola
        </div>

        <div className="w-28 h-[2px] bg-yellow-400 "></div>

        <p className=" font-bold text-xl">Full-stack Developer </p>
        <div className=" flex flex-wrap gap-1">
          <p className="">REACTJS</p>
          <span className="w-[2px] h-6 bg-yellow-400 "></span>
          <p>NODEJS</p>
          <span className="w-[2px] h-6 bg-yellow-400 "></span>
          <p>EXPRESS</p>
          <span className="w-[2px] h-6 bg-yellow-400 "></span>
          <p>MONGODB</p>
          <span className="w-[2px] h-6 bg-yellow-400 "></span>
          <p>GIT & GITHUB</p>
        </div>
      </div>

      <div className=" border-8 border-gray-600 p-2 rounded-md m-4">
        <img
          src={profilePic}
          alt=""
          className=" w-[15rem] h-[13rem] rounded-lg sm:h-[24rem] md:w-[18rem]"
        />
      </div>

      <div className=" w-[28rem] mt-10 ml-4 md:w-[22rem] md:ml-1">
        <h3 className=" text-center text-yellow-400 tracking-widest">
          INTRODUCTION.
        </h3>
        <p>
          "Hello! I'm <span className=" text-yellow-400">MUSTAPHA</span>, a
          junior full stack developer, passionate about crafting seamless user
          experiences and exploring the endless possibilities of code. Eager to
          learn, collaborate, and make a positive impact in the tech community,
          I'm always excited to contributing my skills to the ever-evolving
          world of full stack development. Let's{" "}
          <span className=" text-yellow-400">code</span>, create, and make a
          difference together!" 🚀
        </p>
      </div>
    </div>
  );
};

export default Main;
