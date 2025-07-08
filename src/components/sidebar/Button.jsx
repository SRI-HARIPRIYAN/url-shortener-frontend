import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
const Button = ({ isNavOpen, setIsNavOpen }) => {
	return (
		<button onClick={() => setIsNavOpen((prev) => !prev)} className="sm:hidden cursor-pointer">
			{!isNavOpen ? <AiOutlineMenu /> : <IoCloseSharp />}
		</button>
	);
};

export default Button;
