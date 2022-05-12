import { Link, useOutletContext } from "react-router-dom";
import { StyledArticle } from "../styled/Article.styled";
import { StyledHomepage } from "../styled/Homepage.styled";
import { StyledLink } from "../styled/Link.styled";
import ArticleCard from "./ArticleCard";

function Homepage() {
  const [posts] = useOutletContext();
  return (
    <StyledHomepage>
      {posts.map((post) => {
        return <ArticleCard key={post._id} post={post} />;
      })}
    </StyledHomepage>
  );
}

export default Homepage;
