import { Box } from "@mui/material";
import React from "react";
import DFlex from "./../styles/Flex";

function PageParentDiv({...rest}) {
  return <Box sx={{ width: "100%", minHeight: "100vh", ...DFlex }}></Box>;
}

export default PageParentDiv;
