import { ThemeProvider } from "@emotion/react";
import ProjectTheme from "./styles/ProjectTheme";
import { Box } from "@mui/material";
import MainNavigator from "./navigation/MainNavigator";

function App() {
  return (
    <ThemeProvider theme={ProjectTheme}>
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "100%",
          color: "text.primary",
          background: "background.default",
        }}
      >
        <MainNavigator />
      </Box>
    </ThemeProvider>
  );
}

export default App;
