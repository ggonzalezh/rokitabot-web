import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  items: {
    width: 250,
  },
  hide: {
    display: "none",
  },
  buttonRight: {
    float: 'right',
  },
  menuItem: {
    fontSize: 35,
    color: 'white'
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

  const createItems = () => (
    <div
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={style.items}
    >
      <List>
        {["Inicio", "Informacion"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={style.buttonRight}>
      <IconButton
        className={[clsx(open && style.hide)]}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon className={style.menuItem}/>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {createItems()}
        <Divider />
      </Drawer>
    </div>
  );
};
