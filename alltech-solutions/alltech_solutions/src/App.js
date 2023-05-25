
import './App.css';
import Card from './Components/Card';
import Foto from './Components/imgs/Eu.jpeg';

function App() {
  

  return (

    <div className="App">
      


      <header className="header">
        
      <Card nome="Anderson Mattar" idade="46" profissao="Programador Junior" foto={Foto} />

        <nav>
          <ul className="Menu">
            <li>Contatos</li>
            <li>Loja</li>
          </ul>
        </nav>

       


       

      </header>


    </div>
  );
}

export default App;
