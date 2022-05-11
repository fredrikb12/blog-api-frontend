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
  &:nth-child(odd) {
    border-color: #76a297;
  }
  &:nth-child(even) {
    border-color: #2b1820;
  }
`;
