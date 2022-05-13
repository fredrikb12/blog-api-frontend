import styled from "styled-components";

export const StyledAboutCard = styled.article`
  width: clamp(250px, 35vw, 650px);
  text-align: center;
  border: 4px solid ${({ theme }) => theme.clr.lightShade};
  border-radius: 22px;
  padding: 18px 10px;
  margin-top: 60px;
  box-shadow: 0px 0px 12px 0 ${({ theme }) => theme.clr.lightAccent};

  &:nth-child(odd) {
    box-shadow: 15px -15px 0 0 ${({ theme }) => theme.clr.lightAccentShadow};
  }

  &:nth-child(even) {
    box-shadow: -15px -15px 0 0 ${({ theme }) => theme.clr.brightAccentShadow};
  }
  & h1 {
    margin-bottom: 15px;
  }

  & div {
    display: flex;
  }

  @media (min-width: 600px) {
    &:nth-child(odd) {
      margin-left: 50px;
    }
    &:nth-child(even) {
      margin-left: -50px;
    }
  }
`;
