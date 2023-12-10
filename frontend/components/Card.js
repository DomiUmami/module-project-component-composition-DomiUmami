import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 2rem;

  h2 {
    color: ${pr => pr.$color};
    font-size: 2.5rem;
    margin: 0 0 1 rem 0;
  }

  p {
    margin: 0 0 1.5rem 0;

    &::first-line {
      font-size: 1.5rem;
    }
  }
`

export default function Card({ title, text, imageURL, date }) {
    return (
  <StyledCard $color="blue" className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure
          imageURL={imageURL}
          caption={date}
        />
      </StyledCard>
    )
  }