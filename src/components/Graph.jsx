import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LinearScale,
	Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale, Legend, Filler);
const Graph = ({ graphData }) => {
	const labels = graphData?.map((url, i) => `${url.clickDate}`);
	const usersPerDay = graphData?.map((url) => url.count);

	const data = {
		labels: graphData?.length > 0 ? labels : ["", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				label: "Total Click",
				data: graphData?.length > 0 ? usersPerDay : [1, 2, 4, 3, 5, 3, 4, 2, 1],
				backgroundColor: graphData?.length > 0 ? "#3b62f6" : "rgba(54,162,235,0.1)",
				borderColor: "#1D1327",
				pointBorderColor: "red",
				fill: true,
				tension: 0.4,
				barThickness: 20,
				categoryPercentage: 1.5,
				barPercentage: 1.5,
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		response: true,
		plugins: {
			legend: {
				display: true,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					callback: function (value) {
						if (Number.isInteger(value)) {
							return value.toString();
						}
						return "";
					},
				},
				title: {
					display: true,
					text: "Number of Click",
					font: {
						family: "Arial",
						size: 16,
						weight: "bold",
						color: "#FF0000",
					},
				},
			},
			x: {
				beginAtZero: true,
				title: {
					display: true,
					text: "Date",
					font: {
						family: "Arial",
						size: 16,
						weight: "bold",
						color: "#FF0000",
					},
				},
			},
		},
	};

	return <Bar className=" w-full" data={data} options={options}></Bar>;
};

export default Graph;
