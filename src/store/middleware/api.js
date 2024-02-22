import axios from "axios";

import * as actions from "../api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const api =
	({ dispatch }) =>
	(next) =>
	async (action) => {
		if (action.type !== actions.apiCallBegan.type) return next(action);

		const { url, method, data, onStart, onSuccess, onError } = action.payload;

		if (onStart) dispatch({ type: onStart });

		next(action);

		try {console.log( "MIDDLEWARE", BASE_URL, )
			const response = await axios.request({
				
				baseURL: BASE_URL,
				url,
				method,
				data,
			});
			console.log(response)
			// General
			dispatch(actions.apiCallSucess(response.data));
			// Specific
			if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
		} catch (error) {
			// General
			dispatch(actions.apiCallFailed(error.message));
			// Specific
			if (onError) dispatch({ type: onError, payload: error.message });
		}
	};

export default api;