import React from 'react'
import styled from 'styled-components'

const Service = ({data}) =>{
    
    return(
       <>
       <Heading>Services</Heading>
       <Servicearea className="service">
           
          {data.services.map((service,index) => (
              <div key={index}>
                 <BOX>
                   <Icon>{service.icon}</Icon>
                   <Title>{service.title}</Title>
                   <Info>{service.info}</Info>
                 </BOX>
              </div>
          ))}
       </Servicearea>
       </>
    )
}


export default Service;


 const Heading = styled.h2`
  font-size: 2.8rem;
  color: var(--primary__color);
  position: relative;
  margin-bottom: 3rem;
  display: inline-block;

  letter-spacing: 0.1rem;
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5%;
    transform: translateX(-50%);
    width: 100%;
    height: 0.1rem;
    background: var(--primary__color);
  }
  &:before{
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15%;
    width: 1.2rem;
    height: 1.2rem;
    background: var(--primary__color);
    border-radius: 50%;
    transform-origin:center;
    transform:translateX(-50%) rotate(45deg);
  }
 `;

const Servicearea = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

  text-align: left;
  margin: 0rem auto;
`;
const BOX = styled.div`
  padding: 2rem 2.5rem;

`;
const Icon = styled.div`
  font-size: 3rem;
  display: inline-block;
  color: var(--primary__color);
  // width: 4.5rem;
  // height: 4.5rem;
  // text-align: center;
  // line-height: 5rem;
  // background: var(--primary__color);
  // border-radius: 50%;

`;
const Title = styled.h2`
 font-size: 2rem;
 letter-spacing: 0.1rem;
 margin-bottom: 0.5rem;
 color: var(--primary__color);
`;
const Info = styled.p`
 font-size: 1.2rem;
  
`;