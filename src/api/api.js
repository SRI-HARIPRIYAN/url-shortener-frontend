import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
});

/* api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (!navigator.onLine) {
			toast.error("You are offline. Please check your internet connection.");
		} else if (error.message === "Network Error" || error.code === "ERR_NETWORK") {
			toast.error(" Server is down. Please try later.");
		} else if (error.code === "ECONNABORTED") {
			toast.error("Request timed out. Please try again.");
		} else {
			toast.error(error?.response?.data?.message || "Something went wrong.");
		}
	}
); */

export default api;
