import './Navbar.css';
import Logo from '../../assets/logo/ottawa-united-logo.gif';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <nav className="navbar">
                <img src={Logo} alt="team logo" /> <h3>OTTAWA UNITED F.C.</h3>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/fixtures">Fixtures</Link>
                    <Link to="/tickets">Tickets</Link>
                    <Link to="/stats">Stats</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;