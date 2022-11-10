import { Routes, Route } from 'react-router-dom';

import FamilyDetails from './components/FamilyDetails/FamilyDetails';
import Missing from './components/Missing';
import AcademicDetails from './components/AcademicDetails/AcademicDetails';
import Home from './components/Home';
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/familyDetails" element={<FamilyDetails />} />
			<Route path="/academicDetails" element={<AcademicDetails />} />
			<Route path="/*" element={<Missing />} />
		</Routes>
	);
}

export default App;
