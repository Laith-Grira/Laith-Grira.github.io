import './Fixtures.css';

// Teams logos
import OUFC from '../../../assets/teams/ottawa-united-logo.gif';
import Halifax from '../../../assets/teams/halifax.png';
import Edmonton from '../../../assets/teams/edmonton.png';
import York from '../../../assets/teams/york.png';
import Forge from '../../../assets/teams/forge.png';
import Away from '../../../assets/icons/away.png';
import Home from '../../../assets/icons/stadium.png';

import { useTranslation } from 'react-i18next';

const Fixtures = () => {

    const { t, i18n } = useTranslation();

    return ( 
        <div className="main-fixtures">
            <div className="premier-league">
                <h1>{t("fixtures.league")}</h1>
                <div className="match">
                    <div className="teams">
                        <img src={OUFC} alt="Ottawa United" className="team-pic" />
                        <p className="vs-tag">VS</p>
                        <img src={Halifax} alt="Halifax" className="team-pic" />
                    </div>
                    <div className="match-info">
                        <p>Ottawa United vs Halifax <br />
                           Date: {t("fixtures.date1")} <br />
                           {t("fixtures.matchday")}: 13</p>
                    </div>
                    <div className="stadium">
                        <img src={Home} alt="home" className="team-pic" />
                    </div>
                </div>
                <div className="match">
                    <div className="teams">
                        <img src={York} alt="York" className="team-pic" />
                        <p className="vs-tag">VS</p>
                        <img src={OUFC} alt="Ottawa United" className="team-pic" />
                    </div>
                    <div className="match-info">
                        <p>York United vs Ottawa United <br />
                           Date: {t("fixtures.date2")} <br />
                           {t("fixtures.matchday")}: 14</p>
                    </div>
                    <div className="stadium">
                        <img src={Away} alt="away" className="team-pic" />
                    </div>
                </div>
                <div className="match">
                    <div className="teams">
                        <img src={Edmonton} alt="Edmonton" className="team-pic" />
                        <p className="vs-tag">VS</p>
                        <img src={OUFC} alt="Ottawa United" className="team-pic" />
                    </div>
                    <div className="match-info">
                        <p>FC Edmonton vs Ottawa United <br />
                           Date: {t("fixtures.date3")} <br />
                           {t("fixtures.matchday")}: 15</p>
                    </div>
                    <div className="stadium">
                        <img src={Away} alt="away" className="team-pic" />
                    </div>
                </div>
            </div>
            <div className="league-cup">
                <h1>{t("fixtures.cup")}</h1>
                <div className="match">
                    <div className="teams">
                        <img src={OUFC} alt="Ottawa United" className="team-pic" />
                        <p className="vs-tag">VS</p>
                        <img src={Forge} alt="Forge" className="team-pic" />
                    </div>
                    <div className="match-info">
                        <p>Ottawa United vs FC Forge <br />
                           Date: {t("fixtures.date4")} <br />
                           {t("fixtures.quarter-final")}</p>
                    </div>
                    <div className="stadium">
                        <img src={Home} alt="home" className="team-pic" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Fixtures;