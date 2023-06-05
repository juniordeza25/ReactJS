/* Importamos el hook de estado (useState) este sirve para manejar los estados de un
elemento en este componente */
import React, { useState } from "react";
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
  /* Hook de estado de un elemento, en este ejemplo se usa el estado de un auto (encendido o apagado) 
  los nombres asignados son a eleccion, recoemndado que sea especifico del estado que se esta usando,
  en este caso stateCar servirá para almacenar el estado del auto (encendido o apagado) y setStateCar
  funciona como si fuera el metoso que sirve para setear el estado del auto, se encarga de cambiar
  los valores. Para finalizar se le da un valor predeterminado al useState, emn este caso un boolean
  para que cambie de false a true segun estado del auto*/
  const [stateCar, setStateCar] = useState(false);

  const encenderApagar = () => {
    /* En esta funcion se setea el estado del auto, enviando el estado distinto en el que se encuentra,
  la primera linea se puede usar en esteComponente sin problema, la segunda linea funciona igual, a
  direfencia que de esa manera sirve para cuando se enviar la funcion setStateCar a otro componente
  y ahi no se tiene acceso al estado del auto, por ello sirve la segunda opcion */

    //setStateCar(!stateCar);
    setStateCar((prevValue) => !prevValue);
  };

  const user = {
    nombre: "J Deza Ramos",
    edad: 24,
    color: "Negro",
  };

  /* Lo que se hace aqui es enviar una funcion al componente Hijo (Saludar) y éste envia un valor al
  componente padre (App) que seria el nombre del usuario */
  const saludarFn = (nombre, edad) => {
    console.log("Hola " + nombre);
    // usando template string, manera mas facil de usar texto con variables
    //Manera comun
    console.log("Hola " + nombre + ", tiene " + edad + " años.");
    //Template string usando backtick (´´)
    console.log(`Hola ${nombre}, tiene ${edad} años.`);
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
        <Saludar userInfo={user} saludarFn={saludarFn} />

        {/* Aqui se usa un if para validar el estado del auto */}
        <h4>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h4>
        <button onClick={encenderApagar}>Encender/Apagar</button>

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
