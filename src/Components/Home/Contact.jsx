import React from 'react'
import {
  TwitterOutlined,
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className=" font-medium flex justify-between gap-2 lg:gap-4 items-center text-gray-400">
      <li>Contacts</li>
      <div className="w-[2px] h-6 bg-yellow-400 "></div>
      <div className="flex gap-2">
        <Link to="https://twitter.com/6lackcoder" target="_blank">
          <TwitterOutlined />
        </Link>
        <Link to="https://github.com/MustaphaAgboola" target="_blank">
          <GithubOutlined />
        </Link>
        <Link to="https://www.linkedin.com/in/tapha69/" target="_blank">
          <LinkedinFilled />
        </Link>
        <Link to="/contactForm">
          <MailOutlined />
        </Link>
      </div>
    </div>
  );
}

export default Contact