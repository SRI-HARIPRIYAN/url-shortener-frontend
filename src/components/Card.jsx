
const Card = ({ title, description }) => {
	return (
		<div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 transition-transform hover:scale-[1.02] hover:shadow-xl duration-200">
			<h3 className=" font-semibold text-sm mb-2">{title}</h3>
			<p className="text-gray-600 text-xs leading-relaxed">{description}</p>
		</div>
	);
};

export default Card;
