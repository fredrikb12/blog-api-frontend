import styled from "styled-components";

export const StyledHomepage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 10px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    & article {
      width: clamp(300px, 30vw, 450px);
    }
  }

  @media(min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`;
