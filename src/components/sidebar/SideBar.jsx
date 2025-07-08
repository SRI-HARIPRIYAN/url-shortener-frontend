import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
	const location = useLocation().pathname;
	return (
		<div className=" absolute w-full sm:hidden h-28 top-0 left-0 translate-y-20 transition-transform p-1 duration-1000 bg-gradient-to-br from-blue-700 to-pink-400 z-10">
			<ul className="flex flex-col  gap-3 items-center text-sm sm:text-lg ">
				<li className=" hover:scale-110 hover:font-bold">
					<Link to={"/"}>Home</Link>
				</li>
				<li className=" hover:scale-110 hover:font-bold">
					<Link to={"/about"}>About</Link>
				</li>
				<li>
					<Link
						to={location === "/register" ? "/login" : "/register"}
						className=" bg-gradient-to-r from-pink-800 to-blue-800 border-2 border-cyan-300 px-3 py-1 hover:bg-gradient-to-r hover:from-pink-600 hover:to-blue-600 text-white rounded-md transition-all duration-300"
					>
						{location === "/register" ? "Login" : "Sign Up"}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
