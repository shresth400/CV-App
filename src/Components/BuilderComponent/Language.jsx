import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { useSelector, useDispatch } from "react-redux";
import { setLanguageList } from "./redux/inputRedux";

// The Languages component is responsible for managing the language input and display
export const Languages = () => {
	// Use the useState hook to manage the state of the languages and rating
	const [languages, setLanguages] = useState([]);
	const [rating, setRating] = useState("Beginner");

	// Use the useSelector hook to access the state from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const cache = useSelector((state) => state.inputFields.language);

	// Use the useDispatch hook to get the dispatch function from the Redux store
	const dispatch = useDispatch();

	// Create an object to hold the new language and proficiency
	const add = {
		Language: info["Language"],
		Proficiency: rating,
	};

	// Use the useEffect hook to initialize the languages state with the cached data
	useEffect(() => {
		setLanguages(cache);
	}, [cache]);

	// Function to handle the rating change
	const handleRatingChange = (e) => setRating(e.target.value);

	// Function to handle the addition of a new language
	const handleAdd = () => {
		if (add.Language && add.Proficiency) {
			setLanguages((language) => {
				const update = [...language, add];
				dispatch(setLanguageList(update));
				return update;
			});
		}
	};

	// Function to remove a language from the list
	const handleRemoveLanguage = (index) => {
		const updatedLanguages = languages.filter((_, i) => i !== index);
		dispatch(setLanguageList(updatedLanguages));
		setLanguages(updatedLanguages);
	};

	return (
		<div className="language ms-10">
			<h2 className="text-3xl font-bold text-primary-color">Languages</h2>

			{/* Language input and rating section */}
			<div className="my-4">
				<InputField id="Language" name="language" placeholder="Language" />

				<select
					value={rating}
					onChange={handleRatingChange}
					className="border-2 border-gray-300 rounded-lg p-2 text-xl w-60 mb-2"
				>
					<option value="Beginner">Beginner </option>
					<option value="Intermediate">Intermediate </option>
					<option value="Advanced">Advanced </option>
					<option value="Fluent">Fluent </option>
					<option value="Native">Native </option>
				</select>

				<button
					onClick={handleAdd}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Language
				</button>
			</div>

			{/* Display added languages */}
			<div className="mt-4">
				{languages.length === 0
					? ""
					: languages.map((lang, index) => (
							<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
								<h3 className="text-xl font-bold">{lang.Language}</h3>
								<p>
									<strong>Proficiency:</strong> {lang.Proficiency}
								</p>
								<button
									onClick={() => handleRemoveLanguage(index)}
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
