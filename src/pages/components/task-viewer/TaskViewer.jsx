import React from "react";
import { useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";

import { TaskCard } from "../../../components";
import EmptyTaskList from "../empty-task-list/EmptyTaskList";

function TaskViewer() {
  const tasks = useSelector((state) => state.entities.tasks.data);
  const selectedTabStatus = useSelector(
    (state) => state.entities.tasks.selectedTabStatus
  );
  const filteredTasks = tasks.filter(
    (item) => item.taskStatus === selectedTabStatus
  );
  console.log(filteredTasks);
  console.log(selectedTabStatus);

  return (
    <Box
      sx={{
        background: (t) => t.palette.background.surface,
        mt: "20px",
      }}
    >
      {tasks.length > 0 ? (
        <Grid
          container
          spacing={2}
          sx={{
            display: "grid",
            maxHeight: "100vh",
            overflowY: "scroll",
            overflowX: "hidden",
            gridAutoRows: "minmax(min-content,max-content)",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            scrollbarColor: "transparent transparent",
          }}
        >
          {selectedTabStatus === "All tasks"
            ? tasks.map((item, index) => (
                <Grid item key={item._id} xs="auto">
                  <TaskCard item={item} index={index + 1} />
                </Grid>
              ))
            : filteredTasks.map((item, index) => (
                <Grid item key={item._id} xs="auto">
                  <TaskCard item={item} index={index + 1} />
                </Grid>
              ))}
        </Grid>
      ) : (
        <EmptyTaskList />
      )}
    </Box>
  );
}

export default TaskViewer;
