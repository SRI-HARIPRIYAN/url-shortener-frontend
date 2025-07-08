import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
const App = () => {
	return (
		<div className="min-h-[100vh] w-full overflow-y-scroll scrollbar-hidden">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
