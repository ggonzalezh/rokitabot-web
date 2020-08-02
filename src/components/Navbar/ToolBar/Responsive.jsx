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
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Toolbar, AppBar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  items: {
    width: 'auto',
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
    color: "White",
    textDecoration: "none",
  },
  drawerPaper: {
    backgroundColor: "#1d1f21",
    color: "white",
  },
  arrow:{
    textAlign: 'center',
    color: 'white'
  },
  icon: {
    color: "white"
  }
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
      <div className={style.arrow}>
        <IconButton onClick={toggleDrawer}>
          <KeyboardArrowUpIcon className={style.arrow}/>
        </IconButton>
      </div>
      <Divider/>
      <List>
        <NavLink className={style.menuLink} exact to="/">
          <ListItem button>
            <ListItemIcon className={style.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </NavLink>
        <NavLink className={style.menuLink} exact to="/Informacion">
          <ListItem button>
            <ListItemIcon className={style.icon}>
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
