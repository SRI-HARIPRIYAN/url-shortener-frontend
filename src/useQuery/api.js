import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
export const useFetchTotalClicks = (token, onError) => {
	return useQuery({
		queryKey: ["url-totalclick"],
		queryFn: async () => {
			return await api.get("/api/urls/totalClicks?startDate=2025-01-01&endDate=2025-12-30", {
				headers: {
					"Content-Type": "Application/json",
					Accept: "application/json",
					Authorization: "Bearer " + token,
				},
			});
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
