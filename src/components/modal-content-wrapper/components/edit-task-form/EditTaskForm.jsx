import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";

import { editTask } from "../../../../store/task/task.slice";
import { Button, Input } from "../../../shared"

const priorityMock = [
	{
		id: 1,
		priority: "Less important",
	},

	{
		id: 2,
		priority: "Important",
	},

	{
		id: 3,
		priority: "Very Important",
	},
];

const LoginFormSchema = Yup.object().shape({
	taskName: Yup.string().min(5).required("Required"),
	// taskPriority: Yup.string().required("Required"),
	date: Yup.string().required("Required"),
	description: Yup.string().min(5).required("Required"),
});
function SelectButton() {
	return (
		<Box sx={{ width: "auto" }}>
			<FormControl fullWidth>
				<InputLabel>Task Priority</InputLabel>
				<Select id="Priority" label="Priority">
					{priorityMock.map((item) => (
						<MenuItem id={item.id} key={item.id} value={item.id}>
							{`${item.priority}`}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

function EditTaskForm() {
	const theme = useTheme();
	const dispatch = useDispatch();
	const { handleChange, values, handleSubmit, errors, isValid } = useFormik({
		initialValues: {
			taskName: "",
			date: "",
			description: "",
			isValid: true,
		},

		validationSchema: LoginFormSchema,
		onSubmit: (formValues) => {
			console.log(formValues);
			dispatch(editTask({ name: formValues.taskName }));
		},
	});

	return (
		<Box component="form" onSubmit={handleSubmit} padding="30px" sx={{ mt: 1 }}>
			<Typography component="h1" sx={{ fontWeight: "bold" }} variant="h5">
				Edit Task
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
					autoComplete="Task Priority"
					error={errors.taskPriority}
					fullWidth
					helperText={errors.taskPriority}
					id="taskPriority"
					label="Task Priority"
					margin="normal"
					name="taskPriority"
					onChange={handleChange}
					required
					value={values.taskPriority}
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
				Edit Task
			</Button>
		</Box>
	);
}
export default EditTaskForm;