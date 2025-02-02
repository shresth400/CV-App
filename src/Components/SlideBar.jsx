import React from "react";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";
import { CrossIcon } from "./Icons";

// This is a functional component called SlideBar
// It takes a prop called setClick, which is a function
// that is used to toggle the state of the click
const SlideBar = ({ setClick }) => {
	// This component returns a JSX template that renders a sidebar
	return (
		<>
			{/* The sidebar has a height of the full screen, is hidden by default, has a white background, a width of 80 pixels, and a flex layout */}
			<div className="h-screen overflow-hidden bg-white  w-80 flex flex-col items-center relative shadow-lg shadow-primary-color">
				<div className="">
					{/* The sidebar has a cross icon in the top right corner that, when clicked, calls the setClick function to toggle the state of the click */}
					<div
						className="absolute right-0 cursor-pointer"
						onClick={() => setClick((state) => !state)}
					>
						<CrossIcon />
					</div>
					{/* The sidebar has a login button that is wrapped in a Link component from react-router-dom */}
					<div className="mt-40">
						<Link to="/login">
							<LoginButton />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SlideBar;