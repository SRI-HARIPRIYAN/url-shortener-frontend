import axios from "./api.js";

const loginUser = async (data) => await axios.post("/api/auth/public/login", data);
const registerUser = async (data) => await axios.post("/api/auth/public/register", data);

export { loginUser, registerUser };
