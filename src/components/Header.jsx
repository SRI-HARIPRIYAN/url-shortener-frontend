import NavBar from "./NavBar";

const Header = () => {
	return (
		<div className=" h-20 w-full bg-gradient-to-r from-blue-800 to-pink-800 p-2 flex justify-between text-white items-center text-xl">
			<h2 className="text-xl font-bold sm:text-3xl">Shortlinks</h2>
			<NavBar />
		</div>
	);
};

export default Header;
