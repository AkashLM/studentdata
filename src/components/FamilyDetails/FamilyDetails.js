import { Fragment, useState } from 'react';
import { Container, Button, FloatingLabel, Form, Row, Col, Collapse, Image } from 'react-bootstrap';
import { done } from '../images';

const FamilyDetails = (props) => {
	const [ open, setOpen ] = useState(false);
	const [ saved, setSaved ] = useState(false);
	const [ fatherName, setFatherName ] = useState('');
	const [ motherName, setMotherName ] = useState('');
	const [ legalGuardiansName, setLegalGuardiansName ] = useState('');
	const [ sibling1, setSibling1 ] = useState({ name: '', Qualification: '', Occupation: '', Contact: '' });
	const [ sibling2, setSibling2 ] = useState({ name: '', Qualification: '', Occupation: '', Contact: '' });
	const [ sibling3, setSibling3 ] = useState({ name: '', Qualification: '', Occupation: '', Contact: '' });
	const [ occupation, setOccupation ] = useState({
		mothers: '',
		fathers: '',
		legalguardians: ''
	});
	const [ workDetails, setWorkDetails ] = useState({
		fathers: '',
		mothers: '',
		legalguardians: ''
	});
	const [ officeContact, setOfficeContact ] = useState({
		fathers: '',
		mothers: '',
		legalguardians: ''
	});
	const [ email, setEmail ] = useState({
		fathers: '',
		mothers: '',
		legalguardians: ''
	});
	const [ annualIncome, setAnnualIncome ] = useState({
		fathers: '',
		mothers: '',
		legalguardians: ''
	});
	const [ hobbies, setHobies ] = useState('');

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const data = {
				FathersName: fatherName,
				MotherName: motherName,
				LegalGuardiansName: legalGuardiansName,
				MothersOccupation: occupation.mothers,
				FathersOccupation: occupation.fathers,
				LegalGuardiansOccupation: occupation.legalguardians,
				FathersWorkDetails: workDetails.fathers,
				MothersWorkDetails: workDetails.mothers,
				LegalGuardiansWorkDetails: workDetails.legalguardians,
				FathersOfficeContact: officeContact.fathers,
				MothersOfficeContact: officeContact.mothers,
				LegalGuardiansOfficeContact: officeContact.legalguardians,
				FathersEmail: email.fathers,
				MothersEmail: email.mothers,
				LegalGuardiansEmail: email.legalguardians,
				FathersAnnualIncome: annualIncome.fathers,
				MothersAnnualIncome: annualIncome.mothers,
				LegalGuardiansAnnualIncome: annualIncome.legalguardians,
				Hobbies: hobbies,
				Sibling1Name: sibling1.name.length > 0 ? sibling1.name : 'NA',
				Sibling1Contact: sibling1.name.length > 0 ? sibling1.Contact : 'NA',
				Sibling1Occupation: sibling1.name.length > 0 ? sibling1.Occupation : 'NA',
				Sibling1Qualification: sibling1.name.length > 0 ? sibling1.Qualification : 'NA',
				Sibling2Name: sibling2.name.length > 0 ? sibling2.name : 'NA',
				Sibling2Contact: sibling2.name.length > 0 ? sibling2.Contact : 'NA',
				Sibling2Occupation: sibling2.name.length > 0 ? sibling2.Occupation : 'NA',
				Sibling2Qualification: sibling2.name.length > 0 ? sibling2.Qualification : 'NA',
				Sibling3Name: sibling3.name.length > 0 ? sibling3.name : 'NA',
				Sibling3Contact: sibling3.name.length > 0 ? sibling3.Contact : 'NA',
				Sibling3Occupation: sibling3.name.length > 0 ? sibling3.Occupation : 'NA',
				Sibling3Qualification: sibling3.name.length > 0 ? sibling3.Qualification : 'NA'
			};
			props.setData(data);
			setOpen(false);
			setSaved(true);
			props.acadDetails(true);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<Fragment>
			{saved ? (
				<Image src={done} style={{ width: 30 }} className="mb-3" />
			) : (
				<Button
					onClick={() => setOpen(!open)}
					aria-controls="example-collapse-text"
					className="mb-3"
					aria-expanded={open}
				>
					edit
				</Button>
			)}
			<Collapse in={open}>
				<Container style={{ marginTop: 10 }}>
					<Form>
						<Row className="g-2">
							<h1>Parent's Detials</h1>
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Father's Name" className="mb-3">
									<Form.Control
										defaultValue={fatherName}
										onChange={(e) => {
											setFatherName(e.target.value);
										}}
										type="text"
										placeholder="name"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Mother's Name" className="mb-3">
									<Form.Control
										defaultValue={motherName}
										onChange={(e) => {
											setMotherName(e.target.value);
										}}
										type="text"
										placeholder="name"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Legal Guardian's Name"
									className="mb-3"
								>
									<Form.Control
										defaultValue={legalGuardiansName}
										onChange={(e) => {
											setLegalGuardiansName(e.target.value);
										}}
										type="text"
										placeholder="name"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="g-2">
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Father's Occupation"
									className="mb-3"
								>
									<Form.Control
										defaultValue={occupation.fathers}
										onChange={(e) => {
											setOccupation((prev) => {
												return { ...prev, fathers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Mother's Occupation"
									className="mb-3"
								>
									<Form.Control
										defaultValue={occupation.mothers}
										onChange={(e) => {
											setOccupation((prev) => {
												return { ...prev, mothers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Legal Guardian's Occupation"
									className="mb-3"
								>
									<Form.Control
										defaultValue={occupation.legalguardians}
										onChange={(e) => {
											setOccupation((prev) => {
												return { ...prev, legalguardians: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="g-2">
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Father's Work Detials"
									className="mb-3"
								>
									<Form.Control
										defaultValue={workDetails.fathers}
										onChange={(e) => {
											setWorkDetails((prev) => {
												return { ...prev, fathers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Mother's Work Details"
									className="mb-3"
								>
									<Form.Control
										defaultValue={workDetails.mothers}
										onChange={(e) => {
											setWorkDetails((prev) => {
												return { ...prev, mothers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Legal Guardian's Work Details"
									className="mb-3"
								>
									<Form.Control
										defaultValue={workDetails.legalguardians}
										onChange={(e) => {
											setWorkDetails((prev) => {
												return { ...prev, legalguardians: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="g-2">
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Father's Office Contact"
									className="mb-3"
								>
									<Form.Control
										defaultValue={officeContact.fathers}
										onChange={(e) => {
											setOfficeContact((prev) => {
												return { ...prev, fathers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Mother's Office Contact"
									className="mb-3"
								>
									<Form.Control
										defaultValue={officeContact.mothers}
										onChange={(e) => {
											setOfficeContact((prev) => {
												return { ...prev, mothers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Legal Guardian's Office Contact"
									className="mb-3"
								>
									<Form.Control
										defaultValue={officeContact.legalguardians}
										onChange={(e) => {
											setOfficeContact((prev) => {
												return { ...prev, legalguardians: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="g-2">
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Father's Email" className="mb-3">
									<Form.Control
										defaultValue={email.fathers}
										onChange={(e) => {
											setEmail((prev) => {
												return { ...prev, fathers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Mother's Email" className="mb-3">
									<Form.Control
										defaultValue={email.mothers}
										onChange={(e) => {
											setEmail((prev) => {
												return { ...prev, mothers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Legal Guardian's Email"
									className="mb-3"
								>
									<Form.Control
										defaultValue={email.legalguardians}
										onChange={(e) => {
											setEmail((prev) => {
												return { ...prev, legalguardians: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="g-2">
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Father's Annual Income"
									className="mb-3"
								>
									<Form.Control
										defaultValue={annualIncome.fathers}
										onChange={(e) => {
											setAnnualIncome((prev) => {
												return { ...prev, fathers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Mother's Annual Income"
									className="mb-3"
								>
									<Form.Control
										defaultValue={annualIncome.mothers}
										onChange={(e) => {
											setAnnualIncome((prev) => {
												return { ...prev, mothers: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Legal Guardian's Annual Income"
									className="mb-3"
								>
									<Form.Control
										defaultValue={annualIncome.legalguardians}
										onChange={(e) => {
											setAnnualIncome((prev) => {
												return { ...prev, legalguardians: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<h1>Hobbies</h1>
						<FloatingLabel controlId="floatingTextarea2" label="Hobbies And Future Intrests">
							<Form.Control
								as="textarea"
								defaultValue={hobbies}
								placeholder="Leave a comment here"
								style={{ height: '100px' }}
								onChange={(e) => {
									setHobies(e.target.value);
								}}
							/>
						</FloatingLabel>
						<h1>Sibling Details</h1>

						<Row className="g-2">
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Sibling 1 Name" className="mb-3">
									<Form.Control
										defaultValue={sibling1.name}
										onChange={(e) => {
											setSibling1((prev) => {
												return { ...prev, name: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Sibling 2 Name" className="mb-3">
									<Form.Control
										defaultValue={sibling2.name}
										onChange={(e) => {
											setSibling2((prev) => {
												return { ...prev, name: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Sibling 3 Name" className="mb-3">
									<Form.Control
										defaultValue={sibling3.name}
										onChange={(e) => {
											setSibling3((prev) => {
												return { ...prev, name: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="g-2">
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Sibling 1 Qualification"
									className="mb-3"
								>
									<Form.Control
										defaultValue={sibling1.Qualification}
										onChange={(e) => {
											setSibling1((prev) => {
												return { ...prev, Qualification: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Sibling 2 Qualification"
									className="mb-3"
								>
									<Form.Control
										defaultValue={sibling2.Qualification}
										onChange={(e) => {
											setSibling2((prev) => {
												return { ...prev, Qualification: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Sibling 3 Qualification"
									className="mb-3"
								>
									<Form.Control
										defaultValue={sibling3.Qualification}
										onChange={(e) => {
											setSibling3((prev) => {
												return { ...prev, Qualification: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="g-2">
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Sibling 1 Occupation"
									className="mb-3"
								>
									<Form.Control
										defaultValue={sibling1.Occupation}
										onChange={(e) => {
											setSibling1((prev) => {
												return { ...prev, Occupation: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Sibling 2 Occupation"
									className="mb-3"
								>
									<Form.Control
										defaultValue={sibling2.Occupation}
										onChange={(e) => {
											setSibling2((prev) => {
												return { ...prev, Occupation: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel
									controlId="floatingInputName"
									label="Sibling 3 Occupation"
									className="mb-3"
								>
									<Form.Control
										defaultValue={sibling3.Occupation}
										onChange={(e) => {
											setSibling3((prev) => {
												return { ...prev, Occupation: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>
						<Row className="g-2">
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Sibling 1 Contact" className="mb-3">
									<Form.Control
										defaultValue={sibling1.Contact}
										onChange={(e) => {
											setSibling1((prev) => {
												return { ...prev, Contact: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Sibling 2 Contact" className="mb-3">
									<Form.Control
										defaultValue={sibling2.Contact}
										onChange={(e) => {
											setSibling2((prev) => {
												return { ...prev, Contact: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
							<Col md>
								<FloatingLabel controlId="floatingInputName" label="Sibling 3 Contact" className="mb-3">
									<Form.Control
										defaultValue={sibling3.Contact}
										onChange={(e) => {
											setSibling3((prev) => {
												return { ...prev, Contact: e.target.value };
											});
										}}
										type="text"
										placeholder="occ"
										required
									/>
								</FloatingLabel>
							</Col>
						</Row>

						<div className="col-md-12 text-center">
							<Button className=" mt-3 mb-3" type="button" onClick={onSubmitHandler} variant="primary">
								submit
							</Button>
						</div>
					</Form>
				</Container>
			</Collapse>
		</Fragment>
	);
};

export default FamilyDetails;
