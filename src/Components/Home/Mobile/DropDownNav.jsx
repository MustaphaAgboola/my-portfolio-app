// import React from "react";
// import {
//   MailFilled,
//   MenuOutlined,
//   TwitterOutlined,
//   GithubOutlined,
//   LinkedinFilled 
// } from "@ant-design/icons";
// import { Menu } from "antd";


// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem(null, "sub2", <MenuOutlined />, [
//     getItem("HOME", "5"),
//     getItem("ABOUT", "6"),
//     getItem("PORTFOLIO", "6"),
//     getItem("BLOGS", "6"),
//     getItem("Contact", "sub3", null, [
//       getItem('E-MAIL', "7", <MailFilled />),
//       getItem( 'TWITTER',"8",<TwitterOutlined />),
//       getItem('GITHUB', "9",<GithubOutlined />),
//       getItem('LINKEDIN', "10",<LinkedinFilled />),
//     ]),
//   ]),
// ];
// const onClick = (e) => {
//   console.log("click", e);
// };

// const DropDownNav = () => (
//   <Menu
//     onClick={onClick}
//     style={{
//       width: 76,
//     }}
//     theme= 'dark'
//     mode="vertical"
//     items={items}
//   />
// );
// export default DropDownNav;

// import React from 'react'

// const DropDownNav = () => {
//   return (
//     <div>DropDownNav</div>
//   )
// }

// export default DropDownNav


// import React, { useState } from "react";
// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//   DesktopOutlined,
//   MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
// } from "@ant-design/icons";
// import { Button, Menu } from "antd";
// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Option 3", "3", <ContainerOutlined />),
//   getItem("Navigation One", "sub1", <MailOutlined />, [
//     getItem("Option 5", "5"),
//     getItem("Option 6", "6"),
//     getItem("Option 7", "7"),
//     getItem("Option 8", "8"),
//   ]),
//   getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
//     getItem("Option 9", "9"),
//     getItem("Option 10", "10"),
//     getItem("Submenu", "sub3", null, [
//       getItem("Option 11", "11"),
//       getItem("Option 12", "12"),
//     ]),
//   ]),
// ];
// const DropDownNav = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };
//   return (
//     <div
//       style={{
//         width: 256,
//       }}
//     >
//       <Button
//         type="primary"
//         onClick={toggleCollapsed}
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//       </Button>
//       <Menu
//         defaultSelectedKeys={["1"]}
//         defaultOpenKeys={["sub1"]}
//         mode="inline"
//         theme="dark"
//         inlineCollapsed={collapsed}
//         items={items}
//       />
//     </div>
//   );
// };
// export default DropDownNav;


import React from "react";
import {
  MailFilled,
  MenuOutlined,
  TwitterOutlined,
  GithubOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(null, "sub2", <MenuOutlined />, [
    getItem("HOME", "5"),
    getItem("ABOUT", "6"),
    getItem("PORTFOLIO", "6"),
    getItem("BLOGS", "6"),
    getItem("Contact", "sub3", null, [
      getItem("E-MAIL", "7", <MailFilled />),
      getItem(
        "TWITTER",
        "8",
        <Link to="https://twitter.com/6lackcoder" target="_blank">
          <TwitterOutlined />
        </Link>
      ),
      getItem(
        "GITHUB",
        "9",
        <Link to="https://github.com/MustaphaAgboola" target="_blank">
          <GithubOutlined />
        </Link>
      ),
      getItem("LINKEDIN", "10",
      <Link to="https://www.linkedin.com/in/tapha69/" target="_blank">
       <LinkedinFilled />
       </Link>),
    ]),
  ]),
];
const onClick = (e) => {
  console.log("click", e);
};

const DropDownNav = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 76,
    }}
    theme="dark"
    mode="vertical"
    items={items}
  />
);
export default DropDownNav;