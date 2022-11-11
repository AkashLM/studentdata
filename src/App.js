import { Routes, Route } from 'react-router-dom';

import Missing from './components/Missing';

import Home from './components/Home';
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/*" element={<Missing />} />
		</Routes>
	);
}

export default App;
