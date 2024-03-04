import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "../../../components/shared";
import { Onboarding } from "../../../assets/icons";

const OverviewAction = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "3rem 0 0 0",
          alignItems: "start",
          gap: "20px",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "700" }} variant="h6">
            Let's get you started
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "0 3rem",
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            alignItems: "center",
            bgcolor: "#FFFFFF",
            borderRadius: "16px",
          }}
        >
          <Box sx={{ display: "flex", width: "50%", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                width: "48px",
                height: "48px",
                background: (t) => t.palette.background.surface,
              }}
            >
              <Onboarding />
            </Box>
            <h4>Text</h4>
          </Box>
          <Box sx={{ display: "flex" }}>
            <h4>Get started</h4>
            <h4>Arrows</h4>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "0 3rem",
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            alignItems: "center",
            bgcolor: "#FFFFFF",
            borderRadius: "16px",
          }}
        >
          <Box sx={{ display: "flex", width: "50%" }}>
            <Onboarding />
            <h4>Text</h4>
          </Box>
          <Box sx={{ display: "flex" }}>
            <h4>Get started</h4>
            <h4>Arrows</h4>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewAction;
