import React, { useState } from 'react';
import { Button, Container, Form, Image, Row, Col } from 'react-bootstrap';
import AcademicDetails from './AcademicDetails/AcademicDetails';
import FamilyDetails from './FamilyDetails/FamilyDetails';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import '../App.css';

import { logosmall } from './images';
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
		<div className="box">
			<Container style={{ width: '100%', justifyContent: 'center' }}>
				<h1 style={{ color: '003B4E', textAlign: 'center' }} className="shadow-sm  p-3 text-center rounded">
					<Row>
						<h2>Shalaka Foundation's</h2>
					</Row>
					<Row>
						<Col xs={3}>
							<Image style={{ width: 150 }} src={logosmall} />
						</Col>
						<Col xs={6} style={{ marginLeft: 20 }}>
							<div style={{ fontSize: 70 }}>
								Keystone School of Engineering, Pune
								{/* <h2 style={{ marginTop: 10 }}>Near Handewadi Chowk, Pune</h2> */}
							</div>
						</Col>
						<Col />
					</Row>
					<Row>
						<div style={{ fontSize: 50 }} className="text-decoration-underline  mt-5 mb-4">
							KEYKUNDALI
						</div>
						<h2>Academic Year 2022-23</h2>
					</Row>
				</h1>

				<Container className="mt-5">
					<Container className="square border  rounded mb-3 ">
						<h1 style={{ color: '003B4E', textAlign: 'center' }}>Personal Details: </h1>
						<PersonalDetails setData={settingData} famDetails={openingOfFamilyDetails} setID={setuID} />
					</Container>
					<Container className="square border  rounded mb-3">
						<h1 style={{ color: '003B4E', textAlign: 'center' }}>Family Details: </h1>
						{openFamilyDetails ? (
							<FamilyDetails
								setData={settingData}
								acadDetails={openingOfAcademicDetails}
								isOpen={openFamilyDetails}
								ID={uID}
							/>
						) : (
							<h4 style={{ color: '003B4E', textAlign: 'center' }}>Enter Personal Details First</h4>
						)}
					</Container>
					<Container className="square border  rounded">
						<h1 style={{ color: '003B4E', textAlign: 'center' }}>Academic Details: </h1>
						{openAcademicDetails ? (
							<AcademicDetails showBtn={show} apiData={aPIData} isOpen={openAcademicDetails} ID={uID} />
						) : (
							<h4 style={{ color: '003B4E', textAlign: 'center' }}>Enter Above Details First</h4>
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
			</Container>
		</div>
	);
};

export default Home;
