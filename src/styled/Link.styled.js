import ActiveLink from "../components/ActiveLink";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(ActiveLink)`
  text-decoration: none;
  color: #ababab;
  &:hover {
    text-decoration: underline;
  }
`;

export const NeutralLink = styled(Link)`
  text-decoration: none;
  color: "";
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.clr.lightShade};
  }
`;
