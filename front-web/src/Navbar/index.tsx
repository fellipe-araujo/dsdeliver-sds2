import "./styles.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="main-navbar">
    <Logo />
    <Link to="/" href="home" className="logo-text">
      DS Delivery
    </Link>
  </nav>
);

export default Navbar;