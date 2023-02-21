import { Fragment, useState } from "react";
import {
  Container,
  Button,
  FloatingLabel,
  Form,
  Row,
  Col,
  Collapse,
  Image,
} from "react-bootstrap";
import { done } from "../images";
import config from "../../config.json";
import axios from "axios";

const AcademicDetails = (props) => {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [ResData, setResData] = useState({});

  const [highschoolDetails, setHighschoolDetails] = useState({
    Physics: "",
    Math: "",
    Chem: "",
    Total: "",
    SchoolName: "",
    Coaching: "",
  });
  const [examMarks, setExamMarks] = useState({
    Physics: "",
    Math: "",
    Chem: "",
    Total: "",
    SchoolName: "",
    Coaching: "",
    About: "",
    LinkedIn: "",
  });
  const [schoolDetails, setSchoolDetails] = useState({
    English: "",
    Science: "",
    Math: "",
    Total: "",
    SchoolName: "",
    Coaching: "",
  });
  const [examType, setExamType] = useState("");
  const [highSchoolType, setHighSchoolType] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...props.apiData,
        _10English: schoolDetails.English,
        _10Science: schoolDetails.Science,
        _10Maths: schoolDetails.Math,
        _10Total: schoolDetails.Total,
        _10School: schoolDetails.SchoolName,
        _10Coaching: schoolDetails.Coaching,
        _12Physics: highschoolDetails.Physics,
        _12Math: highschoolDetails.Math,
        _12Chemisty: highschoolDetails.Chem,
        _12Total: highschoolDetails.Total,
        _12SchoolName: highschoolDetails.SchoolName,
        _12Coaching: highschoolDetails.Coaching,
        _CExamPhysics: examMarks.Physics,
        _CExamMath: examMarks.Math,
        _CExamChem: examMarks.Chem,
        _CExamTotal: examMarks.Total,
        _CExamSchoolName: examMarks.SchoolName,
        _CExamCoaching: examMarks.Coaching,
        _About: examMarks.About,
        _LinkedIn: examMarks.LinkedIn,
        _CExam: examType,
        _12Type: highSchoolType,
      };

      axios
        .post("https://mentorship-b27v.onrender.com/api/v1/AddStudentProfile", data)
        .then((response) => {
          setResData(response?.data?.data);
          alert(" Your Information has been sent successfully ! 🤩");
        })
        .catch((err) => {
			alert(err.response.data.message);
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
        <div style={{ color: "003B4E", textAlign: "center" }}>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            className="mb-3"
            aria-expanded={open}
          >
            edit
          </Button>
        </div>
      )}
      <Collapse in={open}>
        <Container>
          <Form>
            <Row className="g-2">
              <h3 style={{ disply: "flex", justifyContent: "right" }}>
                SSC Details:
              </h3>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputName"
                  label="English Marks"
                  className="mb-3"
                >
                  <Form.Control
                    defaultValue={schoolDetails.English}
                    onChange={(e) => {
                      setSchoolDetails((prev) => {
                        return { ...prev, English: e.target.value };
                      });
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
                  label="Science Marks"
                  className="mb-3"
                >
                  <Form.Control
                    defaultValue={schoolDetails.Science}
                    onChange={(e) => {
                      setSchoolDetails((prev) => {
                        return { ...prev, Science: e.target.value };
                      });
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
                  label="Math Marks"
                  className="mb-3"
                >
                  <Form.Control
                    defaultValue={schoolDetails.Math}
                    onChange={(e) => {
                      setSchoolDetails((prev) => {
                        return { ...prev, Math: e.target.value };
                      });
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
                  label="Total Marks"
                  className="mb-3"
                >
                  <Form.Control
                    onChange={(e) => {
                      setSchoolDetails((prev) => {
                        return { ...prev, Total: e.target.value };
                      });
                    }}
                    defaultValue={schoolDetails.Total}
                    type="text"
                    placeholder="name"
                  />
                </FloatingLabel>
              </Col>
              <FloatingLabel
                onChange={(e) => {
                  setSchoolDetails((prev) => {
                    return { ...prev, SchoolName: e.target.value };
                  });
                }}
                defaultValue={schoolDetails.SchoolName}
                controlId="floatingInputName"
                label="SSC School Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="SSCName" required />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputName"
                label="SSC Coaching Class"
                defaultValue={schoolDetails.Coaching}
                onChange={(e) => {
                  setSchoolDetails((prev) => {
                    return { ...prev, Coaching: e.target.value };
                  });
                }}
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Coaching" />
              </FloatingLabel>
            </Row>
            <h3>High School Detials:</h3>
            <Row className="g-2">
              <Col className="mb-3" md>
                <FloatingLabel
                  defaultValue={highSchoolType}
                  controlId="floatingSelect"
                  label="High School Type "
                >
                  <Form.Select
                    onChange={(e) => {
                      setHighSchoolType(e.target.value);
                    }}
                    aria-label="Floating label select example"
                  >
                    <option>select</option>
                    <option value="HSC">HSC</option>
                    <option value="Diploma">Diploma</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Physics Marks"
                  className="mb-3"
                >
                  <Form.Control
                    defaultValue={highschoolDetails.Physics}
                    onChange={(e) => {
                      setHighschoolDetails((prev) => {
                        return { ...prev, Physics: e.target.value };
                      });
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
                  label="Chemistry Marks"
                  className="mb-3"
                >
                  <Form.Control
                    defaultValue={highschoolDetails.Chem}
                    onChange={(e) => {
                      setHighschoolDetails((prev) => {
                        return { ...prev, Chem: e.target.value };
                      });
                    }}
                    type="text"
                    placeholder="name"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  defaultValue={highschoolDetails.Math}
                  onChange={(e) => {
                    setHighschoolDetails((prev) => {
                      return { ...prev, Math: e.target.value };
                    });
                  }}
                  controlId="floatingInputName"
                  label="Math Marks"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="name" required />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  defaultValue={highschoolDetails.Total}
                  onChange={(e) => {
                    setHighschoolDetails((prev) => {
                      return { ...prev, Total: e.target.value };
                    });
                  }}
                  controlId="floatingInputName"
                  label="Total Marks"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="name" />
                </FloatingLabel>
              </Col>
              <FloatingLabel
                controlId="floatingInputName"
                defaultValue={highschoolDetails.SchoolName}
                onChange={(e) => {
                  setHighschoolDetails((prev) => {
                    return { ...prev, SchoolName: e.target.value };
                  });
                }}
                label="High School Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="SSCName" required />
              </FloatingLabel>
              <FloatingLabel
                defaultValue={highschoolDetails.Coaching}
                onChange={(e) => {
                  setHighschoolDetails((prev) => {
                    return { ...prev, Coaching: e.target.value };
                  });
                }}
                controlId="floatingInputName"
                label="Coaching Class"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Coaching" />
              </FloatingLabel>
            </Row>
            <h3>Competetive Exam Detials:</h3>
            <Row className="g-2">
              <Col className="mb-3" md>
                <FloatingLabel
                  defaultValue={examType}
                  controlId="floatingSelect"
                  label="Exam Type "
                >
                  <Form.Select
                    onChange={(e) => {
                      setExamType(e.target.value);
                    }}
                    aria-label="Floating label select example"
                  >
                    <option>select</option>
                    <option value="CET">CET</option>
                    <option value="JEE">JEE</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Physics Marks"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="name"
                    defaultValue={examMarks.Physics}
                    onChange={(e) => {
                      setExamMarks((prev) => {
                        return { ...prev, Physics: e.target.value };
                      });
                    }}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Chemistry Marks"
                  className="mb-3"
                >
                  <Form.Control
                    defaultValue={examMarks.Chem}
                    onChange={(e) => {
                      setExamMarks((prev) => {
                        return { ...prev, Chem: e.target.value };
                      });
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
                  label="Math Marks"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    defaultValue={examMarks.Math}
                    onChange={(e) => {
                      setExamMarks((prev) => {
                        return { ...prev, Math: e.target.value };
                      });
                    }}
                    placeholder="name"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Total Marks"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    defaultValue={examMarks.Total}
                    onChange={(e) => {
                      setExamMarks((prev) => {
                        return { ...prev, Total: e.target.value };
                      });
                    }}
                    placeholder="name"
                  />
                </FloatingLabel>
              </Col>
              <FloatingLabel
                controlId="floatingInputName"
                label=" School Name"
                className="mb-3"
              >
                <Form.Control
                  defaultValue={examMarks.SchoolName}
                  onChange={(e) => {
                    setExamMarks((prev) => {
                      return { ...prev, SchoolName: e.target.value };
                    });
                  }}
                  type="text"
                  placeholder="SSCName"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputName"
                label=" Coaching Class"
                className="mb-3"
              >
                <Form.Control
                  defaultValue={examMarks.Coaching}
                  onChange={(e) => {
                    setExamMarks((prev) => {
                      return { ...prev, Coaching: e.target.value };
                    });
                  }}
                  type="text"
                  placeholder="Coaching"
                />
              </FloatingLabel>
            </Row>
            <h3>Other Details:</h3>
            <Row className="g-2">
            <Col md>
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Enter About yourself. Required minimum 3/4 liners !"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter About yourself. Required minimum 3/4 liners !"
                    defaultValue={examMarks.About}
                    onChange={(e) => {
                      setExamMarks((prev) => {
                        return { ...prev, About: e.target.value };
                      });
                    }}
                    required
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Paste LinkedIn account link here!"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Paste LinkedIn account link here!"
                    defaultValue={examMarks.LinkedIn}
                    onChange={(e) => {
                      setExamMarks((prev) => {
                        return { ...prev, LinkedIn: e.target.value };
                      });
                    }}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="col-md-12 text-center">
              <Button
                onClick={onSubmitHandler}
                className=" mt-3 mb-3"
                type="button"
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

export default AcademicDetails;
