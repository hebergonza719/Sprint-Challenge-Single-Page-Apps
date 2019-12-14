import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const BannerImg = styled.img`
  width: 100%;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid cadetblue;
  color: cadetblue;
  margin: 2.5em 1em;
  padding: 0.25em 1em;
  font-size: 20px;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <BannerImg
          className="main-img"
          src="https://i0.wp.com/www.foxforcefivenews.com/wp-content/uploads/2018/05/rick-and-morty-banner.jpg"
          alt="rick and morty banner"
          title="image source: http://www.foxforcefivenews.com/"
        />
      </header>
      <Link className ="welcome-link" to="/characters"><Button>Characters</Button></Link>
    </section>
  );
}
