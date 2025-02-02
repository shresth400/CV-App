import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

// This is a functional component called 'GetStarted'
const GetStarted = () => {
	// The 'useNavigate' hook is used to get a reference to the navigation function
	const navigate = useNavigate();

	// This function is called when the 'Get Started' button is clicked
	const handleGetStartedClick = () => {
		// Generate a unique ID using the current timestamp
		const generateId = Date.now().toString();
		// Store an empty array in the local storage with the generated ID as the key
		localStorage.setItem(generateId, JSON.stringify([]));
		// Navigate to the '/home' route
		navigate("/home");
	};

	return (
		<>
			{/* The main container with a full-screen height and hidden overflow */}
			<div className="h-screen overflow-hidden">
				{/* The header component */}
				<Header />
				{/* The content area with centered alignment */}
				<div className="h-full text-center content-center">
					{/* The main title */}
					<h1 className="text-2xl font-bold md:text-4xl">
						Build Your Future, One Resume at a Time.
					</h1>
					{/* The subtitle */}
					<p className="text-sm my-4 md:text-xl">
						Create a Powerful CV That Opens Doors to New Opportunities!
					</p>

					{/* The 'Get Started' button */}
					<div>
						<button
							onClick={handleGetStartedClick}
							className="bg-primary-color py-3 px-6 rounded-xl cursor-pointer text-white font-mono text-sm hover:bg-secondary-color transition-colors delay-75 md:text-lg md:py-4 md:px-8"
						>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default GetStarted;
