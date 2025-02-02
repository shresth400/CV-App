import React, { useState } from "react";
import SlideBar from "./SlideBar";
import LoginButton from "./LoginButton";
import { Link, useLocation } from "react-router-dom";
import { BurgerIcon } from "./Icons";

// The Header component is responsible for rendering the header section of the application
const Header = () => {
	// Use the useState hook to manage the state of the click variable
	const [click, setClick] = useState(false);

	// Use the useLocation hook to get the current path of the application
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			{/* Render the header section with a fixed height and background color */}
			<div className="h-24 bg-slate-100 content-center flex justify-between items-center md:h-32">
				{/* Render the application title with a responsive font size */}
				<p className="text-3xl font-bold text-primary-color ps-9 md:text-5xl">
					CV-App
				</p>

				{/* Conditionally render the login button if the current path is the home page */}
				{currentPath === "/" ? (
					<div className="pe-9 hidden md:flex ml-auto">
						<Link to="/login">
							<LoginButton />
						</Link>
					</div>
				) : (
					""
				)}

				{/* Conditionally render the burger icon and the slide bar if the current path is the home page */}
				{currentPath === "/" ? (
					<div>
						{/* Render the burger icon that toggles the slide bar */}
						<div
							className={`cursor-pointer md:hidden pe-9 transition-all delay-100 ${
								click ? "hidden" : "block"
							}`}
							onClick={() => setClick(!click)}
						>
							<BurgerIcon />
						</div>

						{/* Render the slide bar with a transition effect based on the click state */}
						<div
							className={`fixed top-0 right-0 transition-transform delay-75 ${
								click ? "translate-x-0" : "translate-x-full"
							}`}
						>
							<SlideBar click={click} setClick={setClick} />
						</div>
					</div>
				) : (
					" "
				)}
			</div>
		</>
	);
};

export default Header;
