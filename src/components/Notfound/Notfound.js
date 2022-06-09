import React from 'react';
import { Container } from 'react-bootstrap';

const Notfound = () => {
    return (
        <Container className='d-flex justify-content-center align-content-center'>

            <h2> This page doesn't seem to exist...... <span className ='text-danger'> 404 !!</span> </h2> 
            
        </Container>
    );
};

export default Notfound;