import React from "react";

// This is a functional component that represents a login button
const LoginButton = () => {
	// This function returns the JSX code that will be rendered as the login button
	return (
		<>
			<button className="text-lg bg-primary-color py-3 px-6 rounded-sm text-white hover:bg-inherit hover:text-primary-color hover:border-primary-color hover:border hover:rounded-sm">
				Login
			</button>
		</>
	);
};

// This component is exported as the default export of this module
export default LoginButton;
