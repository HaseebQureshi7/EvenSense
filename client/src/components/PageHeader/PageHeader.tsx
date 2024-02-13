import { Typography, Box } from "@mui/material";
import React from "react";
import DFlex from "../../styles/Flex";

function PageHeader({
  headerText,
  children,
}: {
  headerText: string;
  children?: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        ...DFlex,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        mb: "25px",
      }}
    >
      <Box
        sx={{
          ...DFlex,
          width: "60%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" fontWeight={500}>
          {headerText}
        </Typography>
      </Box>
      <Box
        sx={{
          ...DFlex,
          width: "40%",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "flex-end",
        }}
      >
        {children ?? children}
      </Box>
    </Box>
  );
}

export default PageHeader;
