import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { TokenContextProvider } from "./context/tokenContext.jsx";

const client = new QueryClient();
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QueryClientProvider client={client}>
			<TokenContextProvider>
				<Toaster />
				<App />
			</TokenContextProvider>
		</QueryClientProvider>
	</StrictMode>
);
