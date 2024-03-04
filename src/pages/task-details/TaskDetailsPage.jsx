/* eslint-disable radix */
import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ViewTaskCardPage from "../view-task-card/ViewTaskCardPage";
import { useDispatch } from "react-redux";

import { Box, Grid, Typography } from "@mui/material";

import  withNavigationDrawer  from "../../components/navigation-drawer/withNavigationDrawer";
import { Button, GlobalSearchBar, TaskStatusTabs } from "../../components/shared";
// import TaskStatusTabs from "../../components/shared/taskTabs/TaskStatusTabs";
import { openModal } from "../../store/app/app.slice";
import { modalTypes } from "../../store/app/constants";
import { fetchTasksAction } from "../../store/task/task.slice";
import {TaskViewer} from "../components";

function TaskDetailsPage() {
  const [selectedTask, setSelectedTask] = useState([]);
  const params = useParams();
  const tasks = useSelector((state) => state.entities.tasks.data);
  const task = tasks.find((item) => item._id === params.id);
  useEffect(() => {
    setSelectedTask(task);
  }, []);

  
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(fetchTasksAction());
  // }, [dispatch]);

  return (
    <Grid
      component="main"
      sx={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          pb: "45px",
        }}
      >
        <GlobalSearchBar sx={{}} />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          pb: "45px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "38px",
              letterSpacing: "-0.02em",
              color: "#101C56",
            }}
          >
            Task
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#636363",
            }}
          >
            Your tasks in your space
          </Typography>
        </Box>
      </Grid>
      <ViewTaskCardPage></ViewTaskCardPage>;
    </Grid>
  );
}
export default withNavigationDrawer(TaskDetailsPage);