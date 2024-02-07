import { ThemeProvider } from "@emotion/react";
import ProjectTheme from "./styles/ProjectTheme";
import { Box } from "@mui/material";
import MainNavigator from "./navigation/MainNavigator";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserDataContext from "./context/UserDataContext";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
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
    </UserDataContext.Provider>
  );
}

export default App;
