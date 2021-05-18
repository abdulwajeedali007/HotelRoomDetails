import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function ErrorPage() {
    return (
        <Error className="error__page">
            <h1>Page not found Error 402</h1>
            <Link to="/" className="link">Back to home</Link>
        </Error>
    )
}

export default ErrorPage

const Error = styled.div`
  width: 100%;
  height: calc(100vh - 29.6rem);
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  box-sizing: border-box;

  background:linear-gradient(45deg,transparent, var(--primary__color), transparent);


  h1{
      font-size: 2.8rem;
      color: #fff;
      letter-spacing:0.1rem;
      align-self: end;
  }
  .link{
      color: #fff;
      align-self: start;
      font-size: 1.2rem;
      margin-top: 1rem;
  }
`;
