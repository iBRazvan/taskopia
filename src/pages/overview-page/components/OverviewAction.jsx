import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/app/app.slice";
import { modalTypes } from "../../../store/app/constants";

import {
  Onboarding,
  Workspace,
  BoltArrow,
  BoltArrowSelected,
} from "../../../assets/icons";

const OverviewAction = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hover1, setHover1] = useState();
  const [hover2, setHover2] = useState();

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

        {/* First item */}
        <Box
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
          sx={{
            padding: "0 0.7rem",
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            alignItems: "center",
            bgcolor: "#FFFFFF",
            borderRadius: "16px",
            color: "#666666",
            gap: "20px",
            ":hover": {
              color: (t) => t.palette.primary.main,
            },
            cursor: "pointer",
          }}
          onClick={() => dispatch(openModal(modalTypes.uploadPicture))}
        >
          {/* First col */}
          <Box
            sx={{
              display: "flex",
              width: "70%",
              alignItems: "center",
              padding: "0.6rem 0rem",
              gap: "14px",
            }}
          >
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
            <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
              Hey name, update your porfile picture.
            </Typography>
          </Box>
          {/* Second col */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
              Get started
            </Typography>

            {hover1 ? <BoltArrowSelected /> : <BoltArrow />}
          </Box>
        </Box>

        {/* Second item */}
        <Box
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          sx={{
            padding: "0 0.7rem",
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            alignItems: "center",
            bgcolor: "#FFFFFF",
            borderRadius: "16px",
            color: "#666666",
            gap: "20px",
            ":hover": {
              color: (t) => t.palette.primary.main,
            },
            cursor: "pointer",
          }}
          onClick={() => navigate("/tasks-board")}
        >
          {/* Left col */}
          <Box
            sx={{
              display: "flex",
              width: "70%",
              alignItems: "center",
              padding: "0.6rem 0rem",
              gap: "14px",
            }}
          >
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
              <Workspace />
            </Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
              Create your first task in your Workspace.
            </Typography>
          </Box>

          {/* Right col */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
              Get started
            </Typography>
            {hover2 ? <BoltArrowSelected /> : <BoltArrow />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewAction;
