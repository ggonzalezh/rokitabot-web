import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles((theme) => ({
  general: {
    padding: "0 20%",
    marginTop: "20px",
    marginBottom: "150px"
  },
  title: {
    textTransform: "uppercase",
    color: "#7289da",
    fontSize: "2.0em",
    fontWeight: 700,
    marginBottom: "20px",
    marginTop: "60px",
  },
  paraph: {},
  titleParaph: {
    marginTop: "20px",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#7289da",
  },
  textParaph: {
    color: "white",
    fontWeight: "bold",
  },
  updates:{
    marginTop: "40px",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "white",
  }
}));

export const Informacion = () => {
  const style = styles();
  return (
    <div className={style.general}>
      <Typography align={"center"} variant="h2" className={style.title}>
        {"Sobre Rokita-BOT"}
      </Typography>
      <Typography variant="h5" className={style.titleParaph}>
        {"¿Que es Rokita-BOT?"}
      </Typography>
      <Typography align={"justify"} variant="h6" className={style.textParaph}>
        {
          "Es un BOT de Discord con múltiples características, tales como la capacidad de reproducir música, sistema economía, niveles y mucho más."
        }
      </Typography>
      <Typography variant="h5" className={style.titleParaph}>
        {"¿Por que el nombre?"}
      </Typography>
      <Typography align={"justify"} variant="h6" className={style.textParaph}>
        {
          "El nombre proviene de un apodo entre los usuarios del servidor privados de amigos, el cual es rokita."
        }
      </Typography>
      <Typography variant="h5" className={style.titleParaph}>
        {"¿Porque crear Rokita-BOT?"}
      </Typography>
      <Typography align={"justify"} variant="h6" className={style.textParaph}>
        {
          "Proyecto creado en el año 2018 enfocado en aprender JavaScript y el uso de librerías."
        }
      </Typography>
      <Typography align={"center"} variant="h2" className={style.title}>
        {"COMO USAR"}
      </Typography>
      <Typography variant="h5" className={style.titleParaph}>
        {"Prefix"}
      </Typography>
      <Typography variant="h6" className={style.textParaph}>
        {"Rokita-BOT usa como prefix de sus comandos -"}{<br></br>}
        {"Los comandos se usan -play discord song, con espacio luego del comando si es requerido alguna opción."}
      </Typography>
      <Typography align={"center"} variant="h2" className={style.title}>
        {"Actualizaciones"}
      </Typography>
      <Typography variant="h6" className={style.updates}>
        {"Rokita-BOT se actualiza periódicamente con nuevas características para mejorar la experiencia del usuario."}{<br></br>}
        {"Si estas interesado en aportar nuevas ideas, no dudes en contactarme vía Discord."}
      </Typography>
    </div>
  );
};
