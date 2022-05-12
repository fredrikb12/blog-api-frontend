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
  background-color: ${({ theme }) => theme.clr.darkShade};


  a:nth-child(odd) > & {
    border-color: ${({ theme }) => theme.clr.lightAccent};
    box-shadow: 4px 6px 8px 2px ${({ theme }) => theme.clr.darkAccent};
  }
  a:nth-child(even) > & {
    border-color: ${({ theme }) => theme.clr.blueBorder};
    box-shadow: 4px 6px 8px 2px ${({ theme }) => theme.clr.lightShadow};
    
  }

  a:nth-child(odd) > &:hover {
    background-color: ${({ theme }) => theme.clr.darkShadeHover};
    color: ${({ theme }) => theme.clr.lightAccentHover};
  }

  a:nth-child(even) > &:hover {
    background-color: ${({ theme }) => theme.clr.darkShadeHover};
    color: ${({ theme }) => theme.clr.lightAccentHover};
  }
`;
