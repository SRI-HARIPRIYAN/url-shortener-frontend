import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "../TextField";
import { useForm } from "react-hook-form";
import { useCreateNewShorten } from "../../useMutation/mutationApi";
import { useTokenContext } from "../../context/tokenContext";
import toast from "react-hot-toast";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 350,
	bgcolor: "background.paper",
	border: "2px solid #ffg",
	boxShadow: 24,
	p: 4,
	borderRadius: "10px",
};

export default function UrlInputModel({ modalOpen, setModalOpen, refetch }) {
	const { token } = useTokenContext();
	const handleClose = () => setModalOpen(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			originalUrl: "",
		},
		mode: "onTouched",
	});
	const { mutate: createUrl, isPending } = useCreateNewShorten(token);
	const handleGetLink = (data) => {
		console.log(data);
		createUrl(data, {
			onSuccess: (response) => {
				console.log(response);
				reset();
				refetch();
				handleClose();
			},
			onError: (err) => {
				console.log(err);
				toast.error("Unable to create short URL");
			},
		});
	};

	return (
		<>
			<Modal
				open={modalOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<form onSubmit={handleSubmit(handleGetLink)}>
						<h1 className="text-center w-full text-lg mb-5">Create New Short URL</h1>
						<TextField
							label={"Enter URL"}
							required
							id={"originalUrl"}
							type={"url"}
							placeholder={"https://example.com"}
							message={"URL is required"}
							register={register}
							errors={errors}
						/>
						<div className="w-full text-right pt-3">
							<button
								className="text-sm text-center bg-gradient-to-r from-blue-600 hover:from-blue-500 hover:to-pink-500  to-pink-600 text-white px-2 py-1 rounded-md transition-transform duration-200"
								type="submit"
							>
								{isPending ? "Creating..." : "Create"}
							</button>
						</div>
					</form>
				</Box>
			</Modal>
		</>
	);
}
