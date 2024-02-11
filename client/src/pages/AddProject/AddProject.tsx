import { Box, Typography } from "@mui/material";
import DFlex from "./../../styles/Flex";

function AddProject() {
  return (
    <Box
      sx={{
        ...DFlex,
        width: "100%",
        minHeight: "100vh",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "25px",
        p:"20px"
      }}
    >
      <Typography variant="h4" fontWeight={500}>Add Project</Typography>
    </Box>
  );
}

export default AddProject;
