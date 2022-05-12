import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid;
  border-radius: 12px;
  padding: 10px 20px;
  text-align: center;
  max-width: clamp(250px, 80vw, 500px);
  color: ${({ theme }) => theme.clr.lightShade};

  &:nth-child(odd) {
    border-color: ${({ theme }) => theme.clr.lightAccent};
    a {
      color: ${({ theme }) => theme.clr.lightShade};
    }
  }
  &:nth-child(even) {
    border-color: ${({ theme }) => theme.clr.darkAccent};
    a {
      color: ${({ theme }) => theme.clr.lightShade};
    }
  }
`;
