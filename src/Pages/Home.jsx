import React from 'react'
import styled from 'styled-components'
import FeaturedRooms from '../Components/FeaturedRooms'
// components
import Hero from '../Components/Hero'
import HeroContent from '../Components/HeroContent'
import Services from '../Components/Services'
import {Link} from 'react-router-dom'


import defaultImg from '../images/BgImage.jpg'

function Home() {
    return (
        <>
           <Hero>
             <ContainerFull>
                <HeroContent>
                    <Link to='/Rooms'><Button>Know More...</Button></Link>
                </HeroContent>
             </ContainerFull>
           </Hero>
           {/*Serviecs area*/} 
           <Services/>
           <FeaturedRooms/>
        </>
    )
}

export default Home

export const ContainerFull = styled.div`
  width: 100%;
  height: 70vh;

  background-image: url(${defaultImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media(max-width: 90rem){
      width: 100%;
      height: 55vh;
  }
`; 
 

export const Button = styled.button`
  margin-top: 2rem;
  background-color: var(--primary__color);
  border: none;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  color: #fff;
  border-radius: 0.5rem;
  font-family: 'Poppins', sans-serif;

  cursor: pointer;
  border: 0.1rem solid transparent;

  letter-spacing: 0.1rem;
  &:hover{
      border: 0.1rem solid var(--primary__color);
      background-color: transparent;
      color: var(--primary__color);

  }
`