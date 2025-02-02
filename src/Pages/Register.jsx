import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleIcon, HomeIcon } from "../Components/Icons";

// The Register component is responsible for rendering the registration form
const Register = () => {
	// Use the useState hook to manage the state of the password, confirm password, and error
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	// The handleSubmit function is called when the form is submitted
	const handleSubmit = (e) => {
		// Prevent the default form submission behavior
		e.preventDefault();

		// Check if the password and confirm password fields match
		if (password !== confirmPassword) {
			// If the passwords don't match, set the error state and return
			setError("Passwords do not match");
			return;
		}

		// If the passwords match, you can proceed with the registration process
		// (e.g., send the form data to the server)
	};

	return (
		<>
			<div className="h-screen flex items-center justify-center">
				{/* Render a home icon that links back to the home page */}
				<div className="absolute top-10 left-10 cursor-pointer">
					<Link to="/">
						<HomeIcon />
					</Link>
				</div>
				<div className="w-3/4 h-auto border-primary-color mx-auto align-middle">
					{/* Render the registration form */}
					<form
						onSubmit={handleSubmit}
						className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
					>
						{/* Email field */}
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
								placeholder="Email"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-secondary-color"
							/>
						</div>

						{/* Password field */}
						<div>
							<label
								htmlFor="password"
								className="block text-gray-700 font-semibold"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-secondary-color"
							/>
						</div>

						{/* Confirm password field */}
						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-gray-700 font-semibold"
							>
								Confirm Password
							</label>
							<input
								type="password"
								id="confirmPassword"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-secondary-color"
							/>
						</div>

						{/* Error message */}
						{error && (
							<div className="text-red-500 text-sm mt-2">
								<p>{error}</p>
							</div>
						)}

						{/* Sign up button */}
						<div>
							<button
								type="submit"
								className="w-full py-2 px-4 bg-primary-color text-white rounded-md hover:bg-opacity-90 focus:outline-none"
							>
								Sign Up
							</button>
						</div>

						{/* Login link */}
						<div className="text-center">
							<p className="text-sm">
								Already have an account?{" "}
								<Link
									to="/login"
									className="text-primary-color hover:text-secondary-color"
								>
									Login here
								</Link>
							</p>
						</div>

						{/* Google sign-up button */}
						<div className="text-center">
							<button className="w-full py-2 px-4 bg-primary-color text-white hover:bg-opacity-90 rounded-md focus:outline-none focus:bg-primary-color flex justify-center">
								<p className="mr-4">
									<GoogleIcon />
								</p>
								Sign Up with Google
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
