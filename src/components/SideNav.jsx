import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Badge,
  useMediaQuery,
  Drawer,
} from "@mui/material";
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
import logo from "../images/Metrixlogo.svg";

const NavBackground = styled(Box)(({ theme }) => ({
  width: 294,
  height: "100%",
  position: "absolute",
  margin: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {
    width: 240,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "100vh",
  },
}));

const SidebarIcon = styled("div")({
  position: "relative",
  height: "51.7px",
  width: "52.2px",
});

const SidebarLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  padding: "12.9px 15px",
  gap: "13.1px",
});

const SidebarItemText = styled(ListItemText)({
  minWidth: "65.3px",
  fontWeight: 700,
});

const menuItems = [
  {
    text: "Dashboard",
    icon: DashboardIcon,
    path: "/",
    badgeContent: 0,
    badgeColor: "primary",
  },
  {
    text: "Orders",
    icon: ShoppingCartIcon,
    path: "/orders1",
    badgeContent: 3,
    badgeColor: "primary",
  },
  {
    text: "Customers",
    icon: PeopleIcon,
    path: "/orders1",
    badgeContent: 0,
    badgeColor: "primary",
  },
  {
    text: "Inventory",
    icon: InventoryIcon,
    path: "/orders1",
    badgeContent: 0,
    badgeColor: "primary",
  },
  {
    text: "Conversations",
    icon: ChatIcon,
    path: "/orders1",
    badgeContent: 10,
    badgeColor: "primary",
  },
  {
    text: "Settings",
    icon: SettingsIcon,
    path: "/orders1",
    badgeContent: 0,
    badgeColor: "primary",
  },
];

const menuItems1 = [
  {
    text: "Contact Support",
    icon: HeadsetMicIcon,

    badgeContent: 0,
    badgeColor: "primary",
  },
  {
    text: "Free Gifts",
    text1: "Upgrade your account",
    icon: RedeemIcon,

    badgeContent: 0,
    badgeColor: "primary",
    style: {
      backgroundColor: "lightcoral",
      borderRadius: "8px",
      color: "white",
    },
  },
  {
    text: "Logout",
    icon: ExitToAppIcon,

    badgeContent: 0,
    badgeColor: "primary",
  },
];

const SideNav = ({ className = "" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Drawer
      variant={isMobile || isTablet ? "temporary" : "permanent"}
      open={true}
      onClose={() => {}}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: isMobile ? "100vw" : isTablet ? 240 : 295,
        },
      }}
    >
      <NavBackground className={className}>
        <Box display="flex" alignItems="center" p={2}>
          <img src={logo} alt="" />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Metrix
          </Typography>
        </Box>
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
              <SidebarItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1, pt: 20 }} />
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
              <SidebarItemText primary={item.text} secondary={item.text1} />
            </ListItem>
          ))}
        </List>
      </NavBackground>
    </Drawer>
  );
};

SideNav.propTypes = {
  className: PropTypes.string,
};

export default SideNav;
