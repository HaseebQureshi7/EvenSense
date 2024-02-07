import { Box, Button, TextField, Typography } from "@mui/material";
import DFlex from "./../../styles/Flex";
import { useAxios } from "../../axios/useAxios";
import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";

type lgDataTypes = { email: string; password: string };

function Landing() {
  const loginMF = (loginData: lgDataTypes) => {
    return useAxios.post("login", loginData);
  };

  const { mutate, status } = useMutation({
    mutationFn: loginMF,
    onSuccess: (data) => {
      console.log(data.data);
    },
  });

  function HandleLogin(e: FormEvent) {
    e.preventDefault();
    const loginData: lgDataTypes = {
      email: (e.currentTarget as HTMLFormElement).email.value,
      password: (e.currentTarget as HTMLFormElement).password.value,
    };
    mutate(loginData);
    // console.log(loginData);
  }

  return (
    <Box sx={{ width: "100%", height: "100vh", ...DFlex, gap: "50px" }}>
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
          gap: "25px",
        }}
        onSubmit={HandleLogin}
        component={"form"}
      >
        <Typography fontWeight={500} variant="h5">
          LOGIN
        </Typography>
        <TextField
          fullWidth
          required
          label="email"
          name="email"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          required
          label="password"
          type="password"
          name="password"
          InputLabelProps={{ shrink: true }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ backgroundColor: status === "pending" ? "lightgrey" : "black" }}
          //   sx={{backgroundColor:'black', "&:hover" : { backgroundColor:"#333333" } }}
        >
          LOGIN
        </Button>
      </Box>

      <Typography>OR</Typography>
      <Button
        // color="secondary"
        variant="contained"
        size="large"
        sx={{ width: "30vw" }}
      >
        SIGNUP
      </Button>
    </Box>
  );
}

export default Landing;
