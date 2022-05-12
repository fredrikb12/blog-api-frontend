import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { StyledArticle } from "../styled/Article.styled";
import { StyledHomepage } from "../styled/Homepage.styled";
import { StyledLink } from "../styled/Link.styled";
import ArticleCard from "./ArticleCard";

function Homepage() {
  const [posts] = useOutletContext();
  const nav = useNavigate();
  return (
    <StyledHomepage>
      {posts.map((post) => {
        return (
          <ArticleCard
            onClick={() => {
              nav(`/posts/${post._id}`);
            }}
            key={post._id}
            post={post}
          />
        );
      })}
    </StyledHomepage>
  );
}

export default Homepage;
