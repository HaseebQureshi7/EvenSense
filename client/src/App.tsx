import { ThemeProvider } from "@emotion/react";
import ProjectTheme from "./styles/ProjectTheme";
import { Box } from "@mui/material";
import MainNavigator from "./navigation/MainNavigator";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserDataContext from "./context/UserDataContext";
import { useState } from "react";
import GlobalSnackbar from "./ui/Snackbar";
import { SnackbarTypes } from "./types/SnackbarTypes";
import SnackbarContext from "./context/SnackbarContext";

function App() {
  const [userData, setUserData] = useState({});
  const [openSnack, setOpenSnack] = useState<SnackbarTypes>({
    open: false,
    message: "no message",
    severity: "success",
  });

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <SnackbarContext.Provider value={{ openSnack, setOpenSnack }}>
        <ThemeProvider theme={ProjectTheme}>
          <Box
            sx={{
              minWidth: "100%",
              minHeight: "100%",
              color: "text.primary",
              background: "background.default",
            }}
          >
            <GlobalSnackbar value={{ openSnack, setOpenSnack }} />
            <MainNavigator />
            <ReactQueryDevtools />
          </Box>
        </ThemeProvider>
      </SnackbarContext.Provider>
    </UserDataContext.Provider>
  );
}

export default App;
