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

type udConts = {
  userData: UserTypes;
};

function Dashboard() {
  const { userData }: udConts = useContext(UserDataContext);
  const navigate = useNavigate();

  const getManProjects = () => {
    return useAxios("project");
  };

  const { data, status } = useQuery({
    queryFn: getManProjects,
    queryKey: ["All Manager Projects"],
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
          <DashIcon sx={{ width: "30px", height: "30px" }} />
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
              // onClick={() => navigate("/")}
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
