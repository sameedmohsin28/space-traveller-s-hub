import './Header.css'
import logo from '../assets/planetLogo.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <a href="/" className="logoDiv">
      <img src={logo} alt="Space Travelers Logo" />
      <h1>Space Traveller&apos;s Hub</h1>
    </a>
    <nav>
      <NavLink to="/" className="navLinks">Rockets</NavLink>
      <NavLink to="missions" className="navLinks">Mission</NavLink>
      <NavLink to="/myProfile" className="navLinks" activeClassName="active">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
