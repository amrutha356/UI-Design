import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import RedeemIcon from "@mui/icons-material/Redeem";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { styled, useTheme } from "@mui/material/styles";

const MenuItems = ({ className = "" }) => {
  const SidebarLink = styled(Link)({
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    padding: "12.9px 15px",
    gap: "13.1px",
  });
  const menuItems = [
    {
      icon: DashboardIcon,
      path: "/",
      badgeContent: 0,
      badgeColor: "primary",
    },
    {
      icon: ShoppingCartIcon,
      path: "/orders1",
      badgeContent: 3,
      badgeColor: "primary",
    },
    {
      icon: PeopleIcon,
      path: "/orders1",
      badgeContent: 0,
      badgeColor: "primary",
    },
    {
      icon: InventoryIcon,
      path: "/orders1",
      badgeContent: 0,
      badgeColor: "primary",
    },
    {
      icon: ChatIcon,
      path: "/orders1",
      badgeContent: 10,
      badgeColor: "primary",
    },
    {
      icon: SettingsIcon,
      path: "/orders1",
      badgeContent: 0,
      badgeColor: "primary",
    },
  ];
  const menuItems1 = [
    {
      icon: HeadsetMicIcon,
      badgeContent: 0,
      badgeColor: "primary",
    },
    {
      icon: RedeemIcon,
      badgeContent: 0,
      badgeColor: "primary",
    },
    {
      icon: ExitToAppIcon,
      badgeContent: 0,
      badgeColor: "primary",
    },
  ];
  return (
    <Grid container spacing={2} className={`menuitems ${className}`}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            button
            component={SidebarLink}
            to={item.path}
            sx={{
              "&:hover": {
                backgroundColor: "#1976d2",
                color: "#fff",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <Badge badgeContent={item.badgeContent} color={item.badgeColor}>
                <item.icon />
              </Badge>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1, pt: 30 }} />
      <List>
        {menuItems1.map((item, index) => (
          <ListItem
            key={index}
            button
            component={SidebarLink}
            to={item.path}
            sx={item.style || {}}
          >
            <ListItemIcon sx={item.text === "Logout" ? { color: "red" } : {}}>
              <Badge badgeContent={item.badgeContent} color={item.badgeColor}>
                <item.icon />
              </Badge>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

MenuItems.propTypes = {
  className: PropTypes.string,
};

export default MenuItems;
