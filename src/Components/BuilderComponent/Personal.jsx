import React, { useState } from "react";
import { UploadIcon } from "../Icons";
import QuillEditor from "./QuillEditor";
import SocialLink from "./SocialLink";
import InputField from "./InputField";
import { useSelector, useDispatch } from "react-redux";
import { setPhoto } from "./redux/inputRedux";

// The Personal component represents the personal information section of the application
export const Personal = () => {
	// Use the useState hook to manage the state of the image and the visibility of the social link form
	const [image, setImage] = useState(
		useSelector((state) => state.inputFields.url) || ""
	);
	const [showSocialLinkForm, setShowSocialLinkForm] = useState(false);
	const dispatch = useDispatch();
	const alt = "Your Photo"

	// Function to handle image preview
	// This function is called when the user selects an image file
	const imagePreview = (event) => {
		const image = event.target.files[0];
		if (image) {
			// Create a URL for the selected image
			const imagePath = URL.createObjectURL(image);
			// Update the state with the new image path
			setImage(imagePath);
			// Dispatch an action to update the photo in the Redux store
			dispatch(setPhoto({ url: imagePath }));
		}
	};

	// Function to toggle social link form visibility
	// This function is called when the user clicks the "Add Social Link" button
	const toggleSocialLinkForm = () => {
		setShowSocialLinkForm(!showSocialLinkForm);
	};

	return (
		<>
			<div className="personal ms-10">
				<div>
					<h1 className="text-5xl font-bold text-primary-color">
						About Yourself
					</h1>
				</div>

				<div className="my-10 flex items-center gap-4">
					<div className="w-32 h-32 bg-primary-color rounded-full text-center text-white">
						<img
							src={image}
							alt={alt}
							className="rounded-full h-32 w-32"
						/>
					</div>

					<div className="flex gap-2 cursor-pointer">
						<label htmlFor="profile-pic" className="cursor-pointer">
							<UploadIcon />
						</label>
						<label
							htmlFor="profile-pic"
							className="cursor-pointer text-slate-500"
						>
							Upload
						</label>
					</div>
					<input
						type="file"
						id="profile-pic"
						accept=".png, .jpg, .jpeg"
						onChange={imagePreview}
						className="hidden"
					/>
				</div>

				{/* Form fields for personal information */}
				<div className="my-4">

				<InputField
					id="First Name"
					name="first_name"
					label="First Name"
					placeholder="First Name"
				/>
				<InputField
					id="Last Name"
					name="last_name"
					label="Last Name"
					placeholder="Last Name"
					/>
				<InputField
					id="Designation"
					name="designation"
					label="Designation"
					placeholder="Designation"
				/>
				<InputField
					id="Address"
					name="address"
					label="Address"
					placeholder="Address"
					/>
				<InputField id="City" name="city" label="City" placeholder="City" />
				<InputField
					id="Email"
					name="email"
					label="Email"
					type="email"
					placeholder="Email"
					/>
				<InputField id="Phone" name="phone" label="Phone" placeholder="Phone" />

				<div>
					<label htmlFor="summary" className="block text-lg font-semibold">
						Summary
					</label>
					<QuillEditor description="Personal Summary" />
				</div>

				{/* Add Social Link Section */}
				<div className="mt-4">
					<p
						onClick={toggleSocialLinkForm}
						className="text-primary-color cursor-pointer flex gap-2 align-middle items-center text-xl"
						>
						<span className="text-3xl">+</span> 
						<span className="hover:underline ">
						Add Social Link
						</span>
					</p>
					{/* Conditionally render the SocialLink form */}
					{showSocialLinkForm && <SocialLink />}
				</div>
						</div>
			</div>
		</>
	);
};
