import { useForm } from "react-hook-form";
import TextField from "../components/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/services.js";
import toast from "react-hot-toast";

const RegisterPage = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
		mode: "onTouched",
	});

	const { mutate, data } = useMutation({
		mutationFn: registerUser,
		onSuccess: () => {
			reset();
			navigate("/login");
			toast.success("Registered succesfully");
		},
	});

	const handleRegister = async (data) => {
		console.log(data);
		mutate(data);
	};

	return (
		<div className=" min-h-[calc(100vh-36px)] bg-gray-400 flex justify-center items-center">
			<form
				onSubmit={handleSubmit(handleRegister)}
				className="p-2 w-[280px] sm:w-[400px] lg:w-[30%] bg-slate-100 flex flex-col gap-3 "
			>
				<h1 className=" font-bold text-gray-700 text-lg sm:text-2xl w-full text-center">
					Register Here
				</h1>
				<div className="flex flex-col gap-4 p-2">
					<TextField
						label={"UserName"}
						required
						id={"username"}
						type={"text"}
						placeholder={"Type your username"}
						message={"Username is required"}
						register={register}
						errors={errors}
					/>
					<TextField
						label={"Email"}
						required
						id={"email"}
						type={"email"}
						placeholder={"Type your Email"}
						message={"Email is required"}
						register={register}
						errors={errors}
					/>
					<TextField
						label={"Password"}
						required
						id={"password"}
						type={"password"}
						placeholder={"Type your Password"}
						message={"Password is required"}
						register={register}
						min={6}
						errors={errors}
					/>
				</div>
				<button
					className=" bg-gradient-to-r from-blue-500 to-pink-500 rounded-md  text-white py-1.5 mx-2 hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-700 transition-all duration-200"
					type="submit"
					// disabled={isSubmitting}
				>
					{isSubmitting ? "Registering..." : "Register"}
				</button>

				<p className=" text-sm text-center mt-3">
					Already have an account?
					<Link className=" text-blue-500 underline" to={"/login"}>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default RegisterPage;
