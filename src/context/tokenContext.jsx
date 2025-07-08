import { createContext, useContext, useEffect, useState } from "react";

const TokenContext = createContext();

export const TokenContextProvider = ({ children }) => {
	const [token, setToken] = useState(
		localStorage.getItem("token") ? localStorage.getItem("token") : null
	);

	useEffect(() => {
		if (token) {
			localStorage.setItem("token", token);
		} else {
			localStorage.removeItem("token");
		}
	}, [token]);

	return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
};

export const useTokenContext = () => {
	return useContext(TokenContext);
};
