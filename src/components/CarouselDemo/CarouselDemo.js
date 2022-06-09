import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Slider1 from '../../assests/carousel-1.png';
import Slider2 from '../../assests/carousel-2.png';
import Slider3 from '../../assests/carousel-3.png';
import './CarouselDemo.css';


const CarouselDemo = () => {
    return (
        
        <Container>

            <Carousel className='carousel-container'>
                    <Carousel.Item className='text-danger'>
                        <img 
                            className="d-block  img-fluid " 
                            src={Slider1} 
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-info'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>

                        <img
                            className="d-block  img-fluid" src={Slider2} alt="Second slide"
                        />

                        <Carousel.Caption className='text-primary'>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                            className="d-block  img-fluid" src={Slider3}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='text-danger'>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

            </Carousel>

        </Container>
    );
};

export default CarouselDemo;