import { createTheme, PaletteMode } from "@mui/material";

const ProjectTheme = (themeMode: PaletteMode) =>
    createTheme({
        palette: {
            mode: "light",
            primary: {
                main: "#333333",
            },
            secondary: {
                main: "#2E7BEE",
            },
        },
        typography: {
            fontFamily: "Poppins"
        }
    });

export default ProjectTheme