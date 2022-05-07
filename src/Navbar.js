import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Fast Wheelmap</h1>
      <div className="links">
        <Link to="/">Widok główny</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;