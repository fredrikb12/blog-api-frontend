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

  /*useEffect(() => {
    async function fetchTest() {
      fetch("https://guarded-mesa-79248.herokuapp.com/posts", {
        credentials: "include",
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => setPosts(() => data));
    }
    fetchTest();
  }, []);*/

  return <div>Post</div>;
}

export default Post;
