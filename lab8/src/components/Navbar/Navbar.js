import './Navbar.css';
import Logo from '../../assets/logo/ottawa-united-logo.gif';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n .changeLanguage(language);
    }

    return ( 
        <div className="nav-container">
            <nav className="navbar">
                <img src={Logo} alt="team logo" /> <h3>OTTAWA UNITED F.C.</h3>
                <div className="links">
                    <Link to="/">{t("navbar.home-link")}</Link>
                    <Link to="/team">{t("navbar.team-link")}</Link>
                    <Link to="/fixtures">{t("navbar.fixtures-link")}</Link>
                    <Link to="/tickets">{t("navbar.tickets-link")}</Link>
                    <Link to="/stats">{t("navbar.stats-link")}</Link>
                    <Link to="/contact">{t("navbar.contact-link")}</Link>
                </div>
                <select id="lang" name="language" className="lang" onChange={(e) => changeLanguage(e.target.value)}>
                    <option selected value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </nav>
        </div>
     );
}
 
export default Navbar;