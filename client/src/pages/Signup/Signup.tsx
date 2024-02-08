import { Box, Button, TextField, Typography } from "@mui/material";
import DFlex from "./../../styles/Flex";
import { useAxios } from "../../axios/useAxios";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserDataContext from "../../context/UserDataContext";

const Signup = () => {
  type sgDataTypes = {
    fName: string;
    lName: string;
    email: string;
    password: string;
  };
  const loginMF = (signUpData: sgDataTypes) => {
    return useAxios.post("auth/signup", signUpData);
  };

  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const { userData, setUserData } = useContext(UserDataContext);

  const { mutate, status } = useMutation({
    mutationFn: loginMF,
    onSuccess: (data) => {
      // console.log(data.data);
      navigate("/dashboard");
      setUserData(data.data.user);
    },
  });

  function HandleLogin(e: FormEvent) {
    e.preventDefault();
    const signUpData: sgDataTypes = {
      fName: (e.currentTarget as HTMLFormElement).fName.value,
      lName: (e.currentTarget as HTMLFormElement).lName.value,
      email: (e.currentTarget as HTMLFormElement).email.value,
      password: (e.currentTarget as HTMLFormElement).password.value,
    };
    mutate(signUpData);
    // console.log(loginData);
  }

  return (
    <Box sx={{ width: "100%", height: "100vh", ...DFlex, gap: "20px" }}>
      <Box
        sx={{
          width: "75px",
          aspectRatio: 1,
        }}
        className="logo-image"
        component={"img"}
        src="/images/logo.png"
      />

      {/* form */}
      <Box
        sx={{
          ...DFlex,
          width: "50%",
          flexDirection: "column",
          padding: "10px",
          gap: "15px",
        }}
        onSubmit={HandleLogin}
        component={"form"}
      >
        <Box component={"img"} src={image}></Box>
        <Typography fontWeight={500} variant="h5">
          SIGNUP
        </Typography>

        <Box
          sx={{
            ...DFlex,
            width: "100%",
            flexDirection: "row",
            padding: "10px",
            gap: "25px",
          }}
        >
          <TextField
            fullWidth
            required
            label="First Name"
            name="fName"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            required
            label="Last Name"
            name="lName"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        <TextField
          fullWidth
          required
          label="Email"
          name="email"
          InputLabelProps={{ shrink: true }}
          sx={{ padding: "10px" }}
        />
        {/* <Box
          sx={{
            ...DFlex,
            width: "100%",
            flexDirection: "row",
            padding: "10px",
            gap: "25px",
          }}
        >
          <TextField
            fullWidth
            required
            label="Company Name"
            name="companyName"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" sx={{ width: "20rem", height: "100%" }}>
            + ADD COMPANY LOGO
          </Button>
        </Box> */}
        <Box
          sx={{
            ...DFlex,
            width: "100%",
            flexDirection: "row",
            padding: "10px",
            gap: "25px",
          }}
        >
          <TextField
            fullWidth
            required
            label="Password"
            name="password"
            InputLabelProps={{ shrink: true }}
            type="password"
          />
          <TextField
            fullWidth
            required
            label="Confirm Password"
            name="confirmPassword"
            InputLabelProps={{ shrink: true }}
            type="password"
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            backgroundColor: status === "pending" ? "lightgrey" : "black",
          }}
          //   sx={{backgroundColor:'black', "&:hover" : { backgroundColor:"#333333" } }}
        >
          SIGN UP
        </Button>
      </Box>

      <Typography>OR</Typography>
      <Button
        onClick={() => navigate("/")}
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: status === "pending" ? "lightgrey" : "black",
          width: "30vw",
        }}
        size="large"
      >
        LOGIN
      </Button>
    </Box>
  );
};

export default Signup;
