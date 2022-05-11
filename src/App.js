import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import { StyledHomepage } from "./styled/Homepage.styled";
import { StyledLink } from "./styled/Link.styled";
import { StyledNav } from "./styled/Nav.styled";

function App() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function fetchTest() {
      fetch("https://guarded-mesa-79248.herokuapp.com/posts", {
        credentials: "include",
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    fetchTest();
  }, []);
  return (
    <>
      <GlobalStyle />
      <header>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/archive">Archive</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </StyledNav>
      </header>
      <StyledHomepage>
        <Outlet />
      </StyledHomepage>
    </>
  );
}

export default App;
