import React from "react";
import { Link, useLocation } from "react-router-dom";

import GroupIcon from "@mui/icons-material/Group";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

import cls from "./navbar.module.css";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = React.useState(location.pathname);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  React.useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

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
        {/* Desktop linklar */}
        {!isMobile &&
          navLink.map((link) => (
            <Link
              key={link.id}
              className={`${cls.navChild} ${
                active === link.url ? cls.active : ""
              }`}
              to={link.url}
            >
              <span>{link.icon}</span> {link.name}
            </Link>
          ))}

        {/* Mobile burger */}
        {isMobile && (
          <>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <div style={{ width: 250 }}>
                <IconButton
                  style={{ float: "right" }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
                <List>
                  {navLink.map((link) => (
                    <ListItem key={link.id} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={link.url}
                        selected={active === link.url}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemIcon>{link.icon}</ListItemIcon>
                        <ListItemText primary={link.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
