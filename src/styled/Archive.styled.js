import styled from "styled-components";

export const StyledArchive = styled.main`
  display: flex;
  flex-direction: column;
  color: ${({theme})=>theme.clr.lightShade};
  align-items: center;
  padding: 30px;
  hr {
    width: clamp(250px, 60%, 1500px);
  }
`