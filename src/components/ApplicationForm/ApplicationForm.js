import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../../assests/logo.jpg';

const ApplicationForm = () => {
    return (
        
        <Container>
            <Row className='mt-5'>
                <Col md={12}>
                    <div className="text-center">
                        <h3 className='border pt-1 pb-1 text-black-700'> Complete Application Form </h3>
                    </div>
                </Col>

                <Col md={12} >
                     <div className="text-center" >
                         <img src={logo} alt="" />
                         <h3 className='text-danger'> CENTRE FOR LOCAL HEALTH OF MEDICAL TECHNOLOGY </h3>
                         <h6 className='text-success'> LOCAL HEALTH & PEOPLES DEVELOPMENT SOCIETY  </h6>
                         <h6 className='text-success'> GOVT. REG.NO-S-3815 </h6>
                         <h6 className='text-success'> SOUTH JATRA BARI. DHAKA-1204 </h6>
                     </div>
                </Col>

                <Col md={12}>
                        <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control type="file"  required/>
                                    </Form.Group>
                                </Row>
                                
                                <Row className="mb-4">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> Father's Name </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Mother's Name</Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>
                                </Row>
                                
                                <h6 className='fw-bolder'> Permanent Address </h6>

                                <Row className="mb-3 mt-4">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> Village </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> P.O. </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 ">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> P.S. </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> District </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>
                                </Row>
                                <h6 className='fw-bolder'> Present Address </h6>
                                
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> Village </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> P.O. </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> P.S. </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> District </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3 ">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> Nationality </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> Religion </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> ID No </Form.Label>
                                        <Form.Control type="tel"  required/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> Birth Reg No </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> Date of Birth</Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> Mobile </Form.Label>
                                        <Form.Control type="tel"  required/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 mb-5 pb-4">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> Blood Group </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> Membership Reg No </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option> Male </option>
                                            <option> Female </option>
                                            <option> Other's </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>


                                <h5 className='fw-bolder mb-3'> General Qualification (Fill up the table)  </h5>

                                <Row className="mb-2">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> Passed </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> School/College </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> Group </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>  Point </Form.Label>
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label> Year </Form.Label>
                                        <Form.Control type="tel" required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-2">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="text"  />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">                                   
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">                              
                                        <Form.Control type="tel" required />
                                    </Form.Group>
                                </Row>


                                <Row className="">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                         <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                         <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">                        
                                        <Form.Control type="text"  required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="tel" required />
                                    </Form.Group>
                                </Row>


                                <Button className='mt-5 pr-5 pl-5' variant="success" type="submit">
                                    Submit
                                </Button>
                        </Form>
                </Col>

            </Row>
        </Container>
    );
};

export default ApplicationForm;