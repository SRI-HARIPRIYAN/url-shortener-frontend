import React, { useState } from "react";

import SideBar from "./sidebar/SideBar";
import Button from "./sidebar/Button.jsx";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const pathname = useLocation().pathname;
	return (
		<div className="">
			{isNavOpen ? <SideBar /> : <></>}
			<Button isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

			<div className="hidden sm:block">
				<ul className="flex gap-3 items-center text-sm sm:text-md md:text-lg ">
					<li className="cursor-pointer hover:font-semibold transition duration-200 ">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="cursor-pointer hover:font-semibold transition duration-200">
						<Link to={"/about"}>About</Link>
					</li>
					<li className="cursor-pointer">
						<Link
							to={pathname === "/register" ? "/login" : "/register"}
							className=" bg-gradient-to-r from-pink-800 to-blue-800 border-2 border-cyan-300 px-3 py-1 hover:bg-gradient-to-r hover:from-pink-600 hover:to-blue-600 text-white rounded-md transition-colors duration-300"
						>
							{pathname === "/register" ? "Login" : "Sign Up"}
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
