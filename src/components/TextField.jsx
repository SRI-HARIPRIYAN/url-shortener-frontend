const TextField = ({
	label,
	id,
	type,
	errors,
	register,
	required,
	message,
	min,
	placeholder,
}) => {
	return (
		<div className=" flex flex-col gap-2">
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				className={` w-full border-2 ${errors[id]?.message ?"border-red-400":"border-gray-400"} rounded-md p-2 `}
				placeholder={placeholder}
				{...register(id, {
					required: { value: required, message },
					minLength: min ? { value: min, message: "Minimum 6 characters is required" } : null,
					pattern:
						type === "email"
							? {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Invalid email",
							  }
							: type === "url"
							? {
									value: /^(https?:\/\/)?([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,}(:\d{1,5})?(\/[^\s]*)?$/,
									message: "Invalid url",
							  }
							: null,
				})}
			/>
			{errors[id]?.message && <p className="text-red-500 text-xs">*{errors[id].message}*</p>}
		</div>
	);
};

export default TextField;
