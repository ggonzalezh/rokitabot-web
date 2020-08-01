import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import HomeIcon from "@material-ui/icons/Home";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Toolbar, AppBar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  items: {
    width: 250,
  },
  hide: {
    display: "none",
  },
  buttonRight: {
    float: "right",
  },
  menuItem: {
    fontSize: 40,
    color: "white",
  },
  appBar: {
    backgroundColor: "#2c2f33",
    boxShadow: "none",
  },
  toolBar: {
    alignSelf: "center",
  },
  menuLink: {
    color: "black",
    textDecoration: "none",
  },
  drawerPaper: {
    backgroundColor: "#1d1f21",
    // backgroundColor: "#1c1e20",
    color: "white",
  },
}));

export const Responsive = () => {
  const style = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(isOpen);
  };

  const createMenu = () => (
    <div
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={style.items}
    >
      <div>
        <IconButton onClick={toggleDrawer}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider/>
      <List>
        <NavLink className={style.menuLink} exact to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </NavLink>
        <NavLink className={style.menuLink} exact to="/comandos">
          <ListItem button>
            <ListItemIcon>
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText primary="Comandos" />
          </ListItem>
        </NavLink>
        <NavLink className={style.menuLink} exact to="/Información">
          <ListItem button>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary="Información" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <AppBar position="static" className={style.appBar}>
      <Toolbar className={style.toolBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon className={style.menuItem} />
        </IconButton>
        <Drawer
          classes={{ paper: style.drawerPaper }}
          anchor="top"
          open={open}
          onClose={toggleDrawer(false)}
        >
          {createMenu()}
          <Divider />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
