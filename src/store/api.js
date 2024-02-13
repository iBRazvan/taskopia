import { createSlice } from "@reduxjs/toolkit";

export const initializeState = {
	isLoading: false,
	error: null,
};

export const createGenericSlice = ({ name = "", initialState, reducers }) =>
	createSlice({
		name,
		initialState,
		reducers: {
			fetchStart(state) {
				state.isLoading = true;
				state.error = null;
			},
			fetchSuccess(state) {
				state.error = null;
				state.isLoading = false;
			},
			fetchError(state, action) {
				state.isLoading = false;
				state.error = action.payload;
			},
			
			...reducers,
		},
	});
