import React, { useEffect, useState } from "react";
import QuillEditor from "./QuillEditor";
import InputField from "./InputField";
import { useSelector, useDispatch } from "react-redux";
import { setAchievementList } from "./redux/inputRedux";

// The Achievements component is responsible for managing the user's achievements
export const Achievements = () => {
	// Use the useState hook to manage the state of the achievements
	const [achievements, setAchievements] = useState([]);

	// Use the useDispatch hook to get a reference to the Redux dispatch function
	const dispatch = useDispatch();

	// Use the useSelector hook to get the current state of the input fields and descriptions from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const des = useSelector((state) => state.inputFields.descriptions);
	const cache = useSelector((state) => state.inputFields.achievement);

	// Create an object to hold the new achievement and its description
	const add = {
		Achievement: info["Achievement"],
		Description: des["Achievement Description"],
	};

	// Use the useEffect hook to initialize the achievements state with the cached achievements
	useEffect(() => {
		setAchievements(cache);
	}, [cache]);

	// Define a function to handle adding a new achievement
	const handleAdd = () => {
		// Check if the achievement title has been entered
		if (add.Achievement) {
			// Update the achievements state by adding the new achievement
			setAchievements((achievement) => {
				const update = [...achievement, add];
				// Dispatch an action to update the Redux store with the new achievements
				dispatch(setAchievementList(update));
				return update;
			});
		} else {
			// Display an alert if no achievement title has been entered
			alert("No Achievement details entered.");
		}
	};

	// Define a function to handle removing an achievement
	const handleRemove = (index) => {
		// Create a new array of achievements with the specified index removed
		const updatedAchievements = achievements.filter((_, i) => i !== index);
		// Dispatch an action to update the Redux store with the updated achievements
		dispatch(setAchievementList(updatedAchievements));
		// Update the local state with the updated achievements
		setAchievements(updatedAchievements);
	};

	// Render the Achievements component
	return (
		<div className="achievements ms-10">
			<h2 className="text-3xl font-bold text-primary-color">Achievements</h2>

			{/* Achievement title and description input section */}
			<div className="my-4">
				<InputField
					id="Achievement"
					name="achievements"
					label="Achievements"
					placeholder="Achievement Title"
				/>

				{/* Use  QuillEditor for the description */}

				<div className="mb-4">
					<label htmlFor="description" className="block text-lg font-semibold">
						Description
					</label>

					<QuillEditor description="Achievement Description" />
				</div>

				<button
					onClick={handleAdd}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Achievement
				</button>
			</div>

			{/* Display added achievements */}
			<div className="mt-4">
				{achievements.length === 0
					? ""
					: achievements.map((achievement, index) => (
							<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
								<h3 className="text-xl font-bold">{achievement.Achievement}</h3>
								<div
									className="text-gray-700"
									dangerouslySetInnerHTML={{ __html: achievement.Description }}
								/>
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
