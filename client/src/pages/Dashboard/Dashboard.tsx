import { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import UserTypes from "../../types/UserTypes";
import { Box, Button, TextField, Typography } from "@mui/material";
import DFlex from "./../../styles/Flex";
import {
  Dashboard as DashIcon,
  Person,
  PowerSettingsNewOutlined,
} from "@mui/icons-material";
import { useAxios } from "../../axios/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { UserDataContextTypes } from "../../types/UserDataContextTypes";

type udConts = {
  userData: UserTypes;
};

function Dashboard() {
  const { userData }: UserDataContextTypes = useContext(UserDataContext);
  const navigate = useNavigate();

  const getManProjects = () => {
    console.log(userData);
    return useAxios(`project/getallmanagerprojects/${userData?._id}`);
  };

  const { data, status } = useQuery({
    queryFn: getManProjects,
    queryKey: ["All Manager Projects"],
    enabled: Object.keys(userData).length !== 0,
  });

  const Proj = ({ proj }: any) => {
    return (
      <Box
        sx={{
          width: "47%",
          ...DFlex,
          justifyContent: "flex-start",
          border: "2px solid black",
          gap: "20px",
          p: "20px",
        }}
      >
        <Typography variant="h4">{proj?.title}</Typography>
        <Typography variant="body1" textAlign={"center"}>
          {proj?.projectPurpose}
        </Typography>
        <Box
          sx={{
            width: "75px",
            aspectRatio: 1,
            backgroundColor: "black",
            borderRadius: "100px",
            ...DFlex,
            p: "10px",
          }}
        >
          <Typography sx={{ color: "white" }} variant="h6">
            64%
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            backgroundColor: "black",
            borderRadius: "100px",
            color: "white",
            padding: "2.5px 15px",
          }}
        >
          25/14 Tasks Completed
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
          Deadline of {proj?.deadline} days
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        ...DFlex,
        justifyContent: "flex-start",
        gap: "25px",
      }}
    >
      {/* header */}
      <Navbar />

      {/* body */}
      <Box
        sx={{
          width: "100%",
          ...DFlex,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          px: "25px",
        }}
      >
        {/* leftSide - Project Container*/}
        <Box
          sx={{
            width: "60%",
          }}
        >
          {/* search box */}
          <Box
            sx={{
              width: "100%",
              ...DFlex,
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
              px: "10px",
              marginBottom: "25px",
            }}
          >
            <TextField
              size="small"
              sx={{ flex: 1 }}
              placeholder="Search Projects"
              variant="outlined"
            />
            <Button
              onClick={() => navigate("/addProject")}
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: status === "pending" ? "lightgrey" : "black",
                width: "25vw",
                // margin:'0px 10px 20px 10px'
              }}
              size="medium"
            >
              {" "}
              + Add Project
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              ...DFlex,
              // justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
              // p:"15px"
            }}
          >
            {/* project */}
            {data &&
              data?.data?.projects.map((proj: any) => {
                return <Proj key={proj._id} proj={proj} />;
              })}
          </Box>
        </Box>
        {/* rightSide - updates */}
        <Box sx={{ width: "40%" }}>
          <Box
            sx={{ width: "100%", height: "87.5vh", border: "2px solid black" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
