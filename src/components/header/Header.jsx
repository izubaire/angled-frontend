import React from "react";
import { Box, Toolbar, Typography, AppBar } from "@mui/material";
import Profile from "../headerComponent/Profile";
import IconMenu from "../headerComponent/IconMenu";

export default function HeaderComponent(props) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#000f30" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">{"<AdminPanel/>"}</Typography>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Welcome to Admin
            </Typography>
            <Box>
              {/* <Profile showHide={{display: { xs: 'none', md: 'block' }}} /> */}
              <IconMenu
                handleDrawerToggle={props.handleDrawerToggle}
                showHide={{ display: { xs: "block", md: "none" } }}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
