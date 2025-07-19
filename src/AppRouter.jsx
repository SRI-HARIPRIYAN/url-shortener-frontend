import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UrlShortenPage from "./pages/UrlShortenPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route
					path="/register"
					element={
						<PrivateRoute publicPage={true}>
							<RegisterPage />
						</PrivateRoute>
					}
				/>
				<Route
					path="/login"
					element={
						<PrivateRoute publicPage={true}>
							<LoginPage />
						</PrivateRoute>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<PrivateRoute publicPage={false}>
							<DashboardPage />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
};

export const SubDomainRouter = () => {
	return (
		<Routes>
			<Route path="/:url" element={<UrlShortenPage />} />
		</Routes>
	);
};
