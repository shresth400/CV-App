import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GetStarted from "./Pages/GetStarted";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Register from "./Pages/Register";


const SiteRoute = () => {


	return (
		<BrowserRouter>
			<Routes>
				<Route index="/" element={<GetStarted />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgotpassword" element={<ForgotPassword />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SiteRoute;