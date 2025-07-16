import React, { Fragment, useState } from "react";
import dayjs from "dayjs";
import { MdAdsClick } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineCopyAll } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { copyToClipBoard } from "../utils/utils";
import { MdOutlineAnalytics } from "react-icons/md";
import { TiTick } from "react-icons/ti";
const MyUrlItem = ({
	id,
	shortUrl,
	originalUrl,
	clickCount,
	createdDate,
	selected,
	setSelected,
	copied,
	setCopied,
}) => {
	const [analyticsToggle, setAnalyticsToggle] = useState(false);

	const subDomain = import.meta.env.VITE_REACT_SUBDOMAIN.replace(/^https?:\/\//, "");

	const handleCopyClick = () => {
		copyToClipBoard(subDomain, shortUrl, setCopied);
	};

	const handleAnalyticsToggle = () => {
		if (!analyticsToggle) {
			setSelected(shortUrl);
		}
		setAnalyticsToggle(!analyticsToggle);
	};

	return (
		<div>
			<div
				className={` my-2 border-[1px] border-blue-400 rounded-md flex flex-col sm:flex-row justify-between items-center mx-3 p-3 shadow-xl transition-all duration-200 ${
					selected === id ? " shadow-gray-500 mx-4" : ""
				}`}
				key={id}
			>
				<div className=" text-sm flex flex-col gap-2">
					<p className="font-semibold text-blue-500">
						{subDomain + shortUrl}

						<a href={subDomain + shortUrl} target="_blank" className="text-lg ml-1">
							<HiExternalLink className="inline" />
						</a>
					</p>
					<p className=" opacity-65 font-semibold">{originalUrl}</p>
					<div className="flex justify-around mt-1">
						<p className=" text-green-700 font-bold">
							<MdAdsClick className="inline-block mr-1 " />
							<span>{clickCount}</span>
							<span className="font-semibold ml-1">
								{clickCount <= 1 ? "Click" : "Clicks"}
							</span>
						</p>
						<p className="font-semibold">
							<LuCalendarDays className="inline mr-1" />
							{dayjs(createdDate).format("MMM DD/ YYYY")}
						</p>
					</div>
				</div>
				<div className=" text-sm flex gap-3 h-fit justify-around text-white">
					<button
						onClick={handleCopyClick}
						className=" bg-blue-700 hover:bg-blue-600 px-2 py-1 rounded-md"
					>
						Copy{" "}
						<span>
							{copied === shortUrl ? (
								<span className="text-white">
									<TiTick className="inline" />
								</span>
							) : (
								<MdOutlineCopyAll className="inline" />
							)}
						</span>
					</button>
					<button
						onClick={handleAnalyticsToggle}
						className=" bg-red-700 hover:bg-red-600 px-2 py-1 rounded-md "
					>
						Analytics
						<span>
							<MdOutlineAnalytics className="inline ml-1" />
						</span>
					</button>
				</div>
			</div>
			<Fragment>
				{
					<div
						className={`${
							analyticsToggle ? "flex" : "hidden"
						} h-[300px] border-[1px] border-blue-400 mx-3 rounded-md `}
					>
						<div>
							<p>The drop down</p>
						</div>
					</div>
				}
			</Fragment>
		</div>
	);
};

export default MyUrlItem;
