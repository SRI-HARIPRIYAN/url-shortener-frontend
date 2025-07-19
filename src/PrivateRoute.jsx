import React from "react";
import { useTokenContext } from "./context/tokenContext";
import { Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

export default function PrivateRoute({ children, publicPage }) {
	const { token } = useTokenContext();
	if (publicPage) {
		return token ? <Navigate to={<DashboardPage />} /> : children;
	}
	return !token ? <Navigate to={<LoginPage />} /> : children;
}
