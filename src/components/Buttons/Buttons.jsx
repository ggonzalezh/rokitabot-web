import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = makeStyles((theme) => ({
  body: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
    marginBottom: "100px",
    marginTop: "50px",
    textAlign: "-webkit-center"
  },
  text: {
    color: "white",
    fontWeight: 700,
    textDecoration: "none !important",
    display: "flex",
  },
  button: {
    background: "#7289DA",
    color: "white",
    "&:hover": {
        background: "#8ea1e1"
    }
  },
}));

export const Buttons = () => {
  const style = styles();
  return (
    <div className={style.body}>
      <Button
        size={"large"}
        className={style.button}
        variant="contained"
        href="https://discord.com/oauth2/authorize?client_id=414719351338565632&scope=bot"
      >
        <Typography align={"center"} className={style.text} variant="button">
          Invitar
        </Typography>
      </Button>
      <Button
        size={"large"}
        className={style.button}
        variant="contained"
        href="https://top.gg/bot/414719351338565632/vote    "
      >
        <Typography align={"center"} className={style.text} variant="button">
          Votar
        </Typography>
      </Button>
    </div>
  );
};
