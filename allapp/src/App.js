import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pags/Home';
import Sobre from './pags/Sobre';
import Contato from './pags/Contato';
import Lojas from './pags/Lojas';
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
      <Footer />
    </Router>
  );
}

export default App;
