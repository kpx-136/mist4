import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Note from './Note';
import NotFound from './NotFound';

function App() {
  return (
    <Router>

      <div className="App">
      <header className="App-header">
        <nav>
          <div className = "navbar">

            <img src={logo} alt="logo"/>
            <b><h1>StickIt</h1></b>

            <div className="links">
              <Link to="/">Notes</Link>
              <Link to="/create">New Note</Link>
            </div>

          </div>
        </nav>

        <div className = "content">

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/notes/:id">
              <Note />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

        </div>

      </header>
    </div>

    </Router>
    
  );
}

export default App;
