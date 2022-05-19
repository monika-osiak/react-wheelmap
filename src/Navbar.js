import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Wheelmap 2.0</h1>
      <div className="links">
        <p><Link to="/">Mapa</Link></p>
        <p><Link to="/about">O aplikacji</Link></p>
      </div>
    </nav>
  );
}
 
export default Navbar;