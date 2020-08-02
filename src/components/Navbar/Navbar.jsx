import React from "react";
import { Fullscreen } from "./ToolBar/Fullscreen";
import { Responsive } from "./ToolBar/Responsive";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const Navbar = () => {
  const isResponsive = useMediaQuery("(min-width:775px)");
  return (
    <div>
      {isResponsive ? <Fullscreen/> : <Responsive/>}
    </div>
  );
};