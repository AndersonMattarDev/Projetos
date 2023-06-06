import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pags/Home';
import Sobre from './pags/Sobre';
import Contato from './pags/Contato';
import Lojas from './pags/Lojas';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/lojas">Lojas</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/contato">
          <Contato />
        </Route>

        <Route path="/lojas">
          <Lojas />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
