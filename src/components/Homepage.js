import { useOutletContext } from "react-router-dom";
import { StyledHomepage } from "../styled/Homepage.styled";

function Homepage() {
  const [posts] = useOutletContext();
  return (
    <StyledHomepage>
      {posts.map((post) => {
        return (
          <article key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </article>
        );
      })}
    </StyledHomepage>
  );
}

export default Homepage;
