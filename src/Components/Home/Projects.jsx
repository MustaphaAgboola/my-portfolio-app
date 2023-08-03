import React, { useState } from "react";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";
import { motion } from "framer-motion";
import { GithubOutlined, LinkOutlined  } from "@ant-design/icons";

const projects = [
  {
    image: project1,
    title: "Weather App",
    description:
      "This is a weather app that shows the weather condition of any city in the world",
  },
  {
    image: project2,
    title: "E-commerce App",
    description:
      "This is an e-commerce app that allows users to buy and sell products",
  },
  {
    image: project3,
    title: "Image Generator",
    description:
      "This is an image generator app that allows users to generate images",
  },
  {
    image: project4,
    title: "Todo App",
    description: "This is a todo app that allows users to create a todo list",
  },
];

const Projects = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <>
      <div className=" bg-gray-800">
        <h1 className="  text-center text-xl text-yellow-400 p-4 tracking-widest">
          PROJECTS
        </h1>
      </div>
      <motion.div className=" bg-gray-800 p-4 flex flex-wrap gap-4 justify-center">
        {projects.map((project, index) => {
          return (
            <motion.div
              className="border-8 border-gray-600 p-2 rounded-md w-[20rem]  sm: md:w-[18rem]"
              layout
              key={index}
              onMouseIn={() => setToggle(!isToggled)}
              onMouseOut={() => setToggle(!isToggled)}
            >
              <motion.img
                src={project.image}
                alt=""
                className="h-[20rem] rounded-lg"
                layout
              />
              <h2 className=" mt-4">
                <span className="text-yellow-400 my-2">Title:</span>{" "}
                {project.title}
              </h2>
              <p>
                <span className=" text-yellow-400">Description: </span>
                {""}
                {project.description}
              </p>
              <div className=" flex justify-between mt-4">
                <div className=" flex gap-2">
                  <GithubOutlined />
                  <p>View code</p>
                </div>
                <div className=" flex gap-2">
                  <p>View project</p>
                  <LinkOutlined />
                </div>
              </div>

              {isToggled && <p></p>}
            </motion.div>
          );
        })}
      </motion.div>
      <p className="text-center text-xs text-red-700 bg-slate-800 p-16">
        NOTE: "Although I'm still working on it, there are still some aspects of
        the project's functionality that are not yet working."
      </p>
    </>
  );
};

export default Projects;
