import { ThemeProvider } from "@emotion/react";
import Landing from "./pages/Landing/Landing";
import ProjectTheme from "./styles/ProjectTheme";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={ProjectTheme}>
      <Box
        sx={{
          minWidth:"100%",
          minHeight:'100%',
          color: "text.primary",
          background: "background.default",
        }}
      >
        <Landing />
      </Box>
    </ThemeProvider>
  );
}

export default App;
