import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const statusMock = [
    {
      id: 1,
      status: "Pending",
    },
    {
      id: 2,
      status: "In progress",
    },
  
    {
      id: 3,
      status: "In review",
    },
    {
      id: 4,
      status: "Completed",
    },
    {
      id: 5,
      status: "Unassigned",
    },
  ];

const SelectButton = ({ label, onChange, value }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <Box sx={{ width: "auto" }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select label={label} value={selectedValue} onChange={handleChange}>
          {statusMock.map((item) => (
            <MenuItem key={item.id} value={item.status}>
              {item.status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectButton;
