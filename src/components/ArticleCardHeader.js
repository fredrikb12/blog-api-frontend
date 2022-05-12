import { StyledLink } from "../styled/Link.styled";

function ArticleCardHeader({ text, to }) {
  return (
    <p style={{fontSize: "1.5rem"}}>
      <StyledLink to={to}>
        {text.length > 50 ? text.slice(0, 50) + "..." : text}
      </StyledLink>
    </p>
  );
}

export default ArticleCardHeader;
