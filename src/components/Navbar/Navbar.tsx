import React from "react";
import { Link } from "react-router-dom";

import GroupIcon from "@mui/icons-material/Group";

import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

import cls from "./navbar.module.css";

const Navbar: React.FC = () => {
  const navLink = [
    {
      id: 1,
      name: "Operatorlar",
      url: "/",
      icon: <InsertChartOutlinedIcon className={cls.iconChart} />,
    },
    {
      id: 2,
      name: "Lidlar",
      url: "/leads",
      icon: <GroupIcon className={cls.icon} />,
    },
  ];

  return (
    <div className={cls.navbar}>
      <nav className={cls.nav}>
        {navLink.map((link) => (
          <Link key={link.id} className={cls.navChild} to={link.url}>
            <span>{link.icon}</span> {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
