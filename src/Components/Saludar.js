import React from "react";

export default function Saludar(props) {
  console.log(props);

  return (
    <div>
      {/* <h2>
        Hola {props.name} tiene {props.edad} años.
      </h2> */}
      <p>
        Pasando usuario como objeto: {props.userInfo.nombre} tiene{" "}
        {props.userInfo.edad}, color fav {props.userInfo.color}
      </p>
      {/* para usar una funcion en el evento onclick recibiendo un valor como parametro se
      debe hacer con la llamada "funcion anónima" solo asi esta funcion se ejecutará cuando
      se haga click en el boton, de lo contrario al recibir una funcion esta se ejecutará sola */}
      <button onClick={() => props.saludarFn(props.userInfo.nombre)}>
        Saludar
      </button>
    </div>
  );
}
