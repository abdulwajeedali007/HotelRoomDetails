import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import defaultImage from '../images/details-1.jpeg';
function RoomsList({rooms}) {
    return (
        <div>
            {
                rooms.length < 0 
                ?
                (<div>Unfortunately no rooms matched your search parameters</div>)
                :
                
                <div style={card__container}>
                {
                    rooms.map((room,index) => (
                        <CARD key={index}>
                                <div className="imageContainer">
                                    <img src={room.images[0] || defaultImage} alt="RoomImage" />
                                    <p className="heading">{room.name}</p>
                                </div>
                                <div className="details">
                                    <p className="price"><span className="amount">${room.price}</span></p>
                                    <Link to={`SingleRoom/${room.slug}`} className="details__link">Details</Link>
                                </div>
                        </CARD>
                    ))
                }
                </div>
                
            }
        </div>
    )
}

export default RoomsList

const card__container = {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(32rem,1fr))`,
        gridGap: `1.5rem`,
}
const CARD = styled.div`
   
   .imageContainer{
       position: relative; 
       overflow: hidden;
       border-radius:1rem 1rem 0rem 0rem;
       width: 100%;
       height: 26rem;
       img{
           width: 100%;
           height: 100%;
           object-fit: cover;
       }
       &::before{
           content:'';
           position: absolute;
           width: 100%;
           height: 100%;

           background: linear-gradient(-45deg, transparent,  rgba(2,61,58, 0.60) 70%);

       }
       .heading{
           position: absolute;
           left: 1.5rem;
           top: 1.5rem;

           font-size: 1.8rem;
           font-weight: 600;
           color: #fff;
           text-transform: capitalize;
           letter-spacing:0.1rem;

       }
       
   }
   .details{
        background: var(--primary__color);
        padding: 1rem 2rem;

        color: #fff;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        justify-content: center;
        align-items:center;
        box-shadow: 0rem 1rem 1.5rem -1.5rem rgba(0,0,0,1); 

        .price{
            font-size: 1.4rem;
            font-weight: 300;

            .amount{
                font-size: 1.6rem;
                font-weight: 600;
            }
        }
        .details__link{
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
            letter-spacing: 0.1rem;

            justify-self: end;
            transform: scale(1);
            transition: all 0.1s linear;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
`;