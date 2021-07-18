import './Stats.css';
import { useTranslation } from 'react-i18next';

const Stats = () => {

    const { t, i18n } = useTranslation();

    return ( 
        <div className="main-stats mt-5">
            <h1>{t("stats.title")}</h1>
            <table className="table-elem mb-3">
                <tr>
                    <th>{t("stats.tb-row.club")}</th>
                    <th>{t("stats.tb-row.mp")}</th>
                    <th>{t("stats.tb-row.pts")}</th>
                    <th>{t("stats.tb-row.w")}</th>
                    <th>{t("stats.tb-row.d")}</th>
                    <th>{t("stats.tb-row.l")}</th>
                    <th>{t("stats.tb-row.gf")}</th>
                    <th>{t("stats.tb-row.ga")}</th>
                    
                </tr>
                <tr>
                    <td><b>1 -</b> Toronto FC</td>
                    <td>12</td>
                    <td>28</td>
                    <td>9</td>
                    <td>1</td>
                    <td>2</td>
                    <td>41</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td><b>2 -</b> Ottawa United FC</td>
                    <td>12</td>
                    <td>27</td>
                    <td>9</td>
                    <td>0</td>
                    <td>3</td>
                    <td>39</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td><b>3 -</b> FC Forge</td>
                    <td>12</td>
                    <td>25</td>
                    <td>8</td>
                    <td>1</td>
                    <td>3</td>
                    <td>40</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td><b>4 -</b> Halifax FC</td>
                    <td>12</td>
                    <td>21</td>
                    <td>6</td>
                    <td>3</td>
                    <td>2</td>
                    <td>37</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td><b>5 -</b> York United FC</td>
                    <td>12</td>
                    <td>20</td>
                    <td>6</td>
                    <td>2</td>
                    <td>4</td>
                    <td>31</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td><b>6 -</b> FC Edmonton</td>
                    <td>12</td>
                    <td>18</td>
                    <td>5</td>
                    <td>3</td>
                    <td>4</td>
                    <td>33</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td><b>7 -</b> Pacific FC</td>
                    <td>12</td>
                    <td>15</td>
                    <td>4</td>
                    <td>3</td>
                    <td>5</td>
                    <td>23</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td><b>8 -</b> Cavalry FC</td>
                    <td>12</td>
                    <td>14</td>
                    <td>4</td>
                    <td>2</td>
                    <td>6</td>
                    <td>13</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td><b>9 -</b> CF Montreal</td>
                    <td>12</td>
                    <td>10</td>
                    <td>3</td>
                    <td>1</td>
                    <td>8</td>
                    <td>14</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td><b>10 -</b> New England</td>
                    <td>12</td>
                    <td>7</td>
                    <td>1</td>
                    <td>4</td>
                    <td>7</td>
                    <td>9</td>
                    <td>31</td>
                </tr>
                </table>
                <p><b>{t("stats.legend.title")}</b> <br /> 
                    <b>{t("stats.tb-row.mp")}</b> {t("stats.legend.mp")}, 
                    <b>{t("stats.tb-row.pts")}</b> {t("stats.legend.pts")}, 
                    <b>{t("stats.tb-row.w")}</b> {t("stats.legend.w")}, 
                    <b>{t("stats.tb-row.d")}</b> {t("stats.legend.d")}, 
                    <b>{t("stats.tb-row.l")}</b> {t("stats.legend.l")}, 
                    <b>{t("stats.tb-row.gf")}</b> {t("stats.legend.gf")}, 
                    <b>{t("stats.tb-row.ga")}</b> {t("stats.legend.ga")}
                </p>

        </div>
     );
}
 
export default Stats;