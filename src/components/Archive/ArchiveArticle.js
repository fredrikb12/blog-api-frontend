import { StyledLink } from "../../styled/Link.styled";

function ArchiveArticle({ post }) {
  return (
    <StyledLink style={{ color: "white" }} to={`/posts/${post._id}`}>
      <div style={{ textAlign: "center", padding: "12px 10px" }}>
        <h2 style={{ fontSize: "1.7rem", paddingBottom: "8px" }}>
          {post.title}
        </h2>
        <p>
          {post.author.first_name} {post.author.last_name} -{" "}
          {new Date(post.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </StyledLink>
  );
}

export default ArchiveArticle;
