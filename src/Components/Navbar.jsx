import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {HiOutlineMenuAlt3, HiOutlineMenuAlt2} from 'react-icons/hi'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
             toggle: false,
            
        }
        this.handlClick = this.handlClick.bind(this)
    }
    handlClick(){
       this.setState({toggle: !this.state.toggle});
       
    }
         displayNone(){
            this.setState({toggle: !this.state.toggle});
        };
   
    
    

    render() {
        
        
        return (
            <Container className="navbar__container">
                <Nav className="navbar">
                    <Link to="/" className="brand__heading">PrimeRooms</Link>
                    <div className="navbar__toggle"  onClick={this.handlClick}>
                       <HiOutlineMenuAlt3 onClick={this.handlClick} className={`icon ${this.state.toggle && 'active'}`}/>
                       <HiOutlineMenuAlt2 onClick={this.handlClick} className={`icon2 ${this.state.toggle && 'active'}`}/>
                    </div>
                    <div className={`nav ${this.state.toggle ? 'active': ''}`} >
                       <ul>
                         <li className="navbar__item" onClick={()=>this.displayNone()}>
                            <Link to="/" className="links">Home</Link>
                         </li>
                         <li className="navbar__item" onClick={()=>this.displayNone()}>
                            <Link to="/Rooms" className="links" >Rooms</Link>

                         </li>
                       </ul>
                    </div>
                </Nav>

            </Container>
            
        )
    }
}


const Container = styled.div`
 background: var(--primary__color);
 color: #fff;
 padding: 1rem 0rem; 
 position: relative;
 .navbar{
     position: relative;
     .icon{
         display: none;
         &.active{
             display: block;
         }
     }
     .icon2{
         display: block;
       &.active{
          display: none;
       }
     }
 }
 .brand__heading{
     font-size: 2.6rem;
     font-weight: 800;

     text-decoration: none;
     color: #fff;
 }
 .navbar__toggle{
     font-size: 2.5rem;
     justify-self: end;
     /* display: ${props => props.toggle? 'block' : 'none'}; */
     display: none;
    
 }
 @media(max-width: 50rem){
     .navbar__toggle{
         display: block;
     }
     .nav{
         position: absolute;
         left: 0rem;
         top: 5.1rem;
         display: block;
         opacity: 0;
         z-index: 1;
         width: 100%;
         height: 0%;
         transition: all 0.2s linear;
        &.active{
            height: auto;
            opacity: 1;
        }
         ul{
             display: block;
             background: var(--primary__color);
             height: 100%;
             display: flex;
             flex-direction: column;
            justify-content: flex-start;
            align-items: center;
             li{
                 width: 100%;
                &:not(last-child){
               margin-bottom: 1rem;
                      
               &:hover .links{
                  background: var(lightgreen__color);
               }
               .links{
                   padding: 1rem;
                   display: block;
                   width: 100%;

                   &:after{
                       display: none;
                   }
               }
             }
             
             }
         }
     }
 }
`;

const Nav = styled.div`
  width: 60%;
  margin: 0rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media(max-width: 50rem){
      width: 100%;
      padding: 0rem 1rem;
  }
  h1{
      font-size: 2.4rem;

  }
  .nav{
    justify-self: end;
  }
  ul{
      padding: 0rem;
      margin: 0rem;
      
      display: flex;
      list-style: none;
      li{
          margin: 0rem 1.5rem;
          .links{
              color: #fff;
              text-decoration: none;
              cursor: pointer;
              transition: all 0.3s linear;
              font-size: 1.4rem;
              position: relative;
              &:after{
                  content :'';
                  position: absolute;
                  left: 0rem;
                  bottom: -100%;
                  width: 0%;
                  height: 0.4rem;
                  background: #fff;
                  transition: all 0.5s linear;
              }
              &:hover {
                &:after{
                  width: 100%
              }
              }
            }
        }
    }

`;

