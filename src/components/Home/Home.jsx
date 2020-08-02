import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RokitaBotImage from "../../multimedia/rokitabot.png";
import Typography from "@material-ui/core/Typography";
import { Features } from "../Features/Features";
import { Buttons } from "../Buttons/Buttons";

const styles = makeStyles((theme) => ({
  general: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rokitaBotImage: {
    width: "160px",
    height: "160px",
    borderRadius: "100px",
    marginTop: "80px",
  },
  principalText: {
    color: "white",
    fontWeight: 700,
    textTransform: "uppercase",
    cursor: "default",
    marginTop: "50px  ",
  },
  secundaryText: {
    color: "#7289DA",
  },
  animateFloat: {
    animation: `$float 6s ease-in-out infinite`,
  },
  "@keyframes float": {
    "0%": {
      transform: "translatey(0px)",
    },
    "50%": {
      transform: "translatey(-20px)",
    },
    "100%": {
      transform: "translatey(0px)",
    },
  },
}));

export const Home = () => {
  const style = styles();
  return (
    <div className={style.general}>
      <div className={style.animateFloat}>
        <img className={style.rokitaBotImage} src={RokitaBotImage} alt="img" />
      </div>
      <Typography align={"center"} variant="h4" className={style.principalText}>
        EL BOT DE DISCORD{" "}
        <span className={style.secundaryText}>DE LA VAGANCIA</span>
      </Typography>
      <Features />
      <Buttons />
    </div>
  );
};
