import { Add, ArrowBack, Cancel } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import DFlex from "../../styles/Flex";
import { useNavigate } from "react-router-dom";

function AddStage() {
  const navigate = useNavigate();
  const [afterStage, setAfterStage] = useState("Design");
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
        {/* BODY */}
        <Box sx={{ width: "100%", ...DFlex, gap: "25px" }} component={"form"}>
          <TextField
            size="medium"
            sx={{ width: "100%" }}
            label="title"
            InputLabelProps={{ shrink: true }}
            placeholder="Stage Title"
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
              size="medium"
              // sx={{ width: "100%" }}
              label="percentage"
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
            <Select
              value={afterStage}
              sx={{ px: 5 }}
              label="After Stage"
              onChange={(e) => setAfterStage(e.target.value)}
            >
              <MenuItem value={"Planning"}>Planning</MenuItem>
              <MenuItem value={"Design"}>Design</MenuItem>
              <MenuItem value={"Development"}>Development</MenuItem>
            </Select>
            <Button
              variant="contained"
              size="medium"
              startIcon={<Add />}
              sx={{ px: 5, ml: "auto" }}
            >
              Deploy Stage
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddStage;
