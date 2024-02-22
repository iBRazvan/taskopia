import * as React from "react";


import { Box, Grid, Typography } from "@mui/material";

import { Button } from "../../components/shared";
import { WelcomePlaceholder } from "../components";

import RegisterForm from "./components/createAccountForm/RegisterForm";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
	const navigate = useNavigate()
	

  return (
    <Grid component="main" container sx={{ height: "100vh" }}>
      <Grid item md={6} sm={5}>
        <WelcomePlaceholder
          message="Take your productivity to the next level."
          position="left"
        />
      </Grid>
      <Grid
        item
        md={6}
        sm={7}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Button
          onClick={() => navigate("/login")}
          size="small"
          sx={{ mx: 5, my: 8, fontWeight: 500 }}
          variant="outlined"
        >
          Log In
        </Button>

        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography component="h1" sx={{ fontWeight: 700 }} variant="h5">
            Create an Account
          </Typography>
          <Typography sx={{ fontSize: 10, lineHeight: 1.25, mb: 3 }}>
            It’s Simpe and Easy!!
          </Typography>
          <RegisterForm />
        </Box>
      </Grid>
    </Grid>
  );
}
