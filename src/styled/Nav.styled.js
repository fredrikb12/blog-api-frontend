import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7d3b7;

  gap: clamp(25px, 8vw, 200px);
  height: 8vh;
  & > a {
    color: #570964;
    font-size: 1.6rem;
  }
`;
