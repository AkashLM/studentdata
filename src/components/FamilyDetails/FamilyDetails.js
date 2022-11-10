import { Fragment, useState } from 'react';
import { Container, Button, FloatingLabel, Form, Row, Col, Collapse, Image } from 'react-bootstrap';
import { done } from '../images';
import config from '../../config.json';
import { db } from '../firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
const FamilyDetails = (props) => {
	const [ open, setOpen ] = useState(false);
	const [ saved, setSaved ] = useState(false);
	const [ fatherName, setFatherName ] = useState('');
	const [ motherName, setMotherName ] = useState('');
	const [ legalGuardiansName, setLegalGuardiansName ] = useState('');
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
	const doc_name = props.ID;

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			console.log('triggered');
			const docRef = doc(db, config.collectionName, doc_name);
			updateDoc(docRef, {
				FatherName: fatherName,
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
				Hobbies: hobbies
			}).then(() => {
				// setOpen(false);
				// setSaved(true);
			});
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
								placeholder="Leave a comment here"
								style={{ height: '100px' }}
								onChange={(e) => {
									setHobies(e.target.value);
								}}
							/>
						</FloatingLabel>
						<h1>Sibling Details</h1>
						!!pending
						<div className="col-md-12 text-center">
							<Button
								style={{ postion: 'relative', right: 50 }}
								className=" mt-3 mb-3"
								type="button"
								onClick={onSubmitHandler}
								variant="primary"
							>
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
