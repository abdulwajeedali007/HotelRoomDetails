import React, {useContext} from 'react'
import styled from 'styled-components';
import {RoomsContext} from '../GlobalContext'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

function FeaturedRooms() {
    const value = useContext(RoomsContext);
    const {loading,featuredRooms} = value;

    // getting from individual rooms content
    const featuredRoomsData = () =>{
        return (
            featuredRooms.map(featured => (<Room key={featured.id} featuredRoom = {featured}/>))
        )
    }

    return (
        <FeaturedRoom>
            
            <Title title={'Featured Rooms'}/>
            <div className="container">
               {loading ? <Loading /> : featuredRoomsData()}
            </div>
        </FeaturedRoom>
    )
}

export default FeaturedRooms

const FeaturedRoom = styled.div`
    padding: 6rem 0rem;
    .container{
        width: 80%;
        margin: 0 auto;
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
        grid-column-gap: 1.5rem;
        @media(max-width:460px){
            width: 95%;
        }
    }
`;