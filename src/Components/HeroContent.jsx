import React from 'react'
import styled from 'styled-components'

const HeroContent = ({children}) => {
    return (
        <>
           <ContentBox>
               <div className="contentarea">
                    <h1>Stay here <br/> Carry memories <br/> Forever</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
                        ratione autem earum nam delectus nisi est temporibus eius animi ullam!
                        Sapiente suscipit omnis minima modi qui aperiam ullam aspernatur quis?
                    </p>
                    {children}
               </div>
           </ContentBox>
        </>
    )
}

export default HeroContent;

export const ContentBox = styled.div`
  padding: 1.5rem 2.5rem;

  background: #ebf5f399;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  position: relative;
  .contentarea{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

    h1{
        font-size: 5rem;
        font-weight: 800;
        line-height: 5.5rem;
        margin-bottom: 1rem;
        color: var(--primary__color)
    }
    p{
        font-size: 1.4rem;
    }
      
  }

  @media(max-width: 1200px){
      .contentarea{
          left: 40%;
      }
  }
  @media(max-width: 900px){
    .contentarea{
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 80%;
        h1{
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 3.8rem;
        }
        p{
            font-size: 1.2rem;
        }
    }
}
 

  `