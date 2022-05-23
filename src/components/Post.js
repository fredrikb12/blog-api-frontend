import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentText, setCommentText] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify({ text: commentText, author: commentAuthor }));
    try {
      const res = await fetch(
        `http://localhost:3000/posts/${postId}/comments`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          method: "POST",
          mode: "cors",
          body: JSON.stringify({ text: commentText, author: commentAuthor }),
        }
      );
      if (res.status === 200) {
        const data = await res.json();
        setUpdateMessage(() => data.message);
        setPost((prevPost) => {
          console.log(data);
          return {
            ...prevPost,
            comments: [
              ...prevPost.comments,
              { text: commentText, author: commentAuthor, id: data.id },
            ],
          };
        });
        setCommentAuthor(() => "");
        setCommentText(() => "");
      } else {
        throw new Error(res.status);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function handleChange(e) {
    switch (e.target.name) {
      case "author": {
        setCommentAuthor(() => e.target.value);
        break;
      }
      case "text": {
        setCommentText(() => e.target.value);
        break;
      }
      default:
        break;
    }
  }

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`http://localhost:3000/posts/${postId}`, {
          credentials: "include",
          method: "GET",
          mode: "cors",
        });
        if (res.status === 200) {
          console.log(res);
          const post = await res.json();
          console.log(post);
          setPost(() => post);
        } else {
          throw new Error(res.status + ": Something went wrong ");
        }
      } catch (e) {
        //console.log(e);
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
        {post.comments.length > 0 && <hr style={{ margin: "25px 0" }}></hr>}
        {post.comments.map((comment, index) => {
          return (
            <article key={comment._id || index}>
              <p>{comment.author}</p>
              <p>{comment.text}</p>
            </article>
          );
        })}
        <hr style={{ margin: "25px 0" }}></hr>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: "150px 1fr",
            maxWidth: "800px",
            rowGap: "20px",
          }}
        >
          <label htmlFor="author">Name:</label>
          <input
            type="text"
            name="author"
            value={commentAuthor}
            onChange={handleChange}
            required
            style={{
              backgroundColor: "darkslategrey",
              border: "none",
              padding: "10px",
            }}
          />
          <label htmlFor="text">Text:</label>
          <textarea
            name="text"
            value={commentText}
            onChange={handleChange}
            required
            style={{
              backgroundColor: "darkslategrey",
              border: "none",
              padding: "10px",
            }}
          />
          <button type="submit" style={{ color: "black" }}>
            Comment
          </button>
        </form>
      </div>
    );
  }
}

export default Post;
