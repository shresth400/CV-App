import React from "react";
import { useDispatch } from "react-redux";
import { setDescription } from "./redux/inputRedux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// This is a functional component called QuillEditor that takes in a 'description' prop
const QuillEditor = ({ description }) => {
	// We use the useDispatch hook from react-redux to get a reference to the dispatch function
	const dispatch = useDispatch();

	// This function is called whenever the content of the Quill editor changes
	const handleChange = (value) => {
		// We dispatch the setDescription action from the inputRedux module, passing in the current description and the new content value
		dispatch(setDescription({ description, content: value }));
	};

	// This component renders a ReactQuill component, which is a rich text editor library
	return (
		<div>
			<ReactQuill
				// When the content changes, we call the handleChange function
				onChange={handleChange}
				// We configure the toolbar options for the Quill editor
				modules={{
					toolbar: [
						["bold", "italic", "underline", { list: "bullet" }, "link"],
					],
				}}
				// We add a CSS class to the Quill editor to style it
				className="bg-primary-color bg-opacity-10"
			/>
		</div>
	);
};

export default QuillEditor;
