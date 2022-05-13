import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: clamp(60px, 10vw, 150px);
  padding: 10px;
  background-color: ${({ theme }) => theme.clr.brightAccentShadow};
  font-size: 1.1rem;
  a {
    width: 40px;
  }
`;
