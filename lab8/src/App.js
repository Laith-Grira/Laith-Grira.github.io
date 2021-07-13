import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/Webpages/Home/HomePage';
import TeamPage from './components/Webpages/Team/TeamPage';
import Fixtures from './components/Webpages/Fixtures/Fixtures';
import Tickets from './components/Webpages/Tickets/Tickets';
import Stats from './components/Webpages/Stats/Stats';
import Contact from './components/Webpages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import NewsTitle from './components/NewsPages/News-title/NewsTitle';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path ="/team"><TeamPage /></Route>
            <Route exact path ="/fixtures"><Fixtures /></Route>
            <Route exact path ="/tickets"><Tickets /></Route>
            <Route exact path ="/stats"><Stats /></Route>
            <Route exact path ="/contact"><Contact /></Route>
            <Route exact path ="/news-title"><NewsTitle /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
