import React from "react";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import { NonAuthRoute } from "./utils/navigation/NonAuthRoute";
import { ProtectedRoute } from "./utils/navigation/ProtectedRoute";

import { TasksBoardPage } from "./pages";
import "./App.css";


function App() {
  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={
            
              <TasksBoardPage />
       
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
