import { useState } from "react";

import "./App.css";
import Landing from "./components/LandingPage/Landing";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Landing />
		</div>
	);
}

export default App;
