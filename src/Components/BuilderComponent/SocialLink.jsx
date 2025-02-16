import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSocial } from "./redux/inputRedux";

// This is a functional component called SocialLink
const SocialLink = () => {
	// Declare state variables for platform, link, and links
	const [platform, setPlatform] = useState();
	const [link, setLink] = useState();
	const [links, setLinks] = useState(
		useSelector((state) => state.inputFields.social) || []
	);

	// Get the dispatch function from the Redux store
	const dispatch = useDispatch();

	// Create an object to hold the current platform and link
	const add = {
		Platform: platform,
		Link: link,
	};

	// Handle the change event for the platform select dropdown
	const handleSelectChange = (event) => {
		setPlatform(event.target.value);
	};

	// Handle the change event for the link input field
	const handleLinkChange = (event) => {
		setLink(event.target.value);
	};

	// Handle the click event for the "Add Link" button
	const handleAddLink = () => {
		if (add.Platform && add.Link) {

			setLinks((item) => {
				const update = [...item, add];
				dispatch(setSocial(update));
				return update;
			});
		}
	};

	// Handle the click event for the "Delete" button
	const handleDelete = (index) => {
		const update = links.filter((_, i) => i !== index);

		dispatch(setSocial(update));
		setLinks(update);
	};

	return (
		<div className="personal">
			{/* Render the platform select dropdown */}
			<label htmlFor="social-media" className="block mb-2 font-medium text-lg">
				Select Social Media Platform:
			</label>
			<select
				id="social-media"
				value={platform}
				onChange={handleSelectChange}
				className="w-full px-4 py-2 mb-4 bg-beige border rounded-lg"
			>
				{" "}
				<option value="Select">--Select a platform--</option>
				<option value="Facebook">Facebook</option>
				<option value="Twitter">Twitter</option>
				<option value="Linkedin">LinkedIn</option>
				<option value="Github">Github</option>
			</select>

			{/* Render the link input field and "Add Link" button if a platform is selected */}
			{platform && (
				<div>
					<label htmlFor="link" className="block mb-2 font-medium text-lg">
						Enter your {platform} link:
					</label>
					<input
						type="url"
						id="link"
						placeholder={`Enter your ${platform} link`}
						onChange={handleLinkChange}
						className="w-full px-4 py-2 mb-4 bg-beige border rounded-lg"
					/>
					<button
						onClick={handleAddLink}
						className="px-4 py-2 bg-primary-color text-white rounded-lg transition duration-300 ease-in-out hover:bg-secondary-color"
					>
						Add Link
					</button>
				</div>
			)}

			{/* Render the list of added social media links */}
			{links.length > 0 && (
				<div className="mt-4 w-full bg-slate-200 py-2 px-4 rounded-sm">
					<ul>
						{links.map((linkItem, index) => (
							<li key={index} className="border-primary-color border-b-2 p-2">
								<strong>{linkItem.Platform}:</strong>{" "}
								<a
									href={linkItem.ink}
									target="_blank"
									rel="noopener noreferrer"
								>
									{linkItem.Link}
								</a>
								<button
									onClick={() => handleDelete(index)}
									className="mt-4 text-red-600 block mx-auto"
								>
									Delete
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SocialLink;
