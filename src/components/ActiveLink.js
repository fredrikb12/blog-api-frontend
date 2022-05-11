import { Link, useMatch, useResolvedPath } from "react-router-dom";
function ActiveLink({ to, children, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link
        style={{ textDecoration: match ? "underline" : "" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}

export default ActiveLink;
