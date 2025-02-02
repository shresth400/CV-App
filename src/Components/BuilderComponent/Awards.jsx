import React, { useEffect, useState } from "react";
import QuillEditor from "./QuillEditor";
import InputField from "./InputField";
import { useSelector, useDispatch } from "react-redux";
import { setAwardList } from "./redux/inputRedux";

// The Awards component is responsible for managing the award section of the application
export const Awards = () => {
	// Use the useDispatch hook to get the dispatch function from the Redux store
	const dispatch = useDispatch();

	// Use the useSelector hook to get the necessary data from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const des = useSelector((state) => state.inputFields.descriptions);
	const cache = useSelector((state) => state.inputFields.award);

	// Create an object to store the award information
	const add = {
		Award: info["Award Title"],
		Organization: info["Organization"],
		Location: info["Award Location"],
		Year: info["Year"],
		Description: des["Award Description"],
	};

	// Use the useState hook to manage the list of added awards
	const [awards, setAwards] = useState([]);

	// Use the useEffect hook to initialize the awards list with the cached data
	useEffect(() => {
		setAwards(cache);
	}, [cache]);

	// Function to handle adding a new award to the list
	const handleAdd = () => {
		// Check if all the required fields are filled
		if (add.Award && add.Organization && add.Location && add.Year) {
			// Update the awards list and dispatch the updated list to the Redux store
			setAwards((award) => {
				const update = [...award, add];
				dispatch(setAwardList(update));
				return update;
			});
		}
	};

	// Function to handle removing an award from the list
	const handleRemoveAward = (index) => {
		// Create a new list with the award at the given index removed
		const updatedAwards = awards.filter((_, i) => i !== index);
		// Dispatch the updated list to the Redux store and update the local state
		dispatch(setAwardList(updatedAwards));
		setAwards(updatedAwards);
	};

	return (
		<div className="awards ms-10">
			<h2 className="text-3xl font-bold text-primary-color">Awards</h2>

			{/* Award title, organization, location, received year, and description input section */}
			<div className="my-4">
				<InputField
					id="Award Title"
					name="award_title"
					label="Title"
					placeholder="Award Title"
				/>

				<InputField
					id="Organization"
					name="award_organization"
					label="Organization"
					placeholder="Organization"
				/>

				<InputField
					id="Award Location"
					name="award_location"
					label="Location"
					placeholder="Location"
				/>

				<InputField
					id="Year"
					name="award_year"
					label="Received Year"
					placeholder="Received Year"
				/>

				{/* Use the existing QuillEditor for the description */}
				<div className="mb-4">
					<label htmlFor="description" className="block text-lg font-semibold">
						Description
					</label>
					<QuillEditor description="Award Description" />
				</div>

				<button
					onClick={handleAdd}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Award
				</button>
			</div>

			{/* Display added awards */}
			<div className="mt-4">
				{awards.map((award, index) => (
					<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
						<h3 className="text-xl font-bold">{award.Award}</h3>
						<p>
							<strong>Organization:</strong> {award.Organization}
						</p>
						<p>
							<strong>Location:</strong> {award.Location}
						</p>
						<p>
							<strong>Received Year:</strong> {award.Year}
						</p>
						<div
							className="text-gray-700"
							dangerouslySetInnerHTML={{ __html: award.Description }}
						/>
						<button
							onClick={() => handleRemoveAward(index)}
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
