import { Button, Spinner } from 'react-bootstrap';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Admission.css';
import { useNavigate } from "react-router-dom";

const Admission = () => {

    const navigate = useNavigate();

    return (
        
        <Container>
            <Row className='mt-5 mb-5 pb-5'>
                <Col md={6}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Local Diploma Medical (L.D.M.S)</Card.Title>
                            <Button 
                                    onClick={()=> navigate('/application')}
                                    variant="success"
                                    className='rounded-3'

                                    > Apply Now </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">  <small> 12 days left </small> </Card.Footer>
                    </Card>
                </Col>


                <Col md={6}>
                    <Card className="text-center rounded-5 mt-xs-5">
                       
                        <Card.Body>
                            <Card.Title>Diploma Medical Science (D.M.S)</Card.Title>
                            <Button 
                                    onClick={()=> navigate('/application')}
                                    variant="success"
                                    className='rounded-3'>
                                    <Spinner animation='grow' size="sm"  />
                                  Apply Now 
                            </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted disabled"> <small> 2 days left </small> </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Admission;