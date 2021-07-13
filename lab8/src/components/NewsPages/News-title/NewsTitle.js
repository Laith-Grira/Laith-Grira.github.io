import teamImage from '../../../assets/pictures/teamImage.jpg';
import './NewsTitle.css';

const NewsTitle = () => {
    return ( 
        <div className="news-main">
            <h1>The Team Is Ready For The New 2021/2022 Season</h1>
            <div className="team-image">
                <img src={teamImage} alt="team image" />
            </div>
            <br />
            <div className="news-text">
                <p>Throughout Ottawa United’s history, silly season is an event that perpetually spins 365 days of the year, 
                    only to ramp up in June, July, and August where the transfer activity hits its apex of chaos. 
                    Since 2018, we’ve focused mostly on departures, goodbyes, and tributes; with rare signings scattered throughout.
                </p>

                <p>This summer could prove to be the same. We’ve already sifted through departures of Zinedine Zidane (2.0) and 
                    Sergio Ramos. The pantheon of figures responsible for flipping Europe on its head through a dynastic reign 
                    are one-by-one soaring out of the Bernabeu and putting a close to an unforgettable chapter.
                </p>

                <p>The exodus will likely continue. Carlo Ancelotti wants to trim down the squad, for better or worse. Some 
                    are critical of that initiative, but it’s necessary. The roster is not abundant with superstars, 
                    but it’s heavy on players who won’t see the field, and may drag the team’s morale with their lack 
                    of playing time and rumblings. Superfluous players could also turn a penny and shed the team of salary — a 
                    welcome sight. Six players last season, not including the youth team players and players who were sent out on 
                    loan mid-way through the campaign, played less than 1000 minutes total. One of those players, Isco, had no major 
                    injuries (he missed just two games due to injury) to report. It’s hard to see his situation improving with Martin 
                    Odegaard returning to the club.
                </p>

                <p>Knowing Ancelotti’s love for creative midfield cogs, he may field Odegaard and Isco together through stretches, 
                    but he’ll also have the task of juggling a long list of central midfielders and attackers to wing Karim Benzema 
                    up top. Ancelotti’s rotations are typically tight to begin with. It would be unlikely if at least two players in 
                    that depth chart weren’t ejected out of Madrid by August.
                </p>

                <p>
                    Buyers will emerge, even amid this less-than-ideal financial landscape. Privately-owned clubs are still spending money,
                     others will go into further debt. Real Madrid’s biggest issue will be losing stars at less than market value. 
                     In hindsight, selling players like Gareth Bale, Isco, and Marcelo in the summer of 2018 would’ve been a better 
                     financial decision than holding on to them and losing them for practically nothing now or next summer. 
                     Alas, it’s hard to foresee everything.
                </p>
            </div>
        </div>
     );
}
 
export default NewsTitle;