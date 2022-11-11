import React, { Fragment, useState } from 'react';
import { Button, Container, Form, Image, Row, Col } from 'react-bootstrap';
import AcademicDetails from './AcademicDetails/AcademicDetails';
import FamilyDetails from './FamilyDetails/FamilyDetails';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import '../App.css';
import { logo, logosmall } from './images';
const Home = () => {
	const [ uID, setUID ] = useState('');
	const [ openFamilyDetails, setOpenFamilyDetails ] = useState(false);
	const [ openAcademicDetails, setOpenAcademicDetails ] = useState(false);
	const [ showAddNew, setShowAddNew ] = useState(false);
	const [ aPIData, setAPIData ] = useState({});
	const setuID = (id) => {
		setUID(id);
	};
	const settingData = (value) => {
		setAPIData((prev) => {
			return { ...prev, ...value };
		});
	};
	console.log(aPIData);
	const openingOfFamilyDetails = (value) => {
		setOpenFamilyDetails(value);
	};
	const openingOfAcademicDetails = (value) => {
		setOpenAcademicDetails(value);
	};
	const show = (val) => {
		setShowAddNew(val);
	};

	return (
		<Fragment>
			<Container>
				<h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">
					<Row>
						<h5>Shalaka Foundation's</h5>
					</Row>
					<Row>
						<Col>
							<Image src={logosmall} />
						</Col>
						<Col xs={6}>Keystone School Of Engineering Near Handewadi Chowk, Pune</Col>
						<Col>
							<Image src={logo} />
						</Col>
					</Row>
					<Row>
						<h2>Key Kundali</h2>
						<h2>Academic Year 2022-23</h2>
					</Row>
				</h1>
			</Container>
			<Container className="mt-5">
				<Container className="square border  rounded mb-3 ">
					<h1>Personal Details: </h1>
					<PersonalDetails setData={settingData} famDetails={openingOfFamilyDetails} setID={setuID} />
				</Container>
				<Container className="square border  rounded mb-3">
					<h1>Family Details: </h1>
					{openFamilyDetails ? (
						<FamilyDetails
							setData={settingData}
							acadDetails={openingOfAcademicDetails}
							isOpen={openFamilyDetails}
							ID={uID}
						/>
					) : (
						<h4>Enter Personal Details First</h4>
					)}
				</Container>
				<Container className="square border  rounded">
					<h1>Family Details: </h1>
					{openAcademicDetails ? (
						<AcademicDetails showBtn={show} apiData={aPIData} isOpen={openAcademicDetails} ID={uID} />
					) : (
						<h4>Enter Above Details First</h4>
					)}
					{showAddNew && (
						<Container>
							<Form>
								<Button type="submit" className="mb-3">
									ADD NEW
								</Button>
							</Form>
						</Container>
					)}
				</Container>
			</Container>
		</Fragment>
	);
};

export default Home;
