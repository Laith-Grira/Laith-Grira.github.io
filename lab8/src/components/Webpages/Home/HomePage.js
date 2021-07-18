import './HomePage.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/OttawaUnited.png';
import teamImage from '../../../assets/pictures/teamImage.jpg';
import kakaManager from '../../../assets/pictures/kakaManager.jpg';
import xhaka from '../../../assets/pictures/xhaka.jpg';
import stadium from '../../../assets/pictures/stadium.jpg';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

    const { t, i18n } = useTranslation();

    return(
        <div className="main">
            <img src={Logo} alt="team logo" />
            <Link to="/news-title">
                <div className="news">
                    <div className="news-info">
                        <h3><b>{t("home.news-title.small-title")}</b></h3>
                        <h1>{t("home.news-title.big-title")}</h1>
                    </div>
                    <div className="news-image">
                        <img src={teamImage} alt="team image" />
                    </div>
                </div>
            </Link>
            <h1>{t("home.linked-news.title")}</h1>
            <div className="news-feed">
                <div className="news1">
                    <a href="https://acmilanspot.com/kaka-i-would-love-to-start-my-career-as-manager-in-milan/" target="_blank">
                        <img src={kakaManager} alt="kaka" />
                        <p><b>{t("home.linked-news.news1")}</b></p>
                    </a>
                </div>
                <div className="news2">
                    <a href="https://talksport.com/football/904786/switzerland-granit-xhaka-england-euro-2020-semi-finals/" target="_blank">
                        <img src={xhaka} alt="xhaka" />
                        <p><b>{t("home.linked-news.news2")}</b></p>
                    </a>
                </div>
                <div className="news3">
                    <a href="https://the18.com/soccer-entertainment/smallest-soccer-stadiums-in-the-top-flights" target="_blank">
                        <img src={stadium} alt="xhaka" />
                        <p><b>{t("home.linked-news.news3")}</b></p>
                    </a>
                </div>
            </div>
            <h1>{t("home.videos")}</h1>
            <div className="videos">
                <div className="video1">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/pvZ9yVWpCHw`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
                <div className="video2">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/nWw6K8VvLBw`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;