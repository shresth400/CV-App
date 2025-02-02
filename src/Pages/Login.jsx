import React from "react";
import { Link } from "react-router-dom";
import { GoogleIcon, HomeIcon } from "../Components/Icons";

// This is a functional component that represents the Login page
const Login = () => {
	// This component returns JSX code that renders the login form
	return (
		<>
			<div className="h-screen flex items-center justify-center">
				{/* This div contains a link to the home page */}
				<div className="absolute top-10 left-10 cursor-pointer">
					<Link to="/">
						<HomeIcon />
					</Link>
				</div>
				{/* This div contains the login form */}
				<div className="w-3/4 h-80  border-primary-color mx-auto align-middle">
					<form
						action=""
						className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
					>
						{/* Email input field */}
						<div>
							<label for="email" className="block text-gray-700 font-semibold">
								Email
							</label>
							<input
								type="text"
								id="email"
								placeholder="Email"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-secondary-color"
							/>
						</div>

						{/* Password input field */}
						<div>
							<label
								for="password"
								className="block text-gray-700 font-semibold"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Password"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-secondary-color"
							/>
						</div>

						{/* Login button */}
						<div>
							<button
								type="submit"
								className="w-full py-2 px-4 bg-primary-color text-white rounded-md hover:bg-opacity-90 focus:outline-none"
							>
								Login
							</button>
						</div>

						{/* Register and Forgot Password links */}
						<div className="flex justify-between">
							<div className="text-left">
								Do not have an account?{" "}
								<Link
									to="/register"
									className="text-sm text-primary-color hover:text-secondary-color focus:outline-none"
								>
									Register
								</Link>
							</div>

							<div className="text-right text-sm">
								<Link
									to="/forgotpassword"
									className="text-sm text-primary-color hover:text-secondary-color focus:outline-none"
								>
									Forgot Password?
								</Link>
							</div>
						</div>

						{/* Google login button */}
						<div className="text-center">
							<button className="w-full py-2 px-4 bg-primary-color text-white hover:bg-opacity-90 rounded-md focus:outline-none focus:bg-primary-color flex justify-center">
								<p className="me-4">
									<GoogleIcon />
								</p>
								Login with Google
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
