import React, {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Hero from '../Components/Hero'
import {ContainerFull} from '../Pages/Home'
import RoomHeroContent from '../Components/RoomHeroContent'

// getting context
import {RoomsContext} from '../GlobalContext'

import detailsOne from '../images/details-1.jpeg'

function SingleRoom(props) {

    const [value] = useState({
        slug: props.match.params.slug,
    })
    const {getSingleRoomDetails} = useContext(RoomsContext);
    
    const roomDetails = getSingleRoomDetails(value.slug);

    // useEffect(() => {
        
    // }, [roomDetails])
    console.log(roomDetails);
    
    const {name, images, description, price, size, capacity, pets, breakfast, extras} = roomDetails;

    return (
        
        <SinglePageContainer>

            { !roomDetails 
                    ?
                    (
                    <div className="error__container" >
                        <h3>No such room could be found!</h3>
                        <Link to='/Rooms' className="link">Back to rooms</Link>
                    </div>
                    ) 
                    :
                    (
                    <>
                    <Hero>
                    {/*styled component*/}
                        <HeroSingleRoom>
                        {/*Hero content component*/}
                            <RoomHeroContent  heading={name}>
                                <Link to='/Rooms'><button>Back to rooms...</button></Link>
                            </RoomHeroContent>
                        </HeroSingleRoom>
                    </Hero>

                    <Artical>
                        <div className="images__container">
                            {images.slice(1,4).map((image,index) => <img key={index} src={image} alt="artical images"/>)}
                        </div>
                        <div className="content__area">
                            <div className="details">
                                <h2>Details</h2>
                                <p>
                                  {description}
                                </p>
                            </div>
                            <div className="info">
                                <h2>Info</h2>
                                <h4>Price : ${price}</h4>
                                <h4>Size : {size} SQFT</h4>
                                <h4>Capacity : { capacity > 1 ? `${capacity} People`: `${capacity} Person`}</h4>
                                <h4>Pets : { pets ? `Pets Allowed`: `No Pets Allowed`}</h4>
                                <h4>{ breakfast && 'BreakFast : Free Breakfast included'}</h4>
                            </div>
                        </div>
                        <div className="extras">
                            <h2>Extras</h2>
                            <ul>
                               {extras.map((extra,index) => <li key={index}> -{extra}</li>)}
                            </ul>
                        </div>
                    </Artical>
                    </>
                    )
            }  

       </SinglePageContainer>
    )
}

export default SingleRoom






const SinglePageContainer = styled.div`
    .error__container{
        text-align: center;
        margin: 2rem 0rem;
        h3{
            font-size: 1.8rem;
        }
        .link{
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`;

const HeroSingleRoom = styled(ContainerFull)`
    height: 50vh;
    background-image: url(${detailsOne});
    position: relative;
    button{
        border: 0.1rem solid var(--primary__color);
        padding: 1rem 2.5rem;
        border-radius: 0.5rem;
        background: transparent;
        font-family: 'Poppins',sans-serif;
        color: var(--primary__color);
        cursor: pointer;
      }

    @media(max-width: 90rem){
      height: 35rem;
    }
`;

const Artical = styled.div`
    padding: 6rem 0rem;
   .images__container{
      width: 80%;
      margin: 0rem auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
      grid-gap: 1.5rem;
      
      
    @media(max-width: 56rem){
      width: 90%;
    }
      img{
          width: 100%;
          height: 100%;

          border-radius: 1.5rem;
          margin-bottom: 1rem;
      }
     
   }
   .content__area{
        width: 80%;
        margin: 0rem auto;
        padding: 5rem 0rem;
        display: grid;
        
        grid-template-columns: repeat(auto-fill,minmax(50rem,1fr));
        grid-column-gap: 2rem;
        margin-top: 2.5rem;
        
    @media(max-width: 56rem){
      width: 90%;
      grid-template-columns: repeat(auto-fill,minmax(32rem,1fr));
    }
        .details,.info{
            padding: 1rem 1rem 0 0;
            box-sizing: border-box;
        }
        h2{
            font-size: 2rem;
            letter-spacing: 0.1rem;
            margin-bottom: 1.6rem;
        }
        h4{
            font-size: 1.4rem;
            margin-bottom: 0.6rem;
        }
        p{
            text-align: justify;
            font-size: 1.2rem;
        }
    }
    .extras{
        width: 80%;
        margin: 0rem auto;
        
    @media(max-width: 56rem){
      width: 90%;
      grid-template-columns: repeat(auto-fill,minmax(32rem,1fr));
    }
        h2{
            font-size: 2rem;
            letter-spacing: 0.1rem;
            margin-bottom: 1.6rem; 
        }
        ul{
            padding: 0rem;
            list-style: none;
            display:  grid;
            grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
            grid-column-gap: 1.5rem;
            @media(max-width: 46rem){
              grid-template-columns: repeat(auto-fill,minmax(32rem,1fr));
            }
            li{
                font-size: 1.4rem;
                margin-bottom: 0.5rem;
            }
        }
    }
`;

