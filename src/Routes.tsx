import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Outlet } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { styled, alpha } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import ListItem from "@mui/material/ListItem";
import Menu, { MenuProps } from "@mui/material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { Avatar, Button, MenuItem } from "@mui/material";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(_: Props) {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [isClosing, setIsClosing] = React.useState<boolean>(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  type typeRoutePaths = {
    key: number;
    path: string;
    title: string;
    icon: JSX.Element;
  };

  const routePaths: typeRoutePaths[] = [
    {
      key: 1,
      path: "",
      title: "Home",
      icon: <HomeIcon />,
    },
  ];

  const drawer = (
    <div className="section">
      <div className="py-[15px] flex justify-center">
        <Avatar
          title="Apteka"
          src="/broken-image.jpg"
          sx={{ height: 50, width: 50 }}
        />
      </div>
      <Divider />
      <List>
        {routePaths.length > 0 &&
          routePaths.map((el: typeRoutePaths) => {
            return (
              <NavLink to={el.path === "" ? "/" : `/pages/${el.path}`}>
                <ListItem key={el.key} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{el.icon}</ListItemIcon>
                    <ListItemText primary={el.title} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            );
          })}
      </List>
      <Divider />
    </div>
  );
  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userPages = [
    {
      key: 1,
      title: "Profile",
      icon: <PersonIcon />,
      path: "/pages/profile",
    },
    {
      key: 2,
      title: "Exit",
      icon: <LoginIcon />,
      path: "/pages/login",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <div className="flex justify-end">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="text"
              disableElevation
              onClick={handleClick}
            >
              <Avatar />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {userPages.length > 0 &&
                userPages.map((el) => {
                  return (
                    <Link to={el.path}>
                      <MenuItem
                        key={el.key}
                        onClick={handleClose}
                        disableRipple
                      >
                        {el.icon}
                        {el.title}
                      </MenuItem>
                    </Link>
                  );
                })}
            </StyledMenu>
          </Toolbar>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
