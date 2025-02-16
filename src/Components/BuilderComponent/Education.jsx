import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { setEducationList } from "./redux/inputRedux";

// The Education component is responsible for handling the education section of the form
export const Education = () => {
	// State variables to manage the education form inputs
	const [education, setEducation] = useState([]);
	const [school, setSchool] = useState("");
	const [degree, setDegree] = useState("");
	const [year, setYear] = useState("");

	// Retrieve the form fields and education data from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const cache = useSelector((state) => state.inputFields.education);

	// Create an object to store the new education entry
	const add = {
		School: info.school,
		Degree: info.degree,
		Year: info.year,
	};

	// Get the dispatch function from the Redux store
	const dispatch = useDispatch();

	// Load the cached education data when the component mounts
	useEffect(() => {
		setEducation(cache);
	}, [cache]);

	// Function to handle education form submission
	const handleEducationSubmit = () => {
		// Check if all the required fields are filled
		if (add.School && add.Degree && add.Year) {
			// Update the education state and dispatch the new education list to the Redux store
			setEducation((school) => {
				const update = [...school, add];
				dispatch(setEducationList(update));
				return update;
			});

			// Clear the form inputs
			setSchool("");
			setDegree("");
			setYear("");
		}
	};

	// Function to remove an education entry
	const handleRemoveEducation = (index) => {
		// Create a new education list without the entry at the specified index
		const updatedEducation = education.filter((_, i) => i !== index);

		// Dispatch the updated education list to the Redux store
		dispatch(setEducationList(updatedEducation));
		setEducation(updatedEducation);
	};

	return (
		<div className="education ms-10">
			<h2 className="text-5xl font-bold text-primary-color">Education</h2>

			{/* Education Form */}
			<div className="my-4">
				<InputField
					id="school"
					name="school"
					label="School/University"
					value={school}
					onChange={(e) => setSchool(e.target.value)}
					placeholder="Enter school or university name"
				/>
				<InputField
					id="degree"
					name="degree"
					label="Degree"
					value={degree}
					onChange={(e) => setDegree(e.target.value)}
					placeholder="Enter degree (e.g., B.Sc., M.A.)"
				/>
				<InputField
					id="year"
					name="year"
					label="Year of Graduation"
					value={year}
					onChange={(e) => setYear(e.target.value)}
					placeholder="Enter year of graduation"
				/>
				<button
					onClick={handleEducationSubmit}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Education
				</button>
			</div>

			{/* Display Education List */}
			<div className="mt-4">
				{education.map((edu, index) => (
					<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
						<h3 className="text-xl font-bold">{edu.School}</h3>
						<p className="text-md">{edu.Degree}</p>
						<p className="text-md">{edu.Year}</p>
						<button
							onClick={() => handleRemoveEducation(index)}
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
