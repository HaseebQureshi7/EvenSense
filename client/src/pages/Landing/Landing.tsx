import { Box, Button, TextField, Typography } from "@mui/material";
import DFlex from "./../../styles/Flex";

function Landing() {
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
        component={"form"}
      >
        <Typography fontWeight={500} variant="h5">
          LOGIN
        </Typography>
        <TextField
          fullWidth
          required
          label="email"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          required
          label="password"
          type="password"
          InputLabelProps={{ shrink: true }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
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
