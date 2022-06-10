import "./Header.css";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Paper,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Networking from "../../Networking";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [auth, setAuth] = useState(true);
  let navigate = useNavigate();
  let location = useLocation();

  const networking = new Networking();

  useEffect(() => {
    checkSession(); // eslint-disable-next-line
  }, []);

  async function checkSession() {
    const authentication = await networking.verifyUserSession();
    if (authentication.response) setAuth(true);
    else if (!authentication.response) setAuth(false);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleSearchClick() {
    //navigate to search page
    navigate("/", 500);
  }

  function handleProfileClick() {
    //navigate to users dashboard/profile
    navigate("/profile", 500);
  }

  function handleAboutClick() {
    navigate("/about", 500);
  }

  function refreshPage() {
    if (location.pathname === "/") window.location.reload(false);
    else navigate("/", 500);
  }

  async function handleLogoutClick() {
    const response = await networking.logout();
    if (response.response) refreshPage();
  }

  function handleLoginClick() {
    navigate("/login", 500);
  }

  function handleSettingsClick() {
    //nav to users settings page
    navigate("/settings", 500);
  }

  function renderPageButtonsSmallPage() {
    if (auth) {
      return (
        <div>
          <MenuItem
            key="about"
            onClick={(e) => {
              handleCloseNavMenu();
              handleAboutClick();
            }}
          >
            <Typography textAlign="center">About</Typography>
          </MenuItem>
          <MenuItem
            key="search"
            onClick={(e) => {
              handleCloseNavMenu();
              handleSearchClick();
            }}
          >
            <Typography textAlign="center">Search</Typography>
          </MenuItem>
          <MenuItem
            key="profile"
            onClick={(e) => {
              handleCloseNavMenu();
              handleProfileClick();
            }}
          >
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
        </div>
      );
    } else {
      return (
        <>
          <MenuItem
            key="about"
            onClick={(e) => {
              handleCloseNavMenu();
              handleAboutClick();
            }}
          >
            <Typography textAlign="center">About</Typography>
          </MenuItem>
          <MenuItem
            key="search"
            onClick={(e) => {
              handleCloseNavMenu();
              handleSearchClick();
            }}
          >
            <Typography textAlign="center">Search</Typography>
          </MenuItem>
        </>
      );
    }
  }

  function renderPageButtonsFullPage() {
    if (auth) {
      return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            key="profile"
            onClick={(e) => {
              handleCloseNavMenu();
              handleAboutClick();
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            About
          </Button>
          <Button
            key="search"
            onClick={(e) => {
              handleCloseNavMenu();
              handleSearchClick();
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Search
          </Button>
          <Button
            key="profile"
            onClick={(e) => {
              handleCloseNavMenu();
              handleProfileClick();
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Profile
          </Button>
        </Box>
      );
    } else {
      return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            key="profile"
            onClick={(e) => {
              handleCloseNavMenu();
              handleAboutClick();
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            About
          </Button>
          <Button
            key="search"
            onClick={(e) => {
              handleCloseNavMenu();
              handleSearchClick();
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Search
          </Button>
        </Box>
      );
    }
  }

  function renderSettingsOptions() {
    if (auth) {
      return (
        <div>
          <MenuItem
            key="settings"
            onClick={(e) => {
              handleCloseUserMenu();
              handleSettingsClick();
            }}
          >
            <Typography textAlign="center">Settings</Typography>
          </MenuItem>
          <MenuItem
            key="logout"
            onClick={(e) => {
              handleCloseUserMenu();
              handleLogoutClick();
            }}
          >
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </div>
      );
    } else {
      return (
        <MenuItem
          key="logout"
          onClick={(e) => {
            handleCloseUserMenu();
            handleLoginClick();
          }}
        >
          <Typography textAlign="center">Login</Typography>
        </MenuItem>
      );
    }
  }

  return (
    <Paper className="header-wrapper">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FitnessCenterIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} color="secondary" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
              color="secondary"
            >
              NutriBud
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {renderPageButtonsSmallPage()}
              </Menu>
            </Box>
            <FitnessCenterIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} color="secondary" />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",

                textDecoration: "none",
              }}
              color="secondary"
            >
              NutriBud
            </Typography>
            {renderPageButtonsFullPage()}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {renderSettingsOptions()}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Paper>
  );
}
