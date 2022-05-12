import styled from "styled-components";

export const StyledAboutCard = styled.article`
  width: clamp(250px, 25vw, 500px);
  text-align: center;
  border: 4px solid ${({ theme }) => theme.clr.lightShade};
  border-radius: 22px;
  padding: 18px 10px;
  margin-top: 20px;

  & h1 {
    margin-bottom: 15px;
  }

  & div {
    display: flex;
  }
`;
