import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Wheelmap</h1>
      <div className="links">
        <Link to="/">Mapa</Link>
        <Link to="/about">O aplikacji</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;