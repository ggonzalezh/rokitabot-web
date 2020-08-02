import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  faSlidersH,
  faClock,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
    marginBottom: "30px",
  },
  paper: {
    padding: "54px",
    color: theme.palette.text.secondary,
    height: 150,
    width: 100,
    background: "linear-gradient(135deg,#536976,#292E49)",
    // backgroundColor: "#7289DA"
  },
  icon: {
    fontSize: "100px",
    marginBottom: "15px",
    paddingLeft: "7px",
  },
  textPaper: {
    color: "white",
    fontWeight: 700,
    textDecoration: "none !important",
    display: "flex",
  },
}));

export const Features = () => {
  const style = styles();
  return (
    <div className={style.root}>
      <Grid justify={"center"} container={true} spacing={2}>
        <Grid item={true} xs={"auto"} sm={"auto"} md={4}>
          <Paper className={style.paper}>
            <FontAwesomeIcon className={style.icon} icon={faMusic} />
            <br />
            <Typography
              align={"center"}
              className={style.textPaper}
              variant="button"
            >
              Reproducción de alta calidad
            </Typography>
          </Paper>
        </Grid>
        <Grid item={true} xs={"auto"} sm={"auto"} md={4}>
          <Paper className={style.paper}>
            <FontAwesomeIcon className={style.icon} icon={faSlidersH} />
            <br />
            <Typography
              align={"center"}
              className={style.textPaper}
              variant="button"
            >
              Control de reproducción
            </Typography>
          </Paper>
        </Grid>
        <Grid item={true} xs={"auto"} sm={"auto"} md={4}>
          <Paper className={style.paper}>
            <FontAwesomeIcon className={style.icon} icon={faClock} />
            <br />
            <Typography
              align={"center"}
              className={style.textPaper}
              variant="button"
            >
              Disponible 24/7
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
