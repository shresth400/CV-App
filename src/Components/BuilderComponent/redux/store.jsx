import { configureStore } from "@reduxjs/toolkit";
import inputFieldsReducer from "./inputRedux";

// Create a Redux store using the configureStore function
const store = configureStore({
	// Define the root reducer for the store
	reducer: {
		// Associate the inputFields property of the state with the inputFieldsReducer function
		inputFields: inputFieldsReducer,
	},
});


export default store;
