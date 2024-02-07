import { ThemeProvider } from "@emotion/react";
import ProjectTheme from "./styles/ProjectTheme";
import { Box } from "@mui/material";
import MainNavigator from "./navigation/MainNavigator";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <ReactQueryDevtools />
      </Box>
    </ThemeProvider>
  );
}

export default App;
