import { useState } from 'react';
import { Container, Button, FloatingLabel, Form, Row, Col } from 'react-bootstrap';
import './PersonalDetails.css';
const PersonalDetails = (props) => {
	const [ email, setEmail ] = useState('');
	const [ medication, setMedication ] = useState('');
	const [ yoga, setYoga ] = useState('');
	const [ pan, setPan ] = useState('');
	const [ aadhar, setAadhar ] = useState('');
	const [ drivingLicence, setDrivingLicence ] = useState('');
	const [ prn, setPRN ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ name, setName ] = useState('');
	const [ dob, setDOB ] = useState('');
	const [ dobPlace, setDobPlace ] = useState('');
	const [ permanentAddress, setPermanentAddress ] = useState('');
	const [ localAddress, setLocalAddress ] = useState('');
	const [ bloodGroup, setBloodGroup ] = useState('');
	const [ physicalDisablity, setPhysicalDisabillity ] = useState(false);
	const [ physicalDisablityDescription, setPhysicalDisabillityDescription ] = useState('');
	const [ bmi, setBMI ] = useState('');
	const [ height, setHeight ] = useState('');
	const [ weight, setWeight ] = useState('');
	const [ isAddressSame, setIsAddressSame ] = useState(true);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(localAddress, phone);
		//TODO during api call set the value of physical disability description as NA in case of no disability
	};
	return (
		<Container style={{ marginTop: 10 }}>
			<h2>Personal Details</h2>
			<Form onSubmit={onSubmitHandler}>
				<FloatingLabel controlId="floatingInputName" label="Name" className="mb-3">
					<Form.Control
						defaultValue={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						type="text"
						placeholder="name"
					/>
				</FloatingLabel>
				<FloatingLabel controlId="floatingInputEmail" label="Email address" className="mb-3">
					<Form.Control
						defaultValue={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						type="email"
						placeholder="name@example.com"
					/>
				</FloatingLabel>
				<Row className="g-2">
					<Col md>
						<FloatingLabel controlId="floatingInputmeds" label="Medication" className="mb-3">
							<Form.Control
								defaultValue={medication}
								onChange={(e) => {
									setMedication(e.target.value);
								}}
								type="text"
								placeholder="meds"
							/>
						</FloatingLabel>
					</Col>
					<Col md>
						<FloatingLabel controlId="floatingInputYoga" label="Yoga" className="mb-3">
							<Form.Control
								defaultValue={yoga}
								onChange={(e) => {
									setYoga(e.target.value);
								}}
								type="text"
								placeholder="yoga"
							/>
						</FloatingLabel>
					</Col>
				</Row>
				<Row className="g-2">
					<Col md>
						<FloatingLabel controlId="floatingInputDriving" label="Driving License" className="mb-3">
							<Form.Control
								defaultValue={drivingLicence}
								onChange={(e) => {
									setDrivingLicence(e.target.value);
								}}
								type="text"
								placeholder="meds"
							/>
						</FloatingLabel>
					</Col>
					<Col md>
						<FloatingLabel controlId="floatingInputYoga" label="PRN" className="mb-3">
							<Form.Control
								defaultValue={prn}
								onChange={(e) => {
									setPRN(e.target.value);
								}}
								type="text"
								placeholder="yoga"
							/>
						</FloatingLabel>
					</Col>
				</Row>

				<Row className="g-2">
					<Col md>
						<FloatingLabel controlId="floatingInputaadhar" label="Aadhar Number" className="mb-3">
							<Form.Control
								defaultValue={aadhar}
								onChange={(e) => {
									setAadhar(e.target.value);
								}}
								type="text"
								placeholder="aadh"
							/>
						</FloatingLabel>
					</Col>
					<Col md>
						<FloatingLabel controlId="floatingInputPAN" label="PAN Number" className="mb-3">
							<Form.Control
								defaultValue={pan}
								onChange={(e) => {
									setPan(e.target.value);
								}}
								type="text"
								placeholder="aadh"
							/>
						</FloatingLabel>
					</Col>
				</Row>

				<FloatingLabel controlId="floatingInputPhone" label="Contact Number" className="mb-3">
					<Form.Control
						defaultValue={phone}
						onChange={(e) => {
							setPhone(e.target.value);
						}}
						type="text"
						placeholder="phone"
					/>
				</FloatingLabel>
				<Row className="g-2">
					<Col md>
						<FloatingLabel controlId="floatingInputDOB" label="Date of Birth" className="mb-3">
							<Form.Control
								defaultValue={dob}
								onChange={(e) => {
									setDOB(e.target.value);
								}}
								type="date"
								placeholder="name"
							/>
						</FloatingLabel>
					</Col>
					<Col md>
						<FloatingLabel controlId="floatingInputPob" label="Place of Birth" className="mb-3">
							<Form.Control
								defaultValue={dobPlace}
								onChange={(e) => {
									setDobPlace(e.target.value);
								}}
								type="text"
								placeholder="name"
							/>
						</FloatingLabel>
					</Col>
				</Row>

				<FloatingLabel controlId="permanentAddress" label="Permanent Address" className="mb-3">
					<Form.Control
						defaultValue={permanentAddress}
						onChange={(e) => {
							setPermanentAddress(e.target.value);
							setLocalAddress('');
						}}
						type="text"
						placeholder="name"
					/>
				</FloatingLabel>

				{isAddressSame && (
					<FloatingLabel controlId="local" label="Local Address" className="mb-3">
						<Form.Control
							defaultValue={localAddress}
							onChange={(e) => {
								setLocalAddress(e.target.value);
							}}
							type="text"
							placeholder="name"
							autoComplete="off"
						/>
					</FloatingLabel>
				)}
				<Form.Check
					defaultValue={isAddressSame}
					type={'checkbox'}
					id={`default-checkbox`}
					onChange={(e) => {
						setIsAddressSame(!isAddressSame);
						if (isAddressSame) {
							setLocalAddress(permanentAddress);
						} else {
							setLocalAddress('');
						}
					}}
					label={`Local address same as permanent address`}
				/>
				<Container className="mt-4">
					<h2>Physical Data</h2>
					<div style={{ display: 'block' }}>
						<Row>
							<Col>
								<FloatingLabel defaultValue={bloodGroup} controlId="floatingSelect" label="Blood Group">
									<Form.Select
										onChange={(e) => {
											setBloodGroup(e.target.value);
										}}
										aria-label="Floating label select example"
									>
										<option>select</option>
										<option value="A +ve">A +ve</option>
										<option value="A -ve">A -ve</option>
										<option value="B +ve">B +ve</option>
										<option value="B -ve">B -ve</option>
										<option value="AB +ve">AB +ve</option>
										<option value="AB -ve">AB -ve</option>
										<option value="O +ve">O +ve</option>
										<option value="O -ve">O -ve</option>
									</Form.Select>
								</FloatingLabel>
								<FloatingLabel controlId="bmi" label="BMI" className="mt-3">
									<Form.Control
										defaultValue={bmi}
										onChange={(e) => setBMI(e.target.value)}
										type="text"
										placeholder="name"
									/>
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel controlId="height" label="Height (CMs)" className="mb-3">
									<Form.Control
										defaultValue={height}
										onChange={(e) => {
											setHeight(e.target.value);
										}}
										type="text"
										placeholder="name"
									/>
								</FloatingLabel>
								<FloatingLabel controlId="weight" label="Weight (KGs)" className="mb-3">
									<Form.Control
										defaultValue={weight}
										onChange={(e) => {
											setWeight(e.target.value);
										}}
										type="text"
										placeholder="name"
									/>
								</FloatingLabel>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check
										onChange={(e) => {
											setPhysicalDisabillity(!physicalDisablity);
											if (!physicalDisablity) {
												setPhysicalDisabillityDescription('NA');
											}
										}}
										type="switch"
										id="custom-switch"
										label="Physically Disabled"
									/>
								</Form.Group>
								{physicalDisablity && (
									<FloatingLabel controlId="floatingInputh" label="Description" className="mt-5">
										<Form.Control
											defaultValue={physicalDisablityDescription}
											onChange={(e) => {
												setPhysicalDisabillityDescription(e.target.value);
											}}
											type="text"
											placeholder="yoga"
										/>
									</FloatingLabel>
								)}
							</Col>
						</Row>
					</div>
				</Container>

				<Button type="submit" variant="primary">
					submit
				</Button>
			</Form>
		</Container>
	);
};

export default PersonalDetails;
