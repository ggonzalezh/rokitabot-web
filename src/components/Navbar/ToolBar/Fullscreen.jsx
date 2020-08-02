import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles((theme) => ({
  mainTitle: {
    color: "white",
    fontWeight: 700,
    fontSize: "1.75em",
    paddingRight: 25,
    borderRight: "3px solid #7289DA",
    textTransform: "uppercase",
    cursor: "default",
  },
  title: {
    paddingRight: 0,
    paddingLeft: 110,
    fontStyle: "normal",
    fontWeight: 700,
  },
  menuLink: {
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
  },
  appBar: {
    backgroundColor: "#2c2f33",
    boxShadow: "none",
  },
  toolBar: {
    alignSelf: "center",
  },
  selectedMenu: {
    backgroundColor: "#1d1f21",
    padding: "8px",
    borderRadius: "8px",
    transitionDuration: ".5s",
    borderBottom: "3px solid #141618",
  },
}));

export const Fullscreen = () => {
  const style = styles();
  return (
    <div>
      <AppBar position={"static"} className={style.appBar}>
        <Toolbar className={style.toolBar}>
          <Typography align={"center"} variant="h6" className={style.mainTitle}>
            {"Rokita-BOT"}
          </Typography>
          <Typography variant="h6" className={style.title}>
            <NavLink
              exact
              activeClassName={style.selectedMenu}
              to="/"
              className={style.menuLink}
            >
              Inicio
            </NavLink>
          </Typography>
          <Typography data-micron="bounce" variant="h6" className={style.title}>
            <NavLink
              exact
              activeClassName={style.selectedMenu}
              to="/informacion"
              className={style.menuLink}
            >
              Información
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
