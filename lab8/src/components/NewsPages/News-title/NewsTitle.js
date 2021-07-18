import teamImage from '../../../assets/pictures/teamImage.jpg';
import './NewsTitle.css';
import { useTranslation } from 'react-i18next';

const NewsTitle = () => {

    const { t, i18n } = useTranslation();

    return ( 
        <div className="news-main">
            <h1>{t("home.news-title.big-title")}</h1>
            <div className="team-image">
                <img src={teamImage} alt="team image" />
            </div>
            <br />
            <div className="news-text">
                <p>{t("home.news-title.news-page.paragraph1")}</p>

                <p>{t("home.news-title.news-page.paragraph2")}</p>

                <p>{t("home.news-title.news-page.paragraph3")}</p>

                <p>{t("home.news-title.news-page.paragraph4")}</p>

                <p>{t("home.news-title.news-page.paragraph5")}</p>
            </div>
        </div>
     );
}
 
export default NewsTitle;