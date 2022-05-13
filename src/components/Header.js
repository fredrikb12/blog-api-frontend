import { StyledLink } from "../styled/Link.styled";
import { StyledNav } from "../styled/Nav.styled";

function Header() {
  return (
    <header>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/archive">Archive</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </StyledNav>
    </header>
  );
}

export default Header;
