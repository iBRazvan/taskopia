import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

import { loginError, loginStart, uploadPictureSuccess, logInSuccess, getLoggedUserAction } from "../app/app.slice";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: {
			isLoading: false,
			errors: null,
		},
	},
	reducers: {
		registerStart: (state) => {
			state.user.isLoading = true;
		},
		registerError: (state, action) => {
			state.user.isLoading = false;
			state.user.error = action.payload;
		},
		registerSuccess: (state) => {
			state.user.isLoading = false;
			state.user.error = null;
		},
	},
});

export const { registerSuccess, registerStart, registerError } =
	userSlice.actions;

export const registerAction =
	(payload, onSuccess, onError) => async (dispatch) => {
		dispatch(loginStart());
		
		try { 
			const response = await axios.post(`${BASE_URL}/auth/register`,
			 { 
				name: payload.name,
				email: payload.email,
				password: payload.password,
				rememberMe: false,
			});
			console.log(response.data)
			dispatch(registerSuccess(response.data));
			if (onSuccess) {
				onSuccess();
			}
		} catch (e) {
			dispatch(loginError(e.response.data.message));
			if (onError) {
				onError(e.response.data.message);
			}
		}
	};

	export const loginAction =
	(payload, onSuccess, onError) => async (dispatch) => {
		dispatch(loginStart());
		try {
			await axios.post(`${BASE_URL}/auth/login`, {
				email: payload.email,
				password: payload.password,
				rememberMe: false,
			});
			
			await dispatch(logInSuccess(response.data));
			onSuccess()
			dispatch(getLoggedUserAction())

		} catch (e) {
			
			dispatch(loginError(e.response.data.message));
			if (onError) {
				onError(e.response.data.message);
			}
		}
	};

export const uploadProfilePicture =
	(payload, onSuccess, onError) => async (dispatch, getState) => {
		const state = getState();
		dispatch(registerStart());
		const token = state.app.auth.loggedUser.accessToken.token;

		try {
			// const response = axios.post(
			// 	`${API_BASE_URL}/user/upload`,
			// 	{ file: payload.image },
			// 	{
			// 		headers: {
			// 			"Content-Type": "multipart/form-data",
			// 			Authorization: `Bearer ${token}`,
			// 		},
			// 		mode: "no-cors",
			// 	}
			// );

			// dispatch(uploadPictureSuccess((await response).data));
		} catch (e) {
			console.log(e.response)
			dispatch(registerError(e.response.data.message));
			if (onError) {
				onError(e.response.data.message);
			}
		}
	};

export default userSlice.reducer;