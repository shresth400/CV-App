import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "../Components/Icons";

// This is a functional component called ForgotPassword
// It represents a page where users can reset their password
const ForgotPassword = () => {
	// This component returns JSX (JavaScript XML) code that represents the UI
	return (
		<>
			{/* The outer div sets the height of the screen and centers the content vertically and horizontally */}
			<div className="h-screen flex items-center justify-center">
				{/* This div contains a link to the home page, represented by the HomeIcon component */}
				<div className="absolute top-10 left-10 cursor-pointer">
					<Link to="/">
						<HomeIcon />
					</Link>
				</div>
				{/* This div contains the main content of the page, including a form for resetting the password */}
				<div className="w-3/4 h-80 border-primary-color mx-auto align-middle">
					<form
						action=""
						className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
					>
						{/* This div contains the email input field */}
						<div>
							<label
								htmlFor="email"
								className="block text-gray-700 font-semibold"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-secondary-color"
							/>
						</div>

						{/* This div contains the "Reset Password" button */}
						<div>
							<button
								type="submit"
								className="w-full py-2 px-4 bg-primary-color text-white rounded-md hover:bg-opacity-90 focus:outline-none"
							>
								Reset Password
							</button>
						</div>

						{/* This div contains a link to the login page */}
						<div className="text-center">
							<p className="text-sm text-gray-700">
								Remember your password?
								<Link
									to="/login"
									className="text-primary-color hover:text-secondary-color focus:outline-none"
								>
									Login
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
