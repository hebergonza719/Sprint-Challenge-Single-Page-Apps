import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

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
    <section className="character-list">
      {/* {characters.map(character => (
        // <MovieDetails key={movie.id} movie={movie} />
        <Link to={`/movies/${movie.id}`}>
          <MovieCard movie={movie}/>
        </Link>
      ))} */}
      {characters.map(character => (
        <CharacterCard character={character} />
      ))}
    </section>
  );
}
