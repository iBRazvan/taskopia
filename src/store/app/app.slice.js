import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";


const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const appSlice = createSlice({
	name: "app",
	initialState: {
		ui: {
			sidebar: {
				isOpen: false,
			},
			modal: {
				isOpen: false,
				modalType: null,
			},
			taskStatus: {
				UNNASIGNED: "UNNASIGNED",
				PENDING: "PENDING",
				IN_PROGRESS: "IN_PROGRESS",
				COMPLETED: "COMPLETED",
			},
		},
		auth: {
			isLoggedIn: true,
			isLoading: false,
			error: null,
			loggedUser: {
				accessToken: null,
				userInfo: null,
			},
		},
	},
	reducers: {
		toggleSidebar: (state) => {
			state.ui.sidebar.isOpen = !state.ui.sidebar.isOpen;
		},
		openSidebar: (state) => {
			state.ui.sidebar.isOpen = true;
		},
		closeSidebar: (state) => {
			state.ui.sidebar.isOpen = false;
		},
		toggleModal: (state) => {
			state.ui.modal.isOpen = !state.ui.modal.isOpen;
		},
		openModal: (state, action) => {
			state.ui.modal.isOpen = true;
			state.ui.modal.modalType = action.payload;
		},
		closeModal: (state) => {
			state.ui.modal.isOpen = false;
			state.ui.modal.modalType = null;
		},
		loginStart: (state) => {
			state.auth.isLoading = true;
		},
		loginError: (state, action) => {
			state.auth.isLoading = false;
			state.auth.error = action.payload;
			state.auth.isLoggedIn = false;
			state.auth.loggedUser = {
				accessToken: null,
			};
		},
		logInSuccess: (state, action) => {
			state.auth.isLoggedIn = true;
			state.auth.isLoading = false;
			state.auth.error = null;
			state.auth.loggedUser.accessToken = action.payload;
		},
		getLoggUsersSuccess: (state, action) => {
			state.auth.isLoading = false;
			state.auth.loggedUser.userInfo = action.payload;
		},
		uploadPictureSuccess: (state, action) => {
			state.auth.isLoading = false;
			state.auth.error = null;
			state.auth.loggedUser.userInfo = action.payload;
		},
		logOut: (state) => {
			state.auth.isLoggedIn = false;
			state.auth.loggedUser = {
				accessToken: null,
				userInfo: null,
			};
		},
		updateUserStart: (state) => {
			state.auth.isLoading = true;
		},
		updateUserError: (state, action) => {
			state.auth.isLoading = false;
			state.auth.error = action.payload;
		},
		updateUserSuccess: (state, action) => {
			state.auth.isLoading = false;
			state.auth.error = null;
			state.auth.loggedUser.userInfo = action.payload;
		},
	},
});

export const {
	toggleSidebar,
	openSidebar,
	closeSidebar,
	toggleModal,
	openModal,
	closeModal,
	logInSuccess,
	loginStart,
	loginError,
	logOut,
	getLoggUsersSuccess,
	uploadPictureSuccess,
	updateUserStart,
	updateUserError,
	updateUserSuccess,
} = appSlice.actions;

export const getLoggedUserAction = () => async (dispatch, getState) => {
	dispatch(loginStart());
	const state = getState();
	const userId = state.app.auth.loggedUser.accessToken.user._id;
	const token = state.app.auth.loggedUser.accessToken.token;
	try {
		const response = await axios.get(`${BASE_URL}/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch(getLoggUsersSuccess(response.data));
	} catch (e) {
		dispatch(loginError(e.message));
	}
};

export const updateLoggedUser =
	(payload, onSuccess, onError) => async (dispatch, getState) => {
		dispatch(updateUserStart());
		const state = getState();
		const token = state.app.auth.loggedUser.accessToken.token;
		try {
			// const response = await axios.patch(
			// 	`${API_BASE_URL}/user/update`,
			// 	{
			// 		...payload,
			// 	},
			// 	{
			// 		headers: {
			// 			Authorization: `Bearer ${token}`,
			// 		},
			// 	}
			// );
			dispatch(updateUserSuccess(response.data));
			if (onSuccess) {
				onSuccess();
			}
		} catch (e) {
			dispatch(updateUserError(e.response.data.message));
			if (onError) {
				onError(e.message);
			}
		}
	};

export const logInAction = (payload) => async (dispatch) => {
	dispatch(loginStart());
	try {
		const response = await axios.post(`${BASE_URL}/auth/login`, {
			email: payload.email,
			password: payload.password,
		});
		await dispatch(logInSuccess(response.data));
		console.log(response.data)
		dispatch(getLoggedUserAction());
	} catch (e) {
		dispatch(loginError(e.message));
	}
};

export default appSlice.reducer;