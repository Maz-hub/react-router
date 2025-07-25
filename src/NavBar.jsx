import Link from "./Link.jsx";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
