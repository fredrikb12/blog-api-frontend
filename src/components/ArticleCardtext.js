function ArticleCardText({ text }) {
  const length = 70;
  return <p>{text.length > length ? text.slice(0, length) + "..." : text}</p>;
}

export default ArticleCardText;
