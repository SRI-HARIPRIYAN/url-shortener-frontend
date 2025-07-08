import React from "react";
import Card from "../components/Card";

const LandingPage = () => {
	return (
		<div className=" font-roboto px-4 py-6">
			<div className="sm:flex">
				<div className="sm:w-3/5 lg:w-[55%]">
					<h1 className=" py-3 text-xl sm:text-3xl font-bold">
						Shorten your long URLs instantly
					</h1>
					<h2 className=" font-extrabold sm:text-lg opacity-60">Share smarter</h2>

					<div className="flex gap-4 my-2 text-white text-xs sm:px-5 py-3">
						<button className=" bg-gradient-to-r from-pink-500 to-blue-500 px-3 py-1 rounded-sm">
							Manage Links
						</button>
						<div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-sm p-0.5">
							<button className="text-blue-500 bg-white px-3 h-full w-full py-1 ">
								Create Short Link
							</button>
						</div>
						
					</div>
				</div>

				<div className="hidden sm:block ">
					<img src="/images/globe.png" className="" alt="" />
				</div>
			</div>

			<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
				<Card
					title={"Shorten URLs Instantly"}
					description={
						"Convert long, messy links into clean, short URLs with a single click. No sign-up required."
					}
				/>
				<Card
					title={"Create Custom Short Links"}
					description={
						"Personalize your short URLs with custom names like short.ly/your-brand. Make them memorable and brand-friendly."
					}
				/>
				<Card
					title={"Track Link Performance"}
					description={
						"See real-time click counts, geographic stats, and referrers. Understand your audience better."
					}
				/>
				<Card
					title={"Secure & Reliable"}
					description={
						"Your links are encrypted, stored securely, and never expire unless you want them to."
					}
				/>
			</div>
		</div>
	);
};

export default LandingPage;
