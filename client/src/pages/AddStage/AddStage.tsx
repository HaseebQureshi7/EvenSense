import { Add, ArrowBack, ArrowDownward, Cancel } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import DFlex from "../../styles/Flex";
import { useNavigate } from "react-router-dom";
import StageTypes from "../../types/StageTypes";

function AddStage() {
  const navigate = useNavigate();
  const [afterStage, setAfterStage] = useState("Design");

  function HandleAddStage(e: FormEvent) {
    e.preventDefault();

    const target = e.currentTarget as HTMLFormElement;
    const AddStageData: StageTypes = {
      title: (target.title as any).value,
      percentage: target.percentage.value,
      ofProject: "dummy project id", // SEND PROJECT DETAILS FOR THE STAGE TO BE ADDED
      position: 0,
    };
    console.log(AddStageData);
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
        <PageHeader headerText="Add Stage">
          <Button
            onClick={() => navigate(-1)}
            variant="contained"
            size="medium"
            startIcon={<ArrowBack />}
            sx={{ px: 5 }}
          >
            Go Back
          </Button>
        </PageHeader>
        {/* BODY START */}
        <Box
          sx={{ width: "100%", ...DFlex, gap: "25px" }}
          component={"form"}
          onSubmit={HandleAddStage}
        >
          <TextField
            required
            size="medium"
            sx={{ width: "100%" }}
            label="title"
            name="title"
            InputLabelProps={{ shrink: true }}
            placeholder="Stage Title"
          />
          {/* percentage */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              // justifyContent: "space-between",
              gap: 10,
            }}
          >
            <TextField
              size="medium"
              // sx={{ width: "100%" }}
              required
              label="percentage"
              name="percentage"
              InputLabelProps={{ shrink: true }}
              placeholder="15"
              type="number"
              InputProps={{
                endAdornment: (
                  <Typography
                    sx={{ width: "50%" }}
                    variant="body1"
                    fontWeight={500}
                  >
                    %
                  </Typography>
                ),
              }}
            />
            <FormControl>
              <InputLabel id="after-stage-select-label">
                Stage Position
              </InputLabel>
              <Select
                value={afterStage}
                sx={{ px: 5 }}
                label="Add After Stage"
                labelId="after-stage-select-label"
                onChange={(e) => setAfterStage(e.target.value)}
              >
                <MenuItem value={"Planning"}>Planning</MenuItem>
                <MenuItem value={"Design"}>Design</MenuItem>
                <MenuItem value={"Development"}>Development</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              size="medium"
              type="submit"
              startIcon={<Add />}
              sx={{ px: 5, ml: "auto" }}
            >
              Deploy Stage
            </Button>
          </Box>
        </Box>
        {/* Stages container */}

        <Box
          sx={{
            ...DFlex,
            width: "100%",
            gap: "25px",
            alignItems: "flex-start",
            mt: "30px",
          }}
        >
          {/* Stage */}
          <Typography variant="h5" fontWeight={500}>
            Active Stages (1)
          </Typography>
          <Box
            sx={{
              ...DFlex,
              flexDirection: "row",
              width: "100%",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              01.
            </Typography>
            <Box
              sx={{
                ...DFlex,
                flexDirection: "row",
                width: "100%",
                gap: "10px",
                justifyContent: "space-between",
                padding: "10px 25px",
                border: "2px solid lightgrey",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                Planning
              </Typography>
              <Typography variant="h6" fontWeight={500}>
                Holds 15%
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  border: "2px solid black",
                  borderRadius: "100px",
                  padding: "2.5px 20px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Accomplished
              </Typography>
              <ArrowDownward />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddStage;
