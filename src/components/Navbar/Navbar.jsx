import React from "react";
import { Fullscreen } from "./appbar/Fullscreen";
import { Responsive } from "./appbar/Responsive";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const Navbar = () => {
  const isResponsive = useMediaQuery("(min-width:850px)");
  return (
    <div>
      {isResponsive ? <Fullscreen/> : <Responsive/>}
    </div>
  );
};
