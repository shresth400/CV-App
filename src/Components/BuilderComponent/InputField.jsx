import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "./redux/inputRedux";

// This is a functional component that represents an input field
// It takes in various props to configure the input field
const InputField = ({
	id, // Unique identifier for the input field
	name, // Name of the input field
	label, // Label for the input field
	type = "text", // Type of the input field (default is "text")
	value, // Current value of the input field
	onChange, // Function to handle changes in the input field
	placeholder, // Placeholder text for the input field
	className = "", // Additional CSS classes to apply to the input field
}) => {
	// Get the dispatch function from the Redux store
	const dispatch = useDispatch();

	// Function to handle changes in the input field
	const handleChange = (event) => {
		// Get the new value from the input field
		const value = event.target.value;
		// Dispatch an action to update the input value in the Redux store
		dispatch(setInputValue({ id, value: value }));
	};

	// Get the current state of the input field from the Redux store
	const info = useSelector((state) => state.inputFields.fields[id]);

	// Render the input field
	return (
		<div className={`mb-4 ${className}`}>
			<label htmlFor={id} className="block text-lg font-semibold">
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				value={info || value}
				className="ps-2 text-xl font-bold rounded-lg border-2 p-2 mt-2 w-full bg-primary-color bg-opacity-10"
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputField;
