import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pags/Home';
import Sobre from './components/pags/Sobre';
import Contato from './components/pags/Contato';
import Lojas from './components/pags/Lojas';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      
      <Navbar />
      
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/sobre">
          <Sobre />
        </Route>

        <Route exact path="/contato">
          <Contato />
        </Route>

        <Route exact path="/lojas">
          <Lojas />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
