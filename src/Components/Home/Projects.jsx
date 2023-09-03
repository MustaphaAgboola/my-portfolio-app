import React, { useState } from "react";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";
import { motion } from "framer-motion";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const projects = [
  {
    image: project1,
    title: "Weather App",
    description:
      "This is a weather app that shows the weather condition of any city.",
    viewCode: "https://github.com/MustaphaAgboola/weather-app",
    viewProject: "https://heartfelt-tiramisu-1ab490.netlify.app/",
  },
  {
    image: project2,
    title: "E-commerce App",
    description:
      "This is an e-commerce app that allows users to buy and sell products.",
    viewCode: "https://github.com/MustaphaAgboola/e-commerce",
    viewProject: "https://soft-cobbler-f40af2.netlify.app/",
  },
  {
    image: project3,
    title: "Image Generator",
    description:
      "This is an image generator app that allows users to generate images.",
    viewCode: "https://github.com/MustaphaAgboola/image_generator",
    viewProject: "https://soft-sprite-aa39ce.netlify.app/",
  },
  {
    image: project4,
    title: "Todo App",
    description: "This is a todo app that allows users to create a todo list.",
    viewCode: "",
  },
];

const Projects = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <>
      <div className=" bg-gray-800 ">
        <h1 className="  text-center text-xl text-yellow-400 p-4 tracking-widest">
          WEB DEV PROJECTS
        </h1>
      </div>
      <motion.div className=" bg-gray-800 p-4 flex flex-wrap gap-4 justify-center text-gray-400">
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
                <Link to={project.viewCode}>
                  <div className=" flex gap-2 items-center">
                    <GithubOutlined />
                    <p>View code</p>
                  </div>
                </Link>

                <Link to={project.viewProject}>
                  <div className=" flex gap-2 items-center">
                    <LinkOutlined />
                    <p>View project</p>
                  </div>
                </Link>
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

      <div className="bg-gray-800 pb-[4rem]">
        <h1 className="  text-center text-xl text-yellow-400 p-4 tracking-widest">
          DEVOPS PROJECTS
        </h1>

        <div className=" flex justify-evenly flex-wrap gap-[4rem] items-center mx-4 md:flex-nowrap text-center text-gray-400">
          <div>
            <p>
              Deployed the SOCKSHOP APPLICATION implementing CI/CD pipeline with
              JENKINS
            </p>
            <Link to="https://github.com/MustaphaAgboola/my_jenkins-_pipeline">
              <GithubOutlined />
              <p>View Code</p>
            </Link>
          </div>
          <div>
            <p>Dockerize PHP, NGINX and MYSQL</p>
            <Link to="https://github.com/MustaphaAgboola/docker-assignment">
              <GithubOutlined />
              <p>View Code</p>
            </Link>
          </div>
          <div>
            <p>Deployed Kubernetes on AWS SERVER with TERRAFORM</p>
            <Link to="https://github.com/MustaphaAgboola/terrakubet">
              <GithubOutlined />
              <p>View Code</p>
            </Link>
          </div>

          <div>
            <p>Deployed A LARAVEL App with ANSIBLE</p>
            <Link to="https://github.com/MustaphaAgboola/laravel-app-with-ansible">
              <GithubOutlined />
              <p>View Code</p>
            </Link>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default Projects;
