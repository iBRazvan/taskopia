import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(BASE_URL)
const initialState = {
	isLoading: false,
	errors: null,
	data: [
		{
			id: "T-1",
			name: "Create a Design System for Enum Workspace.",
			status: "Todo",
			dueDate: "20.12.2024",
		},
	],
	selectedTabStatus: "All tasks"
};

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		createTask: (state, action) => {
			const id = Math.random().toString(36).slice(2, 10);
			state.push({ ...action.payload, id, status: "Todo" });
		},
		fetchTasksStart: (state) => {
			state.isLoading = true;
		},
		fetchTasksError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		fetchTasksSuccess: (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.data = action.payload;
		},
		createTasksStart: (state) => {
			state.isLoading = true;
		},
		createTaskSuccess: (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(action.payload);
		},
		setSelectedTabStatus: (state, action) => {
			state.selectedTabStatus = action.payload
		}
	},
});
export const {
	createTask,
	editTask,
	fetchTasksStart,
	fetchTasksError,
	fetchTasksSuccess,
	createTaskSuccess,
	createTasksStart,
	setSelectedTabStatus
} = taskSlice.actions;

export const fetchTasksAction =
	(onSuccess, onError) => async (dispatch, getState) => {
		dispatch(fetchTasksStart());
		const state = getState();
		// const token = state.app.auth.loggedUser.accessToken.accessToken;
		try {
			const response = await axios.get(`${BASE_URL}/tasks`, {
				
			});
			console.log(response)
			dispatch(fetchTasksSuccess(response.data));
			if (onSuccess) {
				onSuccess();
			}
		} catch (e) {
			dispatch(fetchTasksError(e));
			if (onError) {
				onError(e);
			}
		}
	};

// export const fetchTasks = createAsyncThunk("tasks", async () => {
// 	const response = await axios.get("/fakeApi/posts");
// 	return response.data;
// });

// export const createTaskAction = async (payload, onSuccess, onError) => {
//     const response = await fetch("http://localhost:3001/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//   };

export const createTaskAction =
	(payload, onSuccess, onError) => async (dispatch, getState) => {
		dispatch(createTasksStart());
		const state = getState();
		console.log(payload, "payload")
		// const token = state.app.auth.loggedUser.accessToken.accessToken;
		try {
			console.log( "TASK SLICE ", BASE_URL, )
			const response = await axios.post(
				`${BASE_URL}/tasks`,
				{	
					taskName: payload.taskName,
					taskStatus: payload.taskStatus,
					description: payload.description,
					dueDate: payload.date,
				},
				// {
				// 	headers: {
				// 		Authorization: `Bearer ${token}`,
				// 	},
				// }
			);
			console.log(response.data)
			dispatch(createTaskSuccess(response.data));
			if (onSuccess) {
				onSuccess();
			}
		} catch (e) {
			console.log(e, "error")
			dispatch(fetchTasksError(e));
			if (onError) {
				onError(e);
			}
		}
	};

// export const deleteTaskAction = () => async (dispatch) => {

// }

export default taskSlice.reducer;