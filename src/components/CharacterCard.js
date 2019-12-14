import React from "react";
import styled from 'styled-components'

const DisplayCard = styled.section`
  display: flex;
  margin: 25px;
  border: solid;
  align-items: center;
`
const CardDiv = styled.div`
  width: 45%;
`

const Info = styled.h3`
  font-size: 25px;
`

export default function CharacterCard({ character }) {
  return (
    <DisplayCard>
      <CardDiv>
        <img src={character.image} alt={`A character named ${character.name} from the show Rick and Morty`}/>
      </CardDiv>
      <CardDiv>
        <Info>Name: {character.name}</Info>
        <Info>Status: {character.status}</Info>
        <Info>Species: {character.species}</Info>
      </CardDiv>
    </DisplayCard>
  );
}
