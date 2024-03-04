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
          sx={{ fontSize: "56px", textAlign: "center", padding: "0 1rem 0 0" }}
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
          background: `url(https://s3-alpha-sig.figma.com/img/4b24/6ddc/03ea890e6656bc557c24eafaa9fd425e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CvT~RJ2QhYfLDPIA3LzMtUFrWytaF~D4kT1So9WFHyV2-gexU2AFFuvYwwZrrsthQdlsdSt8LiKle0~7RD5fMQ-I1wjkFHHMTspFv-knULyjh5C04iDOyXDkG-PUGYq01jpm3tekh~Z3aXvrFftKJXv3FbQ2Bk3Sm86X4TRaN8d2BkHBc15WZjLXxTeUJAC8rBNQi0FXofWlbtRHXDH2Oi07zYQu44YHEnPC-vf6rBHcpm-PGOkXQYDxzRAB-OWvRskq33x46dZyET3MA0ewEkZrMpK7PWBY6du7sAw0q5IbkeJuawMQl2QE~uLbgW1RZiTE91wsLSbdhDWsESoaYg__)`,
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
