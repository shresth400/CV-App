import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import QuillEditor from "./QuillEditor";
import { useSelector, useDispatch } from "react-redux";
import { setProjectList } from "./redux/inputRedux";

// The Projects component is responsible for managing the project list
export const Projects = () => {
	// Initialize the project state with an empty array
	const [project, setProject] = useState([]);

	// Get the necessary data from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const des = useSelector((state) => state.inputFields.descriptions);
	const cache = useSelector((state) => state.inputFields.project);

	// Create an object to hold the new project details
	const add = {
		Project: info["Project Title"],
		Link: info["Project Link"],
		Description: des["Project Description"],
	};

	// Dispatch function to update the Redux store
	const dispatch = useDispatch();

	// Load the project list from the Redux store when the component mounts
	useEffect(() => {
		setProject(cache);
	}, [cache]);

	// Handle the addition of a new project
	const handleAdd = () => {
		// Check if all the required fields are filled
		if (add.Project && add.Link && add.Description) {
			console.log("inside project submit");
			// Update the project list in the state and the Redux store
			setProject((project) => {
				const update = [...project, add];
				dispatch(setProjectList(update));
				return update;
			});
		} else {
			// Display an alert if any of the required fields are missing
			alert("No Project Details entered.");
		}
	};

	// Handle the removal of a project
	const handleRemove = (index) => {
		// Create a new project list without the project at the given index
		const updatedProjects = project.filter((_, i) => i !== index);
		// Update the project list in the Redux store
		dispatch(setProjectList(updatedProjects));
		// Update the project list in the state
		setProject(updatedProjects);
	};

	return (
		<div className="project ms-10">
			<h2 className="text-3xl font-bold text-primary-color">Projects</h2>

			{/* Project Form */}
			<div className="my-4">
				<InputField
					id="Project Title"
					name="project"
					label="Project Title"
					placeholder="Enter project title"
				/>

				{/* QuillEditor for Project Description */}
				<div className="mb-4">
					<label
						htmlFor="projectDescription"
						className="block text-lg font-semibold"
					>
						Project Description
					</label>
					<QuillEditor description="Project Description" />
				</div>

				<InputField
					id="Project Link"
					name="project_link"
					label="Project Link"
					placeholder="Enter project URL"
				/>

				<button
					onClick={handleAdd}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Project
				</button>
			</div>

			{/* Display Projects List */}
			<div className="mt-4">
				{project.map((proj, index) => (
					<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
						<h3 className="text-xl font-bold">{proj.Project}</h3>
						<div
							className="text-md mt-2"
							dangerouslySetInnerHTML={{ __html: proj.Description }}
						/>
						<a
							href={proj.Link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary-color hover:underline mt-2 inline-block"
						>
							{proj.Link}
						</a>
						<button
							onClick={() => handleRemove(index)}
							className="block text-red-500 mt-2 hover:text-red-700"
						>
							Remove
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
