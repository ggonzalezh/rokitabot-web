import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: "300px",
  },
  tittleRokitaBOT: {
    color: "white",
    fontWeight: 700,
    fontSize: "1.75em",
    paddingRight: "25px",
    borderRight: "3px solid #7289da",
    textTransform: "uppercase",
    cursor: 'default'
  },
  title: {
    paddingRight: 30,
    paddingLeft: 30,
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
    textDecoration: "underline",
  },
  rokitaBotImg: {
    borderRadius: "100%",
    width: "60px",
    height: "60px",
    marginRight: "20px",
    border: "2px solid black",
  },
}));

export const Fullscreen = () => {
  const style = styles();
  return (
    <div>
      <AppBar position="static" className={style.appBar}>
        <Toolbar className={style.toolBar}>
          <Typography variant="h6" className={style.tittleRokitaBOT}>
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
              to="/about"
              className={style.menuLink}
            >
              Información
            </NavLink>
          </Typography>
          <Typography data-micron="bounce" variant="h6" className={style.title}>
            <NavLink
              exact
              activeClassName={style.selectedMenu}
              to="/suggestion"
              className={style.menuLink}
            >
              F.A.Q
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};