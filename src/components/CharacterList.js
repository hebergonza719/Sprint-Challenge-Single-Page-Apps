import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const CharacterSection = styled.section `
  margin-top: 15px;
`

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res);
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    };

    getCharacters();
    
  }, []);

  return (
    <CharacterSection>
      <SearchForm characters={characters} />
      <h2>Full list of characters below!</h2>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </CharacterSection>
  );
}
