import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Wheelmap 2.0</h1>
      <div className="links">
        <Link to="/">Mapa</Link>
        <Link to="/about">O aplikacji</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;