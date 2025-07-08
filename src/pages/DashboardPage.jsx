import Graph from "../components/Graph";
import { useTokenContext } from "../context/tokenContext";
import { useFetchTotalClicks } from "../useQuery/api";

const DashboardPage = () => {
	const { token } = useTokenContext();
	const { isLoading, data: totalClicks } = useFetchTotalClicks(token, onError);

	function onError() {
		console.error("error");
	}

	return (
		<div className="w-full min-h-[calc(100vh-36px)]">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{totalClicks?.length == 0 ? <p>No data for this time period.</p> : ""}
					<div className="relative p-8 h-96">
						<Graph graphData={totalClicks} />
					</div>
					<div className=" w-full text-right px-2 my-2">
						<button className="mx-auto bg-gradient-to-r from-blue-500 to-pink-500 text-white px-2 py-1 rounded-md">
							Create a New Short URL
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default DashboardPage;
