import React, { useEffect, useState } from "react";
import QuillEditor from "./QuillEditor";
import InputField from "./InputField";
import { useSelector, useDispatch } from "react-redux";
import { setTrainingList } from "./redux/inputRedux";

// The Training component is responsible for managing the training section of the application
export const Training = () => {
	// Use the useState hook to manage the state of the trainings
	const [trainings, setTrainings] = useState([]);

	// Use the useDispatch hook to get the dispatch function from the Redux store
	const dispatch = useDispatch();

	// Use the useSelector hook to get the necessary data from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const des = useSelector((state) => state.inputFields.descriptions);
	const cache = useSelector((state) => state.inputFields.training);

	// Create an object to store the new training information
	const add = {
		Training: info["Training"],
		Institute: info["Institute"],
		Date: info["Date"],
		Description: des["Training Description"],
	};

	// Use the useEffect hook to initialize the trainings state with the cached data
	useEffect(() => {
		setTrainings(cache);
	}, [cache]);

	// Add a new training to the list
	const handleAdd = () => {
		// Check if the required fields (Training and Institute) are filled
		if (add.Training) {
			// Update the trainings state and dispatch the updated list to the Redux store
			setTrainings((training) => {
				const update = [...training, add];
				dispatch(setTrainingList(update));
				return update;
			});
		} else {
			// Display an alert if the required fields are not filled
			alert("No Trining details entered.");
		}
	};

	// Remove a training from the list
	const handleRemoveTraining = (index) => {
		// Create a new array with the training at the given index removed
		const updatedTrainings = trainings.filter((_, i) => i !== index);
		// Dispatch the updated list to the Redux store
		dispatch(setTrainingList(updatedTrainings));
		// Update the trainings state
		setTrainings(updatedTrainings);
	};

	return (
		<div className="training ms-10">
			<h2 className="text-3xl font-bold text-primary-color">Training</h2>

			{/* Training title, institute, date, and description input section */}
			<div className="my-4">
				<InputField
					id="Training"
					name="training"
					label="Trainings"
					placeholder="Training Title"
				/>

				<InputField
					id="Institute"
					name="institute"
					label="Institute"
					placeholder="Institute"
				/>

				<InputField id="Date" type="date" name="training_date" label="Date" />

				{/* Use the existing QuillEditor for the description */}
				<div className="mb-4">
					<label htmlFor="description" className="block text-lg font-semibold">
						Description
					</label>
					<QuillEditor description="Training Description" />
				</div>

				<button
					onClick={handleAdd}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Training
				</button>
			</div>

			{/* Display added trainings */}
			<div className="mt-4">
				{trainings.map((training, index) => (
					<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
						<h3 className="text-xl font-bold">{training.Training}</h3>
						{training.Institute &&

							<p className="text-gray-600">Institute: {training.Institute}</p>
						}
						{training.Date && (
							<p className="text-gray-600">
								Date of Completion: {training.Date}
							</p>
						)}
						<div
							className="text-gray-700"
							dangerouslySetInnerHTML={{ __html: training.Description }}
						/>
						<button
							onClick={() => handleRemoveTraining(index)}
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
