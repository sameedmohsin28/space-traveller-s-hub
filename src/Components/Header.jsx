import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import logoLink from '../assets/planetLogo.png';

const Header = () => (
  <header>
    <a href="/" className="logoDiv">
      <img src={logoLink} alt="Space Travelers Logo" />
      <h1>Space Traveller&apos;s Hub</h1>
    </a>
    <nav>
      <NavLink to="/" className="navLinks">Rockets</NavLink>
      <NavLink to="/missions" className="navLinks">Missions</NavLink>
      <span className="verticalSeparator" />
      <NavLink to="/myProfile" className="navLinks">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
