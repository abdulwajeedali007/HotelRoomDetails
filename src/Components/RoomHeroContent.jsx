import React from 'react'
import styled from 'styled-components'
import {ContentBox} from './HeroContent'

function RoomHeroContent({children,heading}) {
    return (
        // styled component

        <ContentBoxSinglepage>
          <div className="contentarea">
              <h1 className="heading">{heading}</h1>
              {children}
          </div>
      </ContentBoxSinglepage>
    )
}

export default RoomHeroContent

const ContentBoxSinglepage = styled(ContentBox)`
   .contentarea{
     text-align: center;
      h1.heading{
        text-transform:capitalize;
        text-align: center;
        margin-bottom: 2rem;
      }
      
  }
`;
