import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselDemo from '../CarouselDemo/CarouselDemo';
import HomeTitle from '../HomeTitle/HomeTitle';

import './Home.css';

const Home = () => {


    return (

        
        <Container>

            <CarouselDemo />
            <HomeTitle />

        </Container>


    );
};

export default Home;