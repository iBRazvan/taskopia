import React from "react";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import { NonAuthRoute } from "./utils/navigation/NonAuthRoute";
import { ProtectedRoute } from "./utils/navigation/ProtectedRoute";

import "./App.css";
import {
  TasksBoardPage,
  OverviewPage,
  SettingsPage,
  TaskDetailsPage,
  LoginPage,
  RegisterPage,
} from "./pages";
import { Modal } from "./components/";

function App() {
  return (
    <Box>
      <Routes>
        <Route
          path="/login"
          element={
            <NonAuthRoute>
              <LoginPage />
            </NonAuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <NonAuthRoute>
              <RegisterPage />
            </NonAuthRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <OverviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/overview"
          element={
            <ProtectedRoute>
              <OverviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks-board"
          element={
            <ProtectedRoute>
              <TasksBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks-board/:id"
          element={
            <ProtectedRoute>
              <TaskDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Modal />
    </Box>
  );
}

export default App;
