import { Link, useOutletContext } from "react-router-dom";
import { StyledArticle } from "../styled/Article.styled";
import { StyledHomepage } from "../styled/Homepage.styled";
import { StyledLink } from "../styled/Link.styled";

function Homepage() {
  const [posts] = useOutletContext();
  return (
    <StyledHomepage>
      {posts.map((post) => {
        return (
          <StyledArticle key={post._id}>
            <h1>
              <StyledLink to={`/posts/${post._id}`}>{post.title}</StyledLink>
            </h1>
            <p>
              {post.text.length > 70
                ? post.text.slice(0, 70) + "..."
                : post.text}
            </p>
          </StyledArticle>
        );
      })}
    </StyledHomepage>
  );
}

export default Homepage;
