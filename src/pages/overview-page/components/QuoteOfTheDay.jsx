import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { Button } from "../../../components/shared";

export default function QuoteOfTheDay() {
  // States
  const loggedUser = useSelector((state) => state.app.auth.loggedUser.userInfo);
  const [quote, setQuote] = useState(
    "The universe is made of stories, not of atoms."
  );
  const [backgroundQuote, setBackgroundQuote] = useState("");

  // Fetch Data

  useEffect(() => {
	const fetchData = async () => {
	  try {
		const response = await fetch(
		  "https://quotes.rest/qod?category=inspire&language=en",
		  {
			method: "GET",
			headers: {
			  accept: "application/json",
			  'X-TheySaidSo-Api-Secret': 'Vp7r3EU5ZbNSRyOIqC5gTgqjLc1p5cQ6RYD3UCs9',
			},
			mode:"no-cors"
		  }
		);
		// Log response status
		console.log("Response status:", response.status);
		// Log response headers
		console.log("Response headers:", response.headers);
  
		const data = await response.json();
		console.log("Response data:", data);
	  } catch (error) {
		console.log("Error:", error);
	  }
	};
	fetchData();
  }, []);
  
  
  // App
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          m: "3rem 0 0 0",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ fontSize: "5rem", textAlign: "center", padding: "0 1rem 0 0" }}
        >
          &#128075;
        </Box>

        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Hi {loggedUser?.fullName},
          </Typography>
          <Typography variant="h6">Welcome To Taskopia Task Manager</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          background: `url(${backgroundQuote})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "2rem 0",
          width: "100%",
          height: "180px",
          borderRadius: "20px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "0 3rem",
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {quote}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              height: "70%",
              alignItems: "flex-end",
            }}
          >
            <CloseIcon fontSize="large" />
            <Button size="small" variant="contained">
              Get started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
