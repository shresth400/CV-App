import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { useSelector, useDispatch } from "react-redux";
import { setSkillList } from "./redux/inputRedux";

// The Skills component is a functional component that manages the skills input and display
export const Skills = () => {
	// useState hooks to manage the state of skills and rating
	const [skills, setSkills] = useState([]);
	const [rating, setRating] = useState(0);

	// useSelector hooks to access the state from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const dispatch = useDispatch();
	const cache = useSelector((state) => state.inputFields.skill);

	// Create an object to hold the new skill and rating
	const add = {
		Skill: info.Skill,
		Rating: rating,
	};

	// Log the rating value to the console
	console.log(add.Rating);

	// useEffect hook to set the skills state from the cache in the Redux store
	useEffect(() => {
		setSkills(cache);
	}, [cache]);

	// Function to handle the rating change
	const handleRatingChange = (ratingValue) => setRating(ratingValue);

	// Function to handle the addition of a new skill
	const handleAddSkill = () => {
		// Check if the skill and rating are not empty
		if (add.Skill && add.Rating) {
			// Update the skills state and dispatch the setSkillList action to the Redux store
			setSkills((skill) => {
				const update = [...skill, add];
				dispatch(setSkillList(update));
				return update;
			});
			// Reset the rating to 0
			setRating(0);
		}
	};

	// Function to handle the removal of a skill
	const handleRemoveSkill = (index) => {
		// Create a new array with the skill at the given index removed
		const updateSkill = skills.filter((_, i) => i !== index);
		// Dispatch the setSkillList action to the Redux store with the updated skills
		dispatch(setSkillList(updateSkill));
		// Update the skills state with the updated array
		setSkills(updateSkill);
	};

	// Render the Skills component
	return (
		<div className="skill ms-10">
			<h2 className="text-3xl font-bold text-primary-color">Skills</h2>

			<div className="my-4">
				<InputField
					id="Skill"
					name="skill"
					label="Skills"
					placeholder="Enter Skill"
				/>

				<div className="flex gap-2 mb-4">
					{[1, 2, 3, 4, 5].map((star) => (
						<button
							key={star}
							className={`text-xl ${
								star <= rating ? "text-yellow-500" : "text-gray-400"
							}`}
							onClick={() => handleRatingChange(star)}
						>
							★
						</button>
					))}
				</div>

				<button
					onClick={handleAddSkill}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Skill
				</button>
			</div>

			<div className="mt-4">
				{skills.map((skill, index) => (
					<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
						<h3 className="text-xl font-bold">{skill.Skill}</h3>
						<div className="flex gap-1 text-xl">
							{[1, 2, 3, 4, 5].map((star) => (
								<span
									key={star}
									className={`${
										star <= skill.Rating ? "text-yellow-500" : "text-gray-400"
									}`}
								>
									★
								</span>
							))}
						</div>
						<button
							onClick={() => handleRemoveSkill(index)}
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
