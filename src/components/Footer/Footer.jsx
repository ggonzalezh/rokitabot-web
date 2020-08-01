import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { Typography } from "@material-ui/core";

const styles = makeStyles(() => ({
  footer: {
    width: "100%",
    position: "fixed",
    bottom: "0",
    display: "flex",
    backgroundColor: "#1d1f21",
    color: "white",
    fontWeight: 700,
  },
  optionsFooter: {
    alignSelf: "center",
    display: "flex"
  },
  option: {
    marginLeft: "10px",
    cursor: "default",
    color: '#717988'
  }
}));

export const Footer = () => {
  const style = styles();
  return (
    <div>
      <BottomNavigation className={style.footer}>
        <div className={style.optionsFooter}>
          <Typography className={style.option} variant="subtitle1">
          © {(new Date().getFullYear())} - Creado por Misser#0167
          </Typography>
        </div>
      </BottomNavigation>
    </div>
  );
};
