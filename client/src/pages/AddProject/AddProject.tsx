import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DFlex from "./../../styles/Flex";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Add, Cancel } from "@mui/icons-material";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectTypes from "../../types/ProjectTypes";
import { UserDataContextTypes } from "../../types/UserDataContextTypes";
import UserDataContext from "../../context/UserDataContext";

function AddProject() {
  const { userData }: UserDataContextTypes = useContext(UserDataContext);

  const [teamLead, setTeamLead] = useState("Haseeb Qureshi");
  const [teamMember, setTeamMember] = useState("Umair Najeeb");
  const [projectDesignLink, setProjectDesignLink] = useState("");
  const [projectErLink, setProjectErLink] = useState("");

  const navigate = useNavigate();

  function HandleAddProject(e: FormEvent) {
    e.preventDefault();

    const target = e.currentTarget as HTMLFormElement;
    const AddProjectData: ProjectTypes = {
      title: (target.title as any).value,
      deadline: target.deadline.value,
      members: [],
      owner: userData?._id,
      projectPurpose: target.projectPurpose.value,
      teamLead: "dummy id placeholder",
      figmaDesign: projectDesignLink,
      projectErd: projectErLink,
    };
    console.log(AddProjectData);
  }

  return (
    <Box
      sx={{
        ...DFlex,
        width: "100%",
        minHeight: "100vh",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Navbar />
      <Box
        sx={{
          ...DFlex,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "25px",
          padding: "1% 5%",
        }}
      >
        {/* Main Header */}
        <PageHeader headerText="Add Project">
          <Button
            onClick={() => navigate(-1)}
            variant="contained"
            size="medium"
            startIcon={<Cancel />}
            sx={{ px: 5 }}
          >
            Cancel
          </Button>
        </PageHeader>
        {/* BODY */}
        <Box
          sx={{ width: "100%", ...DFlex, gap: "25px" }}
          component={"form"}
          onSubmit={HandleAddProject}
        >
          <TextField
            required
            size="medium"
            sx={{ width: "100%" }}
            label="title"
            name="title"
            InputLabelProps={{ shrink: true }}
            placeholder="Project Title"
          />
          {/* deadline and +TL */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              // justifyContent: "space-between",
              gap: 10,
            }}
          >
            <TextField
              required
              size="medium"
              // sx={{ width: "100%" }}
              label="deadline"
              name="deadline"
              InputLabelProps={{ shrink: true }}
              placeholder="30"
              type="number"
              InputProps={{
                endAdornment: (
                  <Typography
                    sx={{ width: "50%" }}
                    variant="body1"
                    fontWeight={500}
                  >
                    in days
                  </Typography>
                ),
              }}
            />
            <Select
              value={teamLead}
              sx={{ px: 5 }}
              label="Team Lead"
              onChange={(e) => setTeamLead(e.target.value)}
            >
              <MenuItem value={"Haseeb Qureshi"}>Haseeb Qureshi</MenuItem>
              <MenuItem value={"Umair Najeeb"}>Umair Najeeb</MenuItem>
              <MenuItem value={"Saaib Qazi"}>Saaib Qazi</MenuItem>
            </Select>
            <Button
              variant="contained"
              size="medium"
              startIcon={<Add />}
              sx={{ px: 5, ml: "auto" }}
            >
              Add Project Logo
            </Button>
          </Box>

          {/* +TMs */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              // justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Select
              value={teamMember}
              sx={{ px: 5 }}
              label="Team Member"
              onChange={(e) => setTeamMember(e.target.value)}
            >
              <MenuItem value={"Haseeb Qureshi"}>Haseeb Qureshi</MenuItem>
              <MenuItem value={"Umair Najeeb"}>Umair Najeeb</MenuItem>
              <MenuItem value={"Saaib Qazi"}>Saaib Qazi</MenuItem>
            </Select>
            <Button
              variant="contained"
              size="medium"
              startIcon={<Add />}
              sx={{ px: 5 }}
            >
              Add Team Member
            </Button>
          </Box>

          {/* selected tms */}
          <Box
            sx={{
              width: "100%",
              minHeight: "20vh",
              borderRadius: 1.25,
              border: "2px solid lightgrey",
              ...DFlex,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 2.5,
              p: 1,
            }}
          >
            <Typography variant="body1" fontWeight={500}>
              Selected Team Members (2)
            </Typography>
            <Box
              sx={{
                ...DFlex,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 2.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "black",
                  borderRadius: "2.5px",
                  padding: "5px 15px",
                  color: "white",
                }}
              >
                Umair Najeeb
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "black",
                  borderRadius: "2.5px",
                  padding: "5px 15px",
                  color: "white",
                }}
              >
                Saaib Qazi
              </Typography>
            </Box>
          </Box>

          {/* PROJDCT PURPOSE */}
          <Box
            sx={{
              width: "100%",
              ...DFlex,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              mt: 2.5,
            }}
          >
            <PageHeader headerText="Project Documentation"></PageHeader>
            <TextField
              required
              sx={{ width: "100%" }}
              multiline
              rows={10}
              label="Project Purpose"
              name="projectPurpose"
            />
          </Box>

          {/* PROJDCT DESIGN */}
          <Box
            sx={{
              width: "100%",
              ...DFlex,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              mt: 2.5,
              gap: 2.5,
            }}
          >
            <PageHeader headerText="Project Design"></PageHeader>
            <TextField
              sx={{ width: "100%" }}
              required
              label="Project Design Link"
              onChange={(e) => setProjectDesignLink(e.target.value)}
            />
            {/* ONLY SHOW THE IFRAME WHEN THERE IS A LINK PRESENT */}
            <Box
              component={"iframe"}
              sx={{
                width: "100%",
                height: "50vh",
                border: "2px solid lightgrey",
                borderRadius: 2.5,
              }}
              src={
                projectDesignLink.length > 5
                  ? projectDesignLink
                  : "https://excalidraw.com/"
              }
              allowFullScreen
              border={0}
            />
          </Box>

          {/* PROJDCT ERD/SRD */}
          <Box
            sx={{
              width: "100%",
              ...DFlex,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              mt: 2.5,
              gap: 2.5,
            }}
          >
            <PageHeader headerText="Project ER/SR Diagram"></PageHeader>
            <TextField
              required
              sx={{ width: "100%" }}
              label="Project ER/SR Diagram Link"
              onChange={(e) => setProjectErLink(e.target.value)}
            />
            <Box
              component={"iframe"}
              sx={{
                width: "100%",
                height: "50vh",
                border: "2px solid lightgrey",
                borderRadius: 2.5,
              }}
              src={
                projectErLink.length > 5 ? projectErLink : "https://gitmind.com"
              }
              allowFullScreen
              border={0}
            />
          </Box>
          <Button
            // onClick={() => navigate("/addStage")}

            variant="contained"
            size="medium"
            type="submit"
            startIcon={<Add />}
            sx={{ px: 5, ml: "auto" }}
          >
            Confirm and Add Stages
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddProject;
