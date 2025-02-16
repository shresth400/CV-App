import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { useSelector, useDispatch } from "react-redux";
import { setReferenceList } from "./redux/inputRedux";

// The References component is responsible for managing the references section of the application
export const References = () => {
	// Use the useState hook to manage the state of the references
	const [references, setReferences] = useState([]);

	// Use the useSelector hook to access the state from the Redux store
	const info = useSelector((state) => state.inputFields.fields);
	const cache = useSelector((state) => state.inputFields.reference);

	// Use the useDispatch hook to get a reference to the Redux dispatch function
	const dispatch = useDispatch();

	// Create an object with the reference details from the input fields
	const add = {
		Name: info["Name"],
		Company: info["Reference_Company"],
		Designation: info["Reference_Designation"],
		Phone: info["Reference_Phone"],
		Email: info["Reference_Email"],
	};

	// Use the useEffect hook to initialize the references state with the cached references
	useEffect(() => {
		setReferences(cache);
	}, [cache]);

	// Handle the addition of a new reference
	const handleAdd = () => {
		// Check if all required fields are filled
		if (add.Name && add.Company && add.Designation && add.Phone && add.Email) {
			// Update the references state and dispatch the updated list to the Redux store
			setReferences((reference) => {
				const update = [...reference, add];
				dispatch(setReferenceList(update));
				return update;
			});
		}
	};

	// Handle the removal of a reference
	const handleRemove = (index) => {
		// Create a new array with the reference at the given index removed
		const updatedReferences = references.filter((_, i) => i !== index);
		// Dispatch the updated list to the Redux store
		dispatch(setReferenceList(updatedReferences));
		// Update the references state
		setReferences(updatedReferences);
	};

	return (
		<div className="reference ms-10">
			<h2 className="text-3xl font-bold text-primary-color">References</h2>

			{/* Render the reference input fields */}
			<div className="my-4">
				<InputField
					id="Name"
					name="reference_name"
					label="Name"
					placeholder="Name"
				/>
				<InputField
					id="Reference_Company"
					name="company_name"
					label="Company"
					placeholder="Company"
				/>
				<InputField
					id="Reference_Designation"
					name="designation"
					label="Designation"
					placeholder="Designation"
				/>{" "}
				<InputField
					id="Reference_Phone"
					name="phone"
					label="Phone"
					placeholder="Phone"
				/>{" "}
				<InputField
					id="Reference_Email"
					name="email"
					label="Email"
					placeholder="Email"
				/>
				{/* Render other input fields for reference details */}
				<button
					onClick={handleAdd}
					className="bg-primary-color text-white px-6 py-2 mt-4 rounded-md hover:bg-secondary-color transition-all"
				>
					Add Reference
				</button>
			</div>

			{/* Render the added references */}
			<div className="mt-4">
				{references.map((ref, index) => (
					<div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
						<p>
							<strong>Name: </strong> {ref.Name}
						</p>
						<p>
							<strong>Company: </strong> {ref.Company}
						</p>
						<p>
							<strong>Designation: </strong> {ref.Designation}
						</p>
						<p>
							<strong>Phone: </strong> {ref.Phone}
						</p>
						<p>
							<strong>Email: </strong> {ref.Email}
						</p>

						{/* Render other reference details */}
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
