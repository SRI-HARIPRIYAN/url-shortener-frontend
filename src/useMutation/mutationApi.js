import { useMutation } from "@tanstack/react-query";
import api from "../api/api";
import toast from "react-hot-toast";

export const useCreateNewShorten = (token) => {
	return useMutation({
		mutationFn: async (originalUrl) => {
			const { data: res } = await api.post("/api/urls/shorten", originalUrl, {
				headers: {
					"Content-Type": "Application/json",
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
				},
			});
			const shortUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${res.shortUrl}`;
			navigator.clipboard.writeText(shortUrl).then(() => {
				toast.success("Short URL Copied to Clipboard!");
			});
			return shortUrl;
		}, 	
	});
};
