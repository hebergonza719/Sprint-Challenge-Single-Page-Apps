import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";


const InputField = styled.input`
  margin-left: 6px;
`

const Button = styled.button`
  margin: 10px;
`

export default function SearchForm({ characters }) {

  const [searchTerm, setSearchTerm] = useState("");

  // Why won't this useState initialize searchResults????
  const [searchResults, setSearchResults] = useState(characters);

  useEffect(() => {}, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();

    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  };


  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search Rick and Morty Characters:</label>
        <InputField
          id="name"
          type="text"
          placeholder="Rick Sanchez"
          onChange={handleChange}
          value={searchTerm}
        />
        <Button type="submit" onClick={submitForm}>Search</Button>
      </form>
      {searchResults.map(character => (
        <CharacterCard character={character} />
      ))}
    </section>
  );
}
