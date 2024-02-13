import {
  Dashboard,
  Person,
  PowerSettingsNewOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import DFlex from "../../styles/Flex";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../../context/UserDataContext";
import { useContext } from "react";
import { UserDataContextTypes } from "../../types/UserDataContextTypes";

function Navbar() {
  const { userData }: UserDataContextTypes = useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        borderBottom: "2px solid black",
        ...DFlex,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        px: "15px",
      }}
    >
      {/* part 1 */}
      <Box
        sx={{
          ...DFlex,
          flexDirection: "row",
          gap: "15px",
        }}
      >
        <Box
          component={"img"}
          src="/images/logo.png"
          sx={{ width: "30px", aspectRatio: 1 }}
        />
        <Typography variant="h5" fontWeight={500}>
          {userData?.fName + " " + userData?.lName}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            backgroundColor: "black",
            borderRadius: "100px",
            color: "white",
            padding: "2.5px 15px",
          }}
        >
          {userData?.role}
        </Typography>
      </Box>
      {/* part 2 */}
      <Box
        sx={{
          ...DFlex,
          flexDirection: "row",
          gap: "25px",
        }}
      >
        <Dashboard sx={{ width: "30px", height: "30px" }} />
        <Person sx={{ width: "30px", height: "30px" }} />
        <PowerSettingsNewOutlined
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          sx={{ width: "30px", height: "30px" }}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
