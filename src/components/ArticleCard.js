import { StyledArticle } from "../styled/Article.styled";
import { StyledLink } from "../styled/Link.styled";
import ArticleCardText from "./ArticleCardtext";
import ArticleCardHeader from "./ArticleCardHeader";

function ArticleCard({ post }) {
  return (
    <StyledArticle key={post._id}>
      <ArticleCardHeader text={post.title} to={`/posts/${post._id}`} />
      <ArticleCardText text={post.text} />
    </StyledArticle>
  );
}

export default ArticleCard;
