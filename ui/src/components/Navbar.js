import React from "react";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// TODO - Clean up the imports (should exist some tooling for dis, no?)

export const NavBar = ({ navBarItems }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => console.log("Click!")}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component={"span"}
          textAlign="left"
          sx={{ flexGrow: 1 }}
        >
          Skjeberg Invitational
        </Typography>
        <Stack direction="row">
          {navBarItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => item.view()}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
