import { useOutletContext } from "react-router-dom";
import { StyledArchive } from "../styled/Archive.styled";
import ArchiveArticle from "./ArchiveArticle";

function Archive() {
  const [posts] = useOutletContext();
  return (
    <StyledArchive>
      <h1>Foole's Archives</h1>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts.map((post) => {
          return <ArchiveArticle key={post._id} post={post} />;
        })}
      </div>
    </StyledArchive>
  );
}

export default Archive;
