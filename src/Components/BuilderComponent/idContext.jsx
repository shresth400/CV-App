import React, { createContext, useState, useContext } from "react";

export const idContext = createContext();

export const useId = () => {
	return useContext(idContext);
};

export const IdProvider = ({ children }) => {
	const [id, setId] = useState(null);

	return (
		<idContext.Provider value={{ id, setId }}>{children}</idContext.Provider>
	);
};
