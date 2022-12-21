import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  
  const { pathname } = useLocation();
  return (
    <div
      data-testid="header-component"
      className="header-component"
      id="header-compo"
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              name="arrow-back"
              onClick={() => navigate("/")}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              // disabled={pathname === "/"}
            >
              {pathname !== "/" && <ArrowBackIcon />}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Characters Application
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default HeaderComponent;
