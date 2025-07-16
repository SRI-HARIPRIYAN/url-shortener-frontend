import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
export const useFetchTotalClicks = (token, onError) => {
	return useQuery({
		queryKey: ["url-totalclick"],
		queryFn: async () => {
			const response = await api.get(
				"/api/urls/totalClicks?startDate=2025-01-01&endDate=2025-12-30",
				{
					headers: {
						"Content-Type": "Application/json",
						Accept: "application/json",
						Authorization: "Bearer " + token,
					},
				}
			);
			if (response.ok) {
				return response.data;
			}
			return null;
		},

		select: (data) => {
			const converrToArray = Object.keys(data.data).map((key) => ({
				clickDate: key,
				count: data.data[key],
			}));
			return converrToArray;
		},
		onError,
		staleTime: 5000,
	});
};
export const useFetchMyShortUrls = (token, onError) => {
	return useQuery({
		queryKey: ["my-shortUrls"],
		queryFn: async () => {
			const response = await api.get("/api/urls/myurls", {
				headers: {
					"Content-Type": "Application/json",
					Accept: "application/json",
					Authorization: "Bearer " + token,
				},
			});
	
			return response.data;
		},

		select: (data) => {
			console.log(data);
			const converrToArray = data.sort(
				(a, b) => new Date(b.createdDate) - new Date(a.createdDate)
			);
			return converrToArray;
		},
		onError,
		staleTime: 5000,
	});
};
