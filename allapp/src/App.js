import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pags/Home';
import Sobre from './pags/Sobre';
import Contato from './pags/Contato';
import Lojas from './pags/Lojas';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Message from './pags/Message';
import Artesanato from './pags/Lojas/Artesanato';
import DeliciasCida from './pags/Lojas/DeliciasCida';

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

        <Route exact path="/message">
          <Message />
        </Route>

        <Route exact path="/artesanato">
          <Artesanato />
        </Route>

        <Route exact path="/deliciascida">
          <DeliciasCida />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
