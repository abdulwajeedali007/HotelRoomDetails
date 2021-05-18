import React,{useContext} from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import styled from 'styled-components'
import {RoomsContext} from '../GlobalContext'
function RoomsContainer() {
    const state = useContext(RoomsContext);
    const {loading, sortedRooms, rooms} = state;
    return (
        <Container>
            {loading
            ?
                <h2>Room's data loading</h2>
            : 
            <>
                <h2>Search for rooms</h2>
                <RoomsFilter rooms = {rooms}/>
                <RoomsList rooms={sortedRooms}/>
            </>}
        </Container>
    
    )
}

export default RoomsContainer

const Container = styled.div`
   width: 80%;
   margin: 0rem auto;
   padding: 5rem 0rem;
   h2{
       font-size: 2.4rem;
       letter-spacing:0.1rem;

       text-align: center;
   }
   @media(max-width: 50rem){
       width: 90%;
   }
`;