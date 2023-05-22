
import './App.css';

function App() {
const saudação = 'seja bem vindo!' 

  return (
    <div className="App">
      <header className="App-header">

        <div className="App-logo">
          <img src='./alltecvideo.jpg' alt='logo alltech' title="Alltech" className='App-image'/>

          <p>Olá, {saudação}</p>
          <h1 className="App-title">All Tech -- Site em construção!</h1>
         

        </div>



      </header>


    </div>
  );
}

export default App;
