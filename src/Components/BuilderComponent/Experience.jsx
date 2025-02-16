import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import QuillEditor from "./QuillEditor";
import { useSelector, useDispatch } from "react-redux";
import { setExperienceList } from "./redux/inputRedux";

// The Experience component is responsible for rendering the experience section of the form
export const Experience = () => {
	// Use the useState hook to manage the experience state
	const [experience, setExperience] = useState([]);
	// Use the useDispatch hook to get the dispatch function from the Redux store
	const dispatch = useDispatch();

	// Use the useSelector hook to get the necessary data from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const des = useSelector((state) => state.inputFields.descriptions);
	const cache = useSelector((state) => state.inputFields.experience);

	// Create an object to hold the new experience data
	const add = {
		Position: info["Job Title"],
		Company: info["Company Name"],
		Started: info["Start Date"],
		Ended: info["End Date"] || "Till Now",
		Description: des["Experience Description"],
	};

	// Use the useEffect hook to initialize the experience state with the cached data
	useEffect(() => {
		setExperience(cache);
	}, [cache]);

	// Define a function to handle adding a new experience
	const handleAdd = () => {
		// Check if the required fields are filled
		if (add.Position && add.Company && add.Started) {
			// Update the experience state and dispatch the updated list to the Redux store
			setExperience((job) => {
				const update = [...job, add];
				dispatch(setExperienceList(update));
				return update;
			});
		}
	};

	// Define a function to handle removing an experience
	const handleRemove = (index) => {
		// Create a new array with the experience at the given index removed
		const updatedExperience = experience.filter((_, i) => i !== index);
		// Dispatch the updated experience list to the Redux store
		dispatch(setExperienceList(updatedExperience));
		// Update the local experience state
		setExperience(updatedExperience);
	};

	// Render the experience section
	return (
		<div className="experience ms-10">
			<h2 className="text-3xl font-bold text-primary-color">Experience</h2>

			{/* Experience Form */}
			<div className="my-4">
				{/* Input fields for job title, company name, start date, and end date */}
				<InputField
					id="Job Title"
					name="Position"
					label="Job Title"
					placeholder="Enter your job title"
				/>
				<InputField
					id="Company Name"
					name="Company"
					label="Company Name"
					placeholder="Enter the company name"
				/>
					<InputField
						id="Start Date"
						name="Started"
						label="Start Date"
						type="date"
					/>
					<InputField id="End date" name="Ended" label="End Date" type="date" />

				{/* QuillEditor for Experience Description */}
				<div className="mb-4">
					<label htmlFor="description" className="block text-lg font-semibold">
						Description
					</label>
					<QuillEditor description="Experience Description" />
				</div>

				{/* Add Experience button */}
				<button
					onClick={handleAdd}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Experience
				</button>
			</div>

			{/* Display Experience List */}
			<div className="mt-4">
				{/* Map over the experience list and render each experience */}
				{experience.map((exp, index) => (
					<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
						<h3 className="text-xl font-bold">{exp.Position}</h3>
						<p className="text-lg font-semibold">{exp.Company}</p>
						<p className="text-md text-gray-600">
							{exp.Started} - {exp.Ended}
						</p>
						<p dangerouslySetInnerHTML={{ __html: exp.Description }}></p>

						{/* Remove Experience button */}
						<button
							onClick={() => handleRemove(index)}
							className="text-red-500 mt-2 hover:text-red-700"
						>
							Remove
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
