import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './StudentResult.css';

const StudentResult = () => {


    return (
        
        <Container>
            <Row className='mt-5'> 
                <Col className='text-center'> 
                    <h3 className='font-italic'> Student Result</h3>
                    <div className='w-25 m-auto pt-5 pb-3'>
                        <Form.Control type="text" placeholder="Application ID" />
                    </div>
                    <p> Please enter your <strong className='text-danger'> Application ID </strong> to search Result. </p>
                    <Button onClick={()=> alert("Database can't Work")} variant='success' className='rounded-3 pb-2 pt-2'> Submit </Button>
                </Col>
            </Row>
        </Container>

    );
};

export default StudentResult;