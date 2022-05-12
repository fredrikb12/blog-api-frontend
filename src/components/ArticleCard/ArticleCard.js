import { StyledArticle } from "../../styled/Article.styled";
import { NeutralLink, StyledLink } from "../../styled/Link.styled";
import ArticleCardText from "./ArticleCardText";
import ArticleCardHeader from "./ArticleCardHeader";

function ArticleCard({ post, onClick }) {
  return (
    <NeutralLink to={`/posts/${post._id}`}>
      <StyledArticle onClick={onClick} key={post._id}>
        <ArticleCardHeader text={post.title} to={`/posts/${post._id}`} />
        <ArticleCardText text={post.text} />
      </StyledArticle>
    </NeutralLink>
  );
}

export default ArticleCard;
