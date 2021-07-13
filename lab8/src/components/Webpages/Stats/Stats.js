import './Stats.css';

const Stats = () => {
    return ( 
        <div className="main-stats mt-5">
            <h1>Canadian League Table</h1>
            <table className="table-elem mb-3">
                <tr>
                    <th>Club</th>
                    <th>MP</th>
                    <th>Pts</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    
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
                <p><b>Legend:</b> <br /> <b>MP</b> (Matchs Played), <b>Pts</b> (Points), <b>W</b> (Wins), <b>D</b> (Draws), <b>L</b> (Loses), <b>GF</b> (Goals For), <b>GA</b> (Goals Against)</p>

        </div>
     );
}
 
export default Stats;