import React from 'react'
import styled from "styled-components"

const StyledCard = styled.div`
  
`

const StyledP = styled.div`
  color: #eee;
  text-shadow: 1px 2px black;
`


function CharacterCard(props) {
  return (
    <StyledCard>
      <img src = {props.image} alt="rick-morty-imgs" className="rm-images"/>
      <p><button> More Info </button></p>
      <StyledP>
      <p>Name: {props.name}</p>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      </StyledP>

      </StyledCard>
  )
}

export default CharacterCard