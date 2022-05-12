import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import { StyledHomepage } from "./styled/Homepage.styled";
import { StyledLink } from "./styled/Link.styled";
import { StyledNav } from "./styled/Nav.styled";
import { ThemeProvider } from "styled-components";

function App() {
  const [posts, setPosts] = useState([]);

  const theme = {
    clr: {
      main: "#1c121b",
      lightAccent: "#808C83",
      lightShadow: "#3F4741",
      lightAccentHover: "#A1EDB3",
      darkAccent: "#302C5C",
      lightShade: "#D8CFB2",
      darkShade: "#360B36",
      darkShadeHover: "#590C59",
      purpleBorder: "#700070",
      blueBorder: "#405E8A",
    },
  };

  useEffect(() => {
    async function fetchTest() {
      fetch("https://guarded-mesa-79248.herokuapp.com/posts", {
        credentials: "include",
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => setPosts(() => data));
    }
    fetchTest();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header>
          <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/archive">Archive</StyledLink>
            <StyledLink to="/about">About</StyledLink>
          </StyledNav>
        </header>
        <Outlet context={[posts]} />
      </ThemeProvider>
    </>
  );
}

export default App;
