import React from 'react'
import Hero from '../Components/Hero'
import RoomHeroContent from '../Components/RoomHeroContent'

import {ContainerFull} from '../Pages/Home'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import defaultone from '../images/details-4.jpeg'
import RoomsContainer from './RoomsContainer'




function Rooms() {

    return (
        <div>
            <Hero>
               <RoomsimageBacground>
                   <RoomHeroContent heading={'Our Rooms'}>
                       <Link to='/'><button>Back to home...</button></Link>
                   </RoomHeroContent>
               </RoomsimageBacground>
            </Hero>

            <RoomsContainer/>
        </div>


    )
}

export default Rooms

const RoomsimageBacground = styled(ContainerFull)`
   height: 50vh;
   background-image: url(${defaultone});
   button{
        border: 0.1rem solid var(--primary__color);
        padding: 1rem 2.5rem;
        border-radius: 0.5rem;
        background: transparent;
        font-family: 'Poppins',sans-serif;
        color: var(--primary__color);
        cursor: pointer;
      }
`;