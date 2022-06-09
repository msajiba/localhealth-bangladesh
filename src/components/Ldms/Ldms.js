import React from 'react';
import { Col, Container, ListGroup, Row, Table } from 'react-bootstrap';

const Ldms = () => {
    return (
        

        <Container>
        <Row className='mt-5'>
            <Col md={12}>
                 <h1 className='text-success text-center'> ( Local Diploma Medical Science ) <span> 1Year</span> </h1> 
                 <h5 className='text-justify'>  LDMS (Local Diploma Medical Science) It is a Short Training Program in our organization. It is started since 2000 on 1st time in cumilla . This 1 year medical course is very much needed for an educated unemployed youth to become self reliant. This course provides basic knowledge training in all aspects of medical . L.D. M. S trainees will play an extraordinary role in first aid. </h5> 
                 <h4 className="text-center text-danger mt-3"> Educational Qualifications and Required Documents for Training at the Center for Local Health of Medical Technology </h4>

              <div>
                <ListGroup>
                    <ListGroup.Item> 1. Photocopy of SSC or equivalent passed board certificate or marks sheet. </ListGroup.Item>
                    <ListGroup.Item> 2. Photocopy of National Identity Card or Birth Registration. </ListGroup.Item>
                    <ListGroup.Item> 3. Certificate of Character by local chairman or counselor. </ListGroup.Item>
                    <ListGroup.Item> 4. Photo - Passport size = 2 copies, stamp size = 2 copies.</ListGroup.Item>
                </ListGroup>
              </div>


                <div>
                        <h4 className='text-success text-center mt-3'> Training methods of the Center for Local Health of Medical Technology </h4> 

                        <Table >
                            <thead>
                                <tr>
                                
                                    <th> Subject </th>
                                    <th> Description </th>
                                    
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                   
                                    <td> Class </td>
                                    <td> Three days a week </td>
                                   
                                </tr>
                                <tr>
                                    
                                    <td> Class time </td>
                                    <td> 2 hours (per day)</td>
                                    
                                </tr>
                                <tr>
                                    
                                    <td>Pass mark</td>
                                    <td> 40%, according to the method </td>
                                </tr>

                                <tr>
                                    
                                    <td>Test method</td>
                                    <td> Semester based</td>
                                </tr>

                                <tr>
                                    
                                    <td>The value per semester is -100</td>
                                    <td> Written-60, MCQ -20 oral-20 </td>
                                </tr>

                                <tr>
                                    
                                    <td> Total semesterk </td>
                                    <td> 13 </td>
                                </tr>

                            </tbody>
                        </Table> 

                </div>
            </Col>
            <Col>
                 
            </Col>
        </Row>
    </Container>
    );
};

export default Ldms;