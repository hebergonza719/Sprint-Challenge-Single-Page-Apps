import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div>
      <div>
        <img src={character.image} alt={`A character named ${character.name} from the show Rick and Morty`}/>
      </div>
      <h3>{character.name}</h3>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
    </div>
  );
}
