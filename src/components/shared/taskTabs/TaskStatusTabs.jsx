import React, { useState, useEffect } from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import StyledTab from "./Tab";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTabStatus } from "../../../store/task/task.slice";

export default function TaskStatusTabs() {
  const tasks = useSelector((state) => state.entities.tasks.data);
  const [value, setValue] = useState("All tasks");
  const [tabCounts, setTabCounts] = useState({});
  const dispatch = useDispatch();

  const tabValues = [
    "All tasks",
    "Pending",
    "In progress",
    "In review",
    "Completed",
    "Unnasigned",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setSelectedTabStatus(newValue));
  };

  useEffect(() => {
    updateTabCounts();
  }, [tasks]);

  const updateTabCounts = () => {
    const counts = {};
    tabValues.forEach((tabValue) => {
      tabValue === "All tasks"
        ? (counts[tabValue] = tasks.length)
        : (counts[tabValue] = tasks.filter(
            (task) => task.taskStatus === tabValue
          ).length);
    });
    setTabCounts(counts);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        aria-label="secondary tabs example"
        indicatorColor="primary"
        onChange={handleChange}
        textColor="primary"
        textTransform="none"
        value={value}
      >
        {tabValues.map((values, i) => (
          <StyledTab
            key={i}
            iconPosition="end"
            label={values}
            value={values}
            wrapped
            icon={
              <Box
                sx={{
                  backgroundColor: "rgba(240, 240, 240, 1)",
                  borderRadius: "12px",
                  border: "1px solid rgba(240, 240, 240, 1)",
                  minHeight: "24px",
                  minWidth: "31px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "12px", padding: "2px", fontWeight: "500" }}
                >
                  {tabCounts[values] || 0}
                </Typography>
              </Box>
            }
          />
        ))}
        ;
      </Tabs>
    </Box>
  );
}
