import { Routes, Route } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import FamilyDetails from './components/FamilyDetails/FamilyDetails';
import Missing from './components/Missing';
import AcademicDetails from './components/AcademicDetails/AcademicDetails';
function App() {
	return (
		<Routes>
			<Route path="/" element={<PersonalDetails />} />
			<Route path="/familyDetails" element={<FamilyDetails />} />
			<Route path="/academicDetails" element={<AcademicDetails />} />
			<Route path="/*" element={<Missing />} />
		</Routes>
	);
}

export default App;
