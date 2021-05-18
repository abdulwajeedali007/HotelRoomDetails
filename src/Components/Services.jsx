import React from 'react'
import styled from 'styled-components'
import servicesData from '../ServicesData'
import Service from './Service'

const Services = () => {
    return (
        <Container className="main__container">
            <Service data = {servicesData}/>
        </Container>
    )
}


export default Services;



const Container = styled.div`
   background: #cbd6d5;
   padding: 2rem 0rem;
   text-align: center;
`;


