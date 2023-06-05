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
    </div>
  );
}
