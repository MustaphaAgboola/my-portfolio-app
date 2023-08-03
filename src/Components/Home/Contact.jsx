import React from 'react'
import {
  TwitterOutlined,
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div className=" font-medium flex justify-between gap-2 ml-8 lg:gap-4">
      <li>Contacts</li>
      <div className="w-[2px] h-6 bg-yellow-400 "></div>
      <div className="flex gap-2">
        <NavLink to="https://twitter.com/6lackcoder">
          <TwitterOutlined />
        </NavLink>
        <NavLink to="https://github.com/MustaphaAgboola">
          <GithubOutlined />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/tapha69/">
          <LinkedinFilled />
        </NavLink>

        <MailOutlined />
      </div>
    </div>
  );
}

export default Contact