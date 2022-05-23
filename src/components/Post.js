import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`http://localhost:3000/posts/${postId}`, {
          credentials: "include",
          method: "GET",
          mode: "cors",
        });
        if (res.status === 200) {
          const post = await res.json();
          console.log(post);
          setPost(() => post);
        } else {
          throw new Error(res.status + ": Something went wrong ");
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchPost();
  }, [postId]);

  if (post === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>{post.title}</h1>

        <div>
          <p>
            {post.author.first_name} {post.author.last_name} -{" "}
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
        <p>{post.text}</p>
      </div>
    );
  }
}

export default Post;
