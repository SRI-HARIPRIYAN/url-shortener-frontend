import { BrowserRouter as Router } from "react-router-dom";

import { getApps } from "./utils/utils";
const App = () => {
	const CurrentApp = getApps();
	return (
		<div className="min-h-[100vh] w-full overflow-y-scroll scrollbar-hidden">
			<Router>
				<CurrentApp />
			</Router>
		</div>
	);
};

export default App;
