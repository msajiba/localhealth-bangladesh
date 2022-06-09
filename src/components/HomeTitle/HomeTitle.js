import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './HomeTitle.css';
import Secreatry from '../../assests/secretary.jpg';
import Principal from '../../assests/principal.jpg';

const HomeTitle = () => {
    return (
    
        <Container>
            <Row className='mt-5'>

                <Col md={6} >
                        <Card className='pt-2'>
                            <Card.Img variant="top" className='img-fluid m-auto w-50 rounded-circle border' src={Secreatry} />
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <h3> From the desk of the Founder </h3>              
                                </Card.Title>
                                <Card.Text >
                                    <p> <small className='text-justify'>  Our Bangladesh is one of the countries in the history of the world. The soil and people of this country are very tender. The people of the country are very fond of peace. Bangladesh is a populous country. We are not lagging behind in health awareness like other countries in the world. Primary doctors are playing a pivotal role in raising human health awareness in Bangladesh. Local Health and People's Development Society has been working with the government to create these primary care providers. The company has been working with great reputation in several districts of the country for more than two decades. Notable districts are Dhaka and Comilla. The Local Health and People's Dave Society has been working successfully for the last two decades to make educated unemployed youth self-reliant through training. I see the coming days of the brightness of the local health and mass development society. The cooperation of the appropriate authorities is required for the implementation of the project.</small> </p>
                                </Card.Text>
                                <Card.Text>
                                    <h6> DR. MD. MAFIZUL HAQUE </h6>
                                    <h5> Founder </h5>
                                    <p> Center For Local Health of Medical Technology </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>

                <Col md={6} >
                        <Card className='pt-2'>
                            <Card.Img variant="top" className='img-fluid m-auto w-50 rounded-circle border' src={Principal} />
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <h3> From the desk of the Principal </h3>              
                                </Card.Title>
                                <Card.Text >
                                    <p> <small className='text-justify'>  Local Health and People's Development Society created to work with timely and practical thinking. Local Health and People's Development Society is working with these two entities. Primary medical care in Bangladesh has been around for a long time. This first aid service is run by the primary physician. Local Health and People's Development Society is creating primary Physicians as a complement to the government.The Local Health and People's Development Society is trying to make the educated unemployed youth of the country self-reliant through training. The success of the training program of the Local Health and People's Development Society is exemplified by the activities of the Cumilla branch. Educated unemployed youth are becoming self-reliant by providing modern quality training. I will always support the Cumilla branch. </small> </p>
                                </Card.Text>
                                <Card.Text>
                                    <h6> DR. FARHANA ISLAM </h6>
                                    <h5> Principal </h5>
                                    <p> Center For Local Health of Medical Technology </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>

            </Row>
        </Container>


    );
};

export default HomeTitle;