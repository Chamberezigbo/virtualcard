import { useState } from "react";

import "./App.css";
import HowSection from "./components/HowSection";
import Landing from "./components/LandingPage/Landing";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Landing />
			<HowSection />
		</div>
	);
}

export default App;
