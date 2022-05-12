function ArticleCardHeader({ text, to }) {
  const length = 50;
  return (
    <p style={{ fontSize: "1.5rem" }}>
      {text.length > length ? text.slice(0, length) + "..." : text}
    </p>
  );
}

export default ArticleCardHeader;
