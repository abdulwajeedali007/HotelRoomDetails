import React from 'react'
import styled from 'styled-components'

function Title({title}) {
    return (
        <div style={{textAlign: 'center'}}>
            <Heading>{title}</Heading>
        </div>
    )
}

export default Title


const Heading = styled.h1`
   margin-bottom: 2.5rem;
   font-size: 2.8rem;
`;