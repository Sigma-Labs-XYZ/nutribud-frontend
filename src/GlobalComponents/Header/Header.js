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
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [auth, setAuth] = useState(false);
  let navigate = useNavigate();

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

  async function handleLogoutClick() {
    console.log("ran");
    await networking.logout();
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
        <MenuItem
          key="search"
          onClick={(e) => {
            handleCloseNavMenu();
            handleSearchClick();
          }}
        >
          <Typography textAlign="center">Search</Typography>
        </MenuItem>
      );
    }
  }

  function renderPageButtonsFullPage() {
    if (auth) {
      return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
                <MenuIcon />
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
            <FitnessCenterIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",

                textDecoration: "none",
              }}
              color="secondary"
            >
              LOGO
            </Typography>
            {renderPageButtonsFullPage()}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
