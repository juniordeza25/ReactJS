import React from "react";

export default function Saludar(props) {
  console.log(props);
  /* La asignacion por destructuring sirve para sacar los valor recibidos en los props y asi
  al requerir una prop se usará el nombre asignado y no será necesario hacer una escala para
  llegar al prop que se quiere usar */
  const { userInfo, saludarFn } = props;
  //de esta manera se le asigna un valor por defecto a una prop en caso que no se encuentre la prop
  const { nombre = "Anonimo" } = userInfo;

  return (
    <div>
      {/* <h2>
        Hola {props.name} tiene {props.edad} años.
      </h2> */}
      <p>
        Pasando usuario como objeto: {nombre} tiene {props.userInfo.edad}, color
        fav {props.userInfo.color}
      </p>
      {/* para usar una funcion en el evento onclick recibiendo un valor como parametro se
      debe hacer con la llamada "funcion anónima" solo asi esta funcion se ejecutará cuando
      se haga click en el boton, de lo contrario al recibir una funcion esta se ejecutará sola */}
      <button onClick={() => saludarFn(nombre)}>Saludar</button>
    </div>
  );
}
