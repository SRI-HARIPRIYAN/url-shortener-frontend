import { useForm } from "react-hook-form";
import TextField from "../components/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/services.js";
import toast from "react-hot-toast";
import { useTokenContext } from "../context/tokenContext.jsx";

const LoginPage = () => {
	const navigate = useNavigate();
	const { setToken } = useTokenContext();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			username: "",
			password: "",
		},
		mode: "onTouched",
	});

	const { mutate } = useMutation({
		mutationFn: loginUser,
		onSuccess: (response) => {
			reset();
			toast.success("Login succesfull");
			console.log(response?.data?.token);
			setToken(response?.data?.token);
			navigate("/dashboard");
		},
	});

	const handleLogin = async (data) => {
		console.log(data);
		mutate(data);
	};

	return (
		<div className=" min-h-[calc(100vh-36px)] bg-gray-400 flex justify-center items-center">
			<form
				onSubmit={handleSubmit(handleLogin)}
				className="p-2 w-[280px] sm:w-[400px] lg:w-[30%] bg-slate-100 flex flex-col gap-3 "
			>
				<h1 className=" font-bold text-gray-700 text-lg sm:text-2xl w-full text-center">
					Login Here
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
						label={"Password"}
						required
						id={"password"}
						type={"password"}
						placeholder={"Type your Password"}
						message={"Password is required"}
						register={register}
						min={3}
						errors={errors}
					/>
				</div>
				<button
					className=" bg-gradient-to-r from-blue-500 to-pink-500 rounded-md  text-white py-1.5 mx-2 hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-700 transition-all duration-200"
					type="submit"
					// disabled={isSubmitting}
				>
					{isSubmitting ? "Logging in..." : "Login"}
				</button>

				<p className=" text-sm text-center mt-3">
					Don't have an account?
					<Link className=" text-blue-500 underline" to={"/register"}>
						Register
					</Link>
				</p>
			</form>
		</div>
	);
};

export default LoginPage;
