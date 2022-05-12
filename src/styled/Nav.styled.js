import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.clr.lightAccent};

  gap: clamp(25px, 8vw, 200px);
  height: 8vh;
  & > a {
    color: ${({theme}) => theme.clr.darkShade};
    font-size: 1.6rem;
  }
`;
