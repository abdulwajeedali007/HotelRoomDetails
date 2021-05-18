import React from 'react'
import styled from 'styled-components'
import Title from './Title';
import {Link} from 'react-router-dom'
import {FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube} from 'react-icons/fa'

function Footer() {
    return (
        <FooterContent>
            <div className="container">
                <Title  title={'PrimeRooms'}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, hic aliquid nisi delectus exercitationem quidem esse officiis sunt voluptas cum vero earum quia commodi. Ipsa, repellendus <br/>nulla officia dolorum quod libero laborum, eum maxime dolor optio repudiandae alias quo sapiente.</p>
            </div>
            <div className="social__icons">
               <div className="container">
                   <Link to="/" className="social__link"><FaInstagram/></Link>
                   <Link to="/" className="social__link"><FaLinkedinIn/></Link>
                   <Link to="/" className="social__link"><FaTwitter/></Link>
                   <Link to="/" className="social__link"><FaFacebookF/></Link>
                   <Link to="/" className="social__link"><FaYoutube/></Link>
               </div>
            </div>
        </FooterContent>
    )
}

export default Footer


const FooterContent = styled.div`
   padding: 5rem 0rem;
   background: var(--primary__color);
   color: #fff;
   .container{
      width: 80%;
      margin: 0rem auto;
      p{
          text-align: center;
          font-size: 1.2rem;
          margin-top:-1.5rem;
      }
   }
   .social__icons{
       margin-top: 2rem;
       .container{
           text-align: center;
           .social__link{
              font-size: 2rem;
              margin: 0rem 0.5rem;
              color: #fff;
              transform: scale(1);
              transition: all 0.2s linear;

              text-decoration: none;
              &::hover{
                transform: scale(1.1);
              }
           }
       }
   }

`;