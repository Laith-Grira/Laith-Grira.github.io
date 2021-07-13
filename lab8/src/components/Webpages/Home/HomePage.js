import './HomePage.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/OttawaUnited.png';
import teamImage from '../../../assets/pictures/teamImage.jpg';
import kakaManager from '../../../assets/pictures/kakaManager.jpg';
import xhaka from '../../../assets/pictures/xhaka.jpg';
import stadium from '../../../assets/pictures/stadium.jpg';

const HomePage = () => {
    return(
        <div className="main">
            <img src={Logo} alt="team logo" />
            <Link to="/news-title">
                <div className="news">
                    <div className="news-info">
                        <h3><b>Men's Team</b></h3>
                        <h1>The Team Is Ready For The New 2021/2022 Season</h1>
                    </div>
                    <div className="news-image">
                        <img src={teamImage} alt="team image" />
                    </div>
                </div>
            </Link>
            <h1>News Of Our Team</h1>
            <div className="news-feed">
                <div className="news1">
                    <a href="https://acmilanspot.com/kaka-i-would-love-to-start-my-career-as-manager-in-milan/" target="_blank">
                        <img src={kakaManager} alt="kaka" />
                        <p><b>Kaka is looking forward to be our new team manager for this season</b></p>
                    </a>
                </div>
                <div className="news2">
                    <a href="https://talksport.com/football/904786/switzerland-granit-xhaka-england-euro-2020-semi-finals/" target="_blank">
                        <img src={xhaka} alt="xhaka" />
                        <p><b>Our player Xhaka lost in the Euro 2020 against England and left the tournement</b></p>
                    </a>
                </div>
                <div className="news3">
                    <a href="https://the18.com/soccer-entertainment/smallest-soccer-stadiums-in-the-top-flights" target="_blank">
                        <img src={stadium} alt="xhaka" />
                        <p><b>Our Team managment is looking forward to expend the stadium capacity by 10,000 seats</b></p>
                    </a>
                </div>
            </div>
            <h1>Watch Our Team In Action</h1>
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