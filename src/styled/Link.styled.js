import ActiveLink from "../components/ActiveLink";
import styled from "styled-components";

export const StyledLink = styled(ActiveLink)`
  text-decoration: none;
  color: #ababab;
  &:hover {
    text-decoration: underline;
  }
`;
