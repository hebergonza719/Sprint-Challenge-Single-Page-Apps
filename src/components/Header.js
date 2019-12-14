import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid cadetblue;
  color: cadetblue;
  padding: 0.25em 1em;
  font-size: 20px;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link exact to="/"><Button>Home</Button></Link>
    </header>
  );
}
