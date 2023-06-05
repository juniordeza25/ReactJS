import logo from "./logo.svg";
import "./App.css";
/*Se importa el componente y se le asigna un nombre para ser usado, dicho
nombre es recomendable que sea igual que el componente para que sea facil ubicarlo
mas adelante en el codigo*/
import HolaMundo from "./Components/HolaMundo.js";
/*Para usar el componente que no es por default se debe hacer mediante llaves
y sigue la misma regla del nombre explicado anteriormente*/
import { AdiosMundo } from "./Components/HolaMundo.js";
import Saludar from "./Components/Saludar";

function App() {
  const user = {
    nombre: "J Deza Ramos",
    edad: 24,
    color: "Negro",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Para usar el compoente importado se usa el nombre que le damos en el 
        import como una etiqueta HTML*/}
        <HolaMundo />
        <AdiosMundo />
        {/* <Saludar name="Junior Deza" edad="22" />
        <Saludar name="Estefano Deza" edad="23" /> */}
        <Saludar userInfo={user} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
