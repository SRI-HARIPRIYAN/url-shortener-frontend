import { useState } from "react";
import UrlInputModal from "../components/dashboard/UrlInputModel";
import Graph from "../components/Graph";
import { useTokenContext } from "../context/tokenContext";
import { useFetchTotalClicks, useFetchMyShortUrls } from "../useQuery/queryApi";
import MyUrlsShorten from "../components/MyUrlsShorten";
const DashboardPage = () => {
	const { token } = useTokenContext();
	const { data: totalClicks } = useFetchTotalClicks(token, onError);
	const { data, isPending, refetch } = useFetchMyShortUrls(token, onError);
	const [modalOpen, setModalOpen] = useState(false);
	function onError() {
		console.error("error");
	}

	return (
		<div className="w-full min-h-[calc(100vh-36px)] lg:px-10">
			<>
				<div className="relative p-8 h-96">
					{totalClicks == undefined || totalClicks?.length == 0 ? (
						<p className="absolute font-bold opacity-65 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
							No data for this time period.
						</p>
					) : (
						""
					)}
					<Graph graphData={totalClicks} />
				</div>
			</>

			<div className=" w-full text-right px-2 my-2">
				<button
					onClick={() => setModalOpen(true)}
					className="mx-auto bg-gradient-to-r from-blue-500 to-pink-500 text-white px-2 py-1 rounded-md"
				>
					Create a New Short URL
				</button>
			</div>
			<UrlInputModal modalOpen={modalOpen} setModalOpen={setModalOpen} refetch={refetch} />
			<MyUrlsShorten data={data} isPending={isPending} />
		</div>
	);
};

export default DashboardPage;
