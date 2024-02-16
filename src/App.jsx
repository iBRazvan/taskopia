import React from "react";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import { NonAuthRoute } from "./utils/navigation/NonAuthRoute";
import { ProtectedRoute } from "./utils/navigation/ProtectedRoute";

import "./App.css";
import { TasksBoardPage,OverviewPage, SettingsPage } from "./pages";
import {Modal} from "./components/"


function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/tasks-board" element={<TasksBoardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <Modal/>
    </Box>
  );
}

export default App;
