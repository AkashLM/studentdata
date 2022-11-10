import React, { Fragment, useState } from 'react';
import { Container } from 'react-bootstrap';
import FamilyDetails from './FamilyDetails/FamilyDetails';
import PersonalDetails from './PersonalDetails/PersonalDetails';
const Home = () => {
	const [ uID, setUID ] = useState('');
	const [ openFamilyDetails, setOpenFamilyDetails ] = useState(false);
	const setuID = (id) => {
		setUID(id);
	};
	const openingOfFamilyDetails = (value) => {
		setOpenFamilyDetails(value);
		console.log(value);
	};
	return (
		<Fragment>
			<Container className="square border  rounded mb-3">
				<h1>Personal Details: </h1>
				<PersonalDetails famDetails={openingOfFamilyDetails} setID={setuID} />
			</Container>
			<Container className="square border  rounded">
				<h1>Family Details: </h1>
				{openFamilyDetails && <FamilyDetails isOpen={openFamilyDetails} ID={uID} />}
			</Container>
		</Fragment>
	);
};

export default Home;
