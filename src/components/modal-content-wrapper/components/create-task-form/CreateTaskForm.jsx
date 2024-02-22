import React, { useState } from "react";
import { Field, useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import {
  AlertTitle,
  Box,
  Snackbar,
  Typography,
} from "@mui/material";
import SelectButton from "./SelectButton/SelectButton";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";

import { closeModal } from "../../../../store/app/app.slice";
import { createTaskAction } from "../../../../store/task/task.slice";
import { Alert, Button, Input } from "../../../shared";


const CreateTaskSchema = Yup.object().shape({
  taskName: Yup.string().min(5).required("Required"),
  taskStatus: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  description: Yup.string().min(5).required("Required"),
});


function CreateTaskForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [alertBox, setAlertBox] = useState({
    title: "Success",
    type: "success",
    message: "",
  });

  // Alert actions
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSuccess = () => {
    setOpen(true);
    setAlertBox({
      title: "Success",
      message: "Task was created!",
      type: "success",
    });
    dispatch(closeModal());
  };

  const onError = (errorArray) => {
    setOpen(true);
    setAlertBox({
      title: "Error",
      message: errorArray,
      type: "error",
    });
  };

  // Formik actions
  const { handleChange, values, handleSubmit, errors, isValid, setFieldValue} = useFormik({
    initialValues: {
      taskName: "",
      date: "",
      description: "",
      taskStatus: "",
      createdAt: { type: Date, default: Date.now },
      isValid: true,
    },

    validationSchema: CreateTaskSchema,
    onSubmit: (formValues) => {
      dispatch(createTaskAction({ ...formValues }, onSuccess, onError));
    },
  });

  const handleSelectChange = (selectedStatus) => {
   setFieldValue("taskStatus", selectedStatus); 
  };

  return (
    <Box component="form" onSubmit={handleSubmit} padding="30px" sx={{ mt: 1 }}>
      <Typography component="h1" sx={{ fontWeight: "bold" }} variant="h5">
        Create Task
      </Typography>
      <Input
        autoComplete="taskName"
        autoFocus
        error={errors.taskName}
        fullWidth
        helperText={errors.taskName}
        id="Task Name"
        label="Task Name"
        margin="normal"
        name="taskName"
        onChange={handleChange}
        required
        value={values.taskName}
      />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="flex-start"
        spacing={2}
        sx={{ width: "100%", padding: theme.spacing(3, 0) }}
      >
        <SelectButton
          autoComplete="Task Status"
          error={errors.taskStatus}
          fullWidth
          helperText={errors.taskStatus}
          id="taskStatus"
          label="Task Status"
          margin="normal"
          name="taskStatus"
          onChange={(selectedStatus) =>
            handleSelectChange(selectedStatus, handleChange)
          }
          value={values.taskStatus}
        />

        <Input
          autoComplete="date"
          error={errors.date}
          fullWidth
          helperText={errors.date}
          id="date"
          label="Select A Date"
          margin="normal"
          name="date"
          onChange={handleChange}
          required
          type="date"
          value={values.date}
        />
      </Stack>

      <Input
        autoComplete="description"
        error={errors.description}
        fullWidth
        helperText={errors.description}
        id="description"
        label="Task Description"
        margin="normal"
        name="description"
        onChange={handleChange}
        placeholder="Type your content here..."
        required
        type="text"
        value={values.description}
      />

      <Button
        disabled={!isValid}
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        variant="contained"
      >
        Create Task
      </Button>

      <Snackbar
        onClose={handleClose}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
					onClose={handleClose}
					severity={alertBox.type}
					sx={{
						width: 350,
					}}
				>
					<AlertTitle>{alertBox.title}</AlertTitle>
					{alertBox.message}
				</Alert>
      </Snackbar>
    </Box>
  );
}
export default CreateTaskForm;
